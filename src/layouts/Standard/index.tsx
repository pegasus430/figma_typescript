import React, {FC, ReactNode} from 'react';
import {LayoutContainer} from './styles';

type LayoutProps = {
    children: ReactNode;
};

const StandardLayout: FC<LayoutProps> = ({children}) => {
    return <div className="layout-container">{children}</div>;
};

export default StandardLayout;
