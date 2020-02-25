import React from 'react';

export const Tile: React.FC<{}> = props => {
    return <div className="tileContainer">{props.children}</div>;
};
