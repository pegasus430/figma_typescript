import React from 'react';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';

import {
    PageinationContainer,
    PageNumberContainer,
    PageNumber,
    PaginationAction,
    TotalCount,
    ActionButton,
} from './styles';

type PaginationProps = {
    pageCount: number;
    pageNumber: number;
    totalCount: number;
    pageSize: number;
    handleChange: (pageNum: number) => any;
};

export function Pagination({
    pageCount,
    pageNumber,
    totalCount,
    pageSize,
    handleChange,
}: PaginationProps) {
    const handlePrev = () => {
        if (pageNumber > 1) {
            handleChange(pageNumber - 1);
        }
    };

    const handleNext = () => {
        if (pageNumber * pageSize < totalCount) {
            handleChange(pageNumber + 1);
        }
    };

    return (
        <PageinationContainer>
            <PageNumberContainer>
                {Array.from(Array(pageCount).keys()).map((index) => (
                    <PageNumber
                        className={index + 1 === pageNumber ? 'active' : ''}
                        key={`pagenum${index}`}
                        onClick={() => handleChange(index + 1)}>
                        {index + 1}
                    </PageNumber>
                ))}
            </PageNumberContainer>
            <PaginationAction>
                <TotalCount>
                    {`${(pageNumber - 1) * pageSize + 1}-${
                        pageNumber * pageSize < totalCount
                            ? pageNumber * pageSize
                            : totalCount
                    } of ${totalCount}`}
                </TotalCount>
                <ActionButton
                    className={pageNumber === 1 ? 'disabled' : ''}
                    onClick={handlePrev}>
                    <MdArrowBackIosNew />
                </ActionButton>
                <ActionButton
                    className={
                        pageNumber * pageSize >= totalCount ? 'disabled' : ''
                    }
                    onClick={handleNext}>
                    <MdArrowForwardIos />
                </ActionButton>
            </PaginationAction>
        </PageinationContainer>
    );
}
