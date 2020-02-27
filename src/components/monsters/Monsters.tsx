import React, { FunctionComponent } from 'react';
import { Grid, Card, makeStyles, CardHeader, CardContent } from '@material-ui/core';
import { monsters } from '../../data/Monsters';

const useStyles = makeStyles({
    card: {
        minWidth: 300,
        margin: 16
    }
});

export const Monsters: FunctionComponent<{}> = () => {
    const classes = useStyles();
    return (
        <div className="center-parent flex-column">
            <Grid container alignItems="center" justify="center">
                {monsters.map(monster => {
                    return (
                        <div className="ruleCard">
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title={monster.name}
                                        subheader={monster.alignment + ' ' + monster.size}
                                    />
                                    <CardContent>
                                        <p>{monster.alignment}</p>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </div>
                    );
                })}
            </Grid>
        </div>
    );
};
