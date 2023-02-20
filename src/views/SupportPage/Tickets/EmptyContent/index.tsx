import React from 'react';
import {EmptyContainer} from './styles';
import {Title, TypographyText} from 'views/SupportPage/styles';

type ContentProps = {
    icon: string;
    title: string;
    content: string;
};

export function EmptyContent({icon, title, content}: ContentProps) {
    return (
        <EmptyContainer>
            <img src={icon} alt="calendarcheck" />
            <Title>{title}</Title>
            <TypographyText>{content}</TypographyText>
        </EmptyContainer>
    );
}
