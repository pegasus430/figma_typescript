import React, {useCallback} from 'react';
import {BiSearch} from 'react-icons/bi';
import {useMemo, useState} from 'react';
import {GoChevronDown} from 'react-icons/go';
import {useSelector} from 'react-redux';

import {searchSelector} from 'store/selectors/home';
import {setSearch} from 'store/modules/home';
import {useAppDispatch} from 'store';

import {Card} from 'components/Card';
import {CardBody} from 'components/CardBody';
import {CardHeader} from 'components/CardHeader';
import Input from 'components/Input';
import {ActionGroup, CardHeaderText, CardTitle} from '../styles';
import {EmptyContent} from './EmptyContent';
import tickets from 'mock/tickets.json';

import {Popover, PopoverContent, PopoverIcon} from 'components/Popover';
import {Badge} from 'components/Badge';
import {TicketTable} from 'components/TicketTable';
import {variants} from 'components/Badge/types';
import {MenuItem} from 'components/Popover/Menu';
import {filterTickets, sortTickets} from 'utils';
import CalendarCheck from 'assets/calendarcheck.svg';
import Telescope from 'assets/telescope.svg';

export function TicketsCard() {
    const search = useSelector(searchSelector);
    const dispatch = useAppDispatch();
    const setSearchWord = useCallback(
        (newValue: string) => {
            dispatch(setSearch(newValue));
        },
        [dispatch],
    );
    const [isOpen, trigger] = useState(false);
    const [statusFilter, setStatusFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [sortOption, setSortOption] = useState({
        orderBy: 'created_time',
        direction: 'desc',
    });
    const data = useMemo(
        () =>
            sortTickets(
                filterTickets(tickets, {status: statusFilter}, search),
                sortOption,
            ),
        [statusFilter, search, sortOption],
    );

    const changeStatusFilter = (filter: string) => {
        setStatusFilter(filter);
    };

    const handleChange = (_val, handler) => {
        setLoading(true);
        handler(_val);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const handleSort = (orderBy: string) => {
        if (orderBy === sortOption.orderBy) {
            setSortOption({
                orderBy,
                direction: sortOption.direction === 'desc' ? 'asc' : 'desc',
            });
        } else {
            setSortOption({
                orderBy,
                direction: 'desc',
            });
        }
    };

    const StatuFilterList = () => {
        return (
            <>
                <MenuItem onClick={() => changeStatusFilter('')}>
                    <PopoverContent className="mx-none">
                        <CardHeaderText>All</CardHeaderText>
                        <Badge
                            type="circle"
                            className="ml-auto"
                            variant={variants.PRIMARY}>
                            {tickets.length}
                        </Badge>
                    </PopoverContent>
                </MenuItem>
                <MenuItem onClick={() => changeStatusFilter('Open')}>
                    <PopoverContent className="mx-none">
                        <CardHeaderText>Open</CardHeaderText>
                        <Badge
                            type="circle"
                            className="ml-auto"
                            variant={variants.OPEN}>
                            {filterTickets(tickets, {status: 'open'}).length}
                        </Badge>
                    </PopoverContent>
                </MenuItem>
                <MenuItem onClick={() => changeStatusFilter('Feedback')}>
                    <PopoverContent className="mx-none">
                        <CardHeaderText>Feedback</CardHeaderText>
                        <Badge
                            type="circle"
                            className="ml-auto"
                            variant={variants.FEEDBACK}>
                            {
                                filterTickets(tickets, {status: 'feedback'})
                                    .length
                            }
                        </Badge>
                    </PopoverContent>
                </MenuItem>
                <MenuItem onClick={() => changeStatusFilter('Resolved')}>
                    <PopoverContent className="mx-none">
                        <CardHeaderText>Resolved</CardHeaderText>
                        <Badge
                            type="circle"
                            className="ml-auto"
                            variant={variants.RESOLVED}>
                            {
                                filterTickets(tickets, {status: 'resolved'})
                                    .length
                            }
                        </Badge>
                    </PopoverContent>
                </MenuItem>
            </>
        );
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>My Tickets</CardTitle>
                <ActionGroup>
                    <Popover
                        content={StatuFilterList()}
                        trigger={trigger}
                        isOpen={isOpen}>
                        <PopoverContent>
                            <CardHeaderText>
                                {statusFilter === ''
                                    ? 'All Tickets'
                                    : statusFilter}
                            </CardHeaderText>
                            <Badge
                                type="circle"
                                className="badge"
                                variant={
                                    statusFilter === ''
                                        ? 'primary'
                                        : statusFilter.toLowerCase()
                                }>
                                {
                                    filterTickets(tickets, {
                                        status: statusFilter,
                                    }).length
                                }
                            </Badge>
                            <PopoverIcon>
                                <GoChevronDown />
                            </PopoverIcon>
                        </PopoverContent>
                    </Popover>
                    <Input
                        placeholder="Search Tickets"
                        icon={<BiSearch />}
                        onChange={(e) => handleChange(e, setSearchWord)}
                        value={search}
                        onClear={() => setSearchWord('')}
                    />
                </ActionGroup>
            </CardHeader>
            <CardBody>
                {tickets.length === 0 ? (
                    <EmptyContent
                        icon={CalendarCheck}
                        title={'No Tickets Found!'}
                        content={
                            'Your support tickets or feature requests will appear here.'
                        }
                    />
                ) : data.length ? (
                    <TicketTable
                        data={data}
                        isLoading={loading}
                        handleSort={handleSort}
                        sortOption={sortOption}
                    />
                ) : (
                    <EmptyContent
                        icon={Telescope}
                        title={`No tickets found for "${search}"`}
                        content={
                            'Please adjust your search term and try again.'
                        }
                    />
                )}
            </CardBody>
        </Card>
    );
}
