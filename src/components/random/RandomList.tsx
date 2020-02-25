import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../random/Random.css';
import { Card, CardContent } from '@material-ui/core';

interface RandomListProps {
    list: string[];
}

const useStyles = makeStyles({
    card: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

export const RandomList: React.FC<RandomListProps> = ({ list }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <ul>
                    {list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};
