import React from 'react';
import {Pagination} from 'components/Pagination';
import {useState} from 'react';
import {
    HelpButton,
    SupportPageContainer,
    SupportResourceContainer,
    TicketsContainer,
} from './styles';
import {SupportResource} from './SupportResource';
import {TicketsCard} from './Tickets';
import QuestionMark from 'assets/question.svg';

export default function SupportPage() {
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <SupportPageContainer>
            <SupportResourceContainer>
                <SupportResource />
            </SupportResourceContainer>
            <TicketsContainer>
                <TicketsCard />
            </TicketsContainer>
            <Pagination
                pageCount={3}
                pageNumber={pageNumber}
                totalCount={149}
                pageSize={50}
                handleChange={(pageNumber) => setPageNumber(pageNumber)}
            />
            <HelpButton>
                <img src={QuestionMark} alt="help" />
                Help
            </HelpButton>
        </SupportPageContainer>
    );
}
