import React, { useState } from 'react';
import { Grid, Card, makeStyles, CardHeader, TextField, CardMedia, Dialog } from '@material-ui/core';
import * as RuleObj from '../../data/Rules';
import '../rules/Rules.css';

const useStyles = makeStyles({
    card: {
        minWidth: 300,
        margin: 16
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
    },
    media: {
        width: '100%',
        height: '100px'
    }
});

export const Rules = () => {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState('');
    const classes = useStyles();

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const includesSearch = str => {
        return str.toUpperCase().includes(search.toUpperCase());
    };

    let ruleData = RuleObj.RulesTwo;

    console.log('ruleObj', RuleObj.Rules);
    console.log('ruleData', ruleData);

    ruleData = ruleData.filter(rule => {
        let matches = false;
        rule.tags.forEach(tag => {
            if (search === '' || includesSearch(tag)) {
                matches = true;
            }
        });
        return matches;
    });

    ruleData.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        } else {
            return 0;
        }
    });

    return (
        <>
            <Grid container alignItems="center" justify="center">
                <Grid item xs={6}>
                    <TextField label="filter" autoComplete="off" fullWidth={true} onChange={handleChange} />
                </Grid>
            </Grid>

            <Grid container alignItems="center" justify="center">
                {ruleData.map(rule => {
                    return (
                        <div className="ruleCard">
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Card className={classes.card}>
                                    <CardHeader title={rule.title} subheader={rule.desc} />
                                    <CardMedia
                                        title="idk"
                                        className={classes.media}
                                        image={rule.img}
                                        onClick={() => setOpen(rule.img)}
                                    />
                                </Card>
                            </Grid>
                        </div>
                    );
                })}
            </Grid>
            <Dialog onClose={() => setOpen('')} open={open !== ''} maxWidth={'lg'}>
                <img src={open} height="100%" width={'100%'} alt="img" />
            </Dialog>
        </>
    );
};
