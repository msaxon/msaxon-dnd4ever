import React, { useState } from 'react';
import * as R from '../../utils/RandomUtils';
import { RandomList } from './RandomList';
import { Tile } from '../shared/Tile';
import '../shared/Shared.css';
import { Button, Grid } from '@material-ui/core';

interface kvp {
    key: string;
    value: string;
}

const panels: kvp[] = [
    {
        key: 'description',
        value: 'NPC Description'
    },
    {
        key: 'weather',
        value: 'Weather'
    },
    {
        key: 'book',
        value: 'Book'
    },
    {
        key: 'desert',
        value: 'Desert Encounter'
    }
];

export const Random: React.FC<{}> = () => {
    const [activePanel, setActivePanel] = useState<JSX.Element | undefined>(undefined);

    const stringToPanel = (str: string): JSX.Element => {
        switch (str) {
            case 'description':
                return <RandomList list={R.getNpcDescription()} />;
            case 'weather':
                return <RandomList list={R.getWeather()} />;
            case 'book':
                return <RandomList list={R.getBook()} />;
            case 'desert':
                return <RandomList list={R.getDesertEncounter()} />;
            default:
                return <p>Click a button to generate something random.</p>;
        }
    };

    return (
        <Grid container>
            <Grid item xs={12} sm={3}>
                <div className="buttonContainer">
                    {panels.map(p => {
                        return (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => setActivePanel(stringToPanel(p.key))}
                                key={p.key}
                            >
                                {p.value}
                            </Button>
                        );
                    })}
                </div>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Tile>{activePanel}</Tile>
            </Grid>
        </Grid>
    );
};
