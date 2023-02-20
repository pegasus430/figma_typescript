import React from 'react';
import {HiArrowNarrowDown, HiArrowNarrowUp} from 'react-icons/hi';

import {Badge} from 'components/Badge';
import {variants} from 'components/Badge/types';
import {
    StyledTable,
    StyledTH,
    StyledTD,
    TicketTitle,
    TypographyText,
    ForumTitle,
    Avatar,
    AuthorContainer,
    StaffContainer,
    ReplyCountContainer,
} from './styles';
import StaffBadge from 'assets/staff.svg';
import {Link} from 'components/Link';
import {formatDate} from 'utils';
import {SortOption, Ticket} from 'types';
import {Spinner} from 'components/Spinner';

type TableProps = {
    data: Ticket[];
    isLoading: boolean;
    handleSort: (orderBy: string) => any;
    sortOption: SortOption;
};

export function TicketTable({
    data,
    isLoading,
    handleSort,
    sortOption,
}: TableProps) {
    return (
        <>
            {isLoading ? (
                <div>
                    <Spinner />
                </div>
            ) : (
                <StyledTable>
                    <thead>
                        <tr>
                            <StyledTH
                                maxWidth={313}
                                onClick={() => handleSort('title')}>
                                Ticket
                                {sortOption.orderBy === 'title' &&
                                    (sortOption.direction === 'desc' ? (
                                        <HiArrowNarrowDown />
                                    ) : (
                                        <HiArrowNarrowUp />
                                    ))}
                            </StyledTH>
                            <StyledTH maxWidth={67}>Status</StyledTH>
                            <StyledTH
                                maxWidth={150}
                                onClick={() => handleSort('created_time')}>
                                Created on
                                {sortOption.orderBy === 'created_time' &&
                                    (sortOption.direction === 'desc' ? (
                                        <HiArrowNarrowDown />
                                    ) : (
                                        <HiArrowNarrowUp />
                                    ))}
                            </StyledTH>
                            <StyledTH>Replies</StyledTH>
                            <StyledTH removePaddingRight></StyledTH>
                            <StyledTH removePaddingRight></StyledTH>
                        </tr>
                    </thead>
                    <tbody>
                        {!isLoading &&
                            data &&
                            data.map((item) => (
                                <tr key={item.id}>
                                    <StyledTD maxWidth={313}>
                                        <Link path={item.url} external>
                                            <TicketTitle>
                                                {item.title}
                                            </TicketTitle>
                                        </Link>
                                        <ForumTitle>
                                            {item.forum.title}
                                        </ForumTitle>
                                    </StyledTD>
                                    <StyledTD maxWidth={67}>
                                        <Badge
                                            type="rounded"
                                            variant={item.status}>
                                            {item.status}
                                        </Badge>
                                    </StyledTD>
                                    <StyledTD maxWidth={150}>
                                        <TypographyText>
                                            {formatDate(
                                                new Date(item.created_time),
                                            )}
                                        </TypographyText>
                                    </StyledTD>
                                    <StyledTD removePaddingRight={true}>
                                        <AuthorContainer>
                                            <Avatar>
                                                <img
                                                    src={
                                                        item.latest_post_author
                                                            .avatar_url
                                                    }
                                                    alt="avatar"
                                                />
                                            </Avatar>
                                            <TypographyText>
                                                Last by{' '}
                                                {
                                                    item.latest_post_author
                                                        .display_name
                                                }
                                            </TypographyText>
                                        </AuthorContainer>
                                    </StyledTD>
                                    <StyledTD removePaddingRight={true}>
                                        <StaffContainer>
                                            <ReplyCountContainer>
                                                <div className="badge"></div>
                                                <span>{item.num_replies}</span>
                                            </ReplyCountContainer>
                                        </StaffContainer>
                                    </StyledTD>
                                    <StyledTD removePaddingRight={true}>
                                        {item.latest_post_author.is_staff && (
                                            <Badge
                                                variant={variants.PRIMARY}
                                                type="rounded"
                                                className="staff-badge">
                                                <img
                                                    alt="staff badge"
                                                    src={StaffBadge}
                                                />
                                                Staff
                                            </Badge>
                                        )}
                                    </StyledTD>
                                </tr>
                            ))}
                    </tbody>
                </StyledTable>
            )}
        </>
    );
}
