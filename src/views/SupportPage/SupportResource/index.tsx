import React from 'react';
import {BiSearch} from 'react-icons/bi';

import Input from 'components/Input';
import {Link} from 'components/Link';
import {Title, TypographyText, TypographySmall} from '../styles';
import {SearchContainer, SupportForumsContainer} from './styles';
import {useState} from 'react';
import RightArrow from 'assets/rightarrow.svg';
import ForumIcon from 'assets/forumicon.svg';
import {Card} from 'components/Card';
import {CardHeader} from 'components/CardHeader';
import {CardBody} from 'components/CardBody';
import {ActionGroup, CardTitle, StartIcon} from '../styles';
import {Button} from 'components/Button';
import {scales, variants} from 'components/Button/types';
import PlusCircle from 'assets/pluscircle.svg';

export function SupportResource() {
    const [search, setSearch] = useState('');

    const handleChange = (_val, handler) => {
        handler(_val);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Suppert Resources</CardTitle>
                <ActionGroup className="ml-auto">
                    <Button variant={variants.TEXT} scale={scales.SM}>
                        Need Help?
                    </Button>
                    <Button
                        startIcon={
                            <StartIcon src={PlusCircle} alt="pluscircle" />
                        }
                        scale={scales.SM}>
                        Get Support
                    </Button>
                </ActionGroup>
            </CardHeader>
            <CardBody>
                <SupportForumsContainer>
                    <img src={ForumIcon} alt="forumicon" />
                    <Title>Support Forums</Title>
                    <TypographyText>
                        Search the topic you need help with in our support
                        forums.
                    </TypographyText>
                    <Link path="#">
                        <TypographySmall>BROWSE FORUMS</TypographySmall>{' '}
                        <img src={RightArrow} alt="rightarrow" />
                    </Link>
                    <SearchContainer>
                        <Input
                            placeholder="Search support forum"
                            icon={<BiSearch />}
                            onChange={(e) => handleChange(e, setSearch)}
                            value={search}
                            onClear={() => setSearch('')}
                            width={370}
                        />
                    </SearchContainer>
                </SupportForumsContainer>
            </CardBody>
        </Card>
    );
}
