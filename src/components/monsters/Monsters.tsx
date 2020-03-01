import React, { FunctionComponent, useState } from 'react';
import {
    Grid,
    Card,
    makeStyles,
    CardHeader,
    CardContent,
    TextField,
    Dialog,
    CardActions,
    Button
} from '@material-ui/core';
import { monsters } from '../../data/Monsters';
import { MonsterType } from '../../types/MonsterType';
import { MonsterCard } from './MonsterCard';
import InfiniteScroll from 'react-infinite-scroller';
import { CombatTrackerChar } from '../../types/CombatTrackerChar';
import { CombatTracker } from './CombatTracker';

const useStyles = makeStyles({
    card: {
        minWidth: 300,
        margin: 16
    },
    drawer: {
        width: '240px',
        flexShrink: 0
    },
    drawerPaper: {
        width: '240px'
    }
});

export const Monsters: FunctionComponent<{}> = () => {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState<MonsterType | undefined>(undefined);
    const [monsterCount, setMonsterCount] = useState(50);
    const [chars, setChars] = useState<CombatTrackerChar[]>([]);

    const classes = useStyles();

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const includesSearch = str => {
        return str.toUpperCase().includes(search.toUpperCase());
    };

    const getDisplayName = name => {
        const copies = chars.filter(char => char.name.includes(name));
        return name + ': ' + (copies.length + 1);
    };

    const updateInitiative = (char, index) => {
        const arr = [...chars];
        arr[index] = char;
        setChars(arr);
    };

    let monsterData = monsters;

    if (search !== '') {
        monsterData = monsters.filter(mon => includesSearch(mon.name));
        monsterData.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    //only show some of them
    const slicedMonsterData = monsterData.slice(0, monsterCount);
    console.log('nums', monsterData.length, monsterCount);

    return (
        <div className="center-parent flex-column">
            <Grid container alignItems="center" justify="center">
                <Grid item xs={6}>
                    <TextField label="filter" autoComplete="off" fullWidth={true} onChange={handleChange} />
                </Grid>
            </Grid>
            <CombatTracker chars={chars} callback={updateInitiative} />
            <InfiniteScroll
                pageStart={0}
                loadMore={() => setMonsterCount(monsterCount + 25)}
                hasMore={monsterData.length > monsterCount}
                loader={<p>Loading...</p>}
            >
                <Grid container alignItems="center" justify="center">
                    {slicedMonsterData.map(monster => {
                        return (
                            <div className="ruleCard" key={monster.name + monster.size}>
                                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                    <Card className={classes.card}>
                                        <CardHeader
                                            title={monster.name}
                                            subheader={monster.size + ' ' + monster.type}
                                            onClick={() => setOpen(monster)}
                                        />
                                        <CardContent onClick={() => setOpen(monster)}>
                                            <p>{monster.alignment}</p>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                size="small"
                                                color="primary"
                                                onClick={() =>
                                                    setChars(
                                                        chars.concat([
                                                            {
                                                                info: monster,
                                                                initiative: 1,
                                                                name: getDisplayName(monster.name)
                                                            }
                                                        ])
                                                    )
                                                }
                                            >
                                                Add to Combat
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </div>
                        );
                    })}
                </Grid>
            </InfiniteScroll>
            <Dialog onClose={() => setOpen(undefined)} open={open !== undefined} maxWidth={'lg'}>
                <MonsterCard monster={open} />
            </Dialog>
        </div>
    );
};
