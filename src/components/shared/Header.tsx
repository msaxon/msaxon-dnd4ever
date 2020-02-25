import React, { FunctionComponent } from 'react';
import { Menu } from './Menu';

export const Header: FunctionComponent<{}> = () => {
    return (
        <header className="App-header">
            <nav>
                <Menu />
            </nav>
            <div>
                <h1>D&D 4Ever</h1>
            </div>
            <span />
        </header>
    );
};
