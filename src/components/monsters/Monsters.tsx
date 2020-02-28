import React, { FunctionComponent, useState } from 'react';
import { Grid, Card, makeStyles, CardHeader, CardContent, TextField, Dialog } from '@material-ui/core';
import { monsters } from '../../data/Monsters';
import { MonsterType } from '../../types/MonsterType';
import { MonsterCard } from './MonsterCard';

const useStyles = makeStyles({
    card: {
        minWidth: 300,
        margin: 16
    }
});

export const Monsters: FunctionComponent<{}> = () => {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState<MonsterType | undefined>(undefined);
    const classes = useStyles();

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const includesSearch = str => {
        return str.toUpperCase().includes(search.toUpperCase());
    };

    let monsterData = monsters;

    if (search !== '') {
        monsterData = monsters.filter(mon => includesSearch(mon.name));
    }

    return (
        <div className="center-parent flex-column">
            <Grid container alignItems="center" justify="center">
                <Grid item xs={6}>
                    <TextField label="filter" autoComplete="off" fullWidth={true} onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container alignItems="center" justify="center">
                {monsterData.map(monster => {
                    return (
                        <div className="ruleCard" key={monster.name + monster.size}>
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Card
                                    className={classes.card}
                                    onClick={() => {
                                        console.log('clicking open');
                                        setOpen(monster);
                                    }}
                                >
                                    <CardHeader title={monster.name} subheader={monster.size + ' ' + monster.type} />
                                    <CardContent>
                                        <p>{monster.alignment}</p>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </div>
                    );
                })}
            </Grid>
            <Dialog onClose={() => setOpen(undefined)} open={open !== undefined} maxWidth={'lg'}>
                <MonsterCard monster={open} />
            </Dialog>
        </div>
    );
};
