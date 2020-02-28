import React from 'react';
import { Grid, Card, makeStyles, CardHeader, CardContent, Divider } from '@material-ui/core';
import { MonsterType } from '../../types/MonsterType';
import '../monsters/Monster.css';

interface MonsterCardProps {
    monster?: MonsterType;
}

const useStyles = makeStyles({
    card: {
        minWidth: 300,
        margin: 16
    }
});

export const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
    const classes = useStyles();

    const parseTwoParter = (str: string): string[] => {
        const arr = str.split('.');
        return [
            arr[0],
            str
                .split('.')
                .slice(1)
                .join('.')
        ];
    };

    if (monster) {
        let actions = [<></>];
        if (monster.Actions) {
            actions = [<Divider />, <h3>Actions</h3>];
            actions = actions.concat(
                monster.Actions.map(action => {
                    return (
                        <p key={action}>
                            <strong>{parseTwoParter(action)[0]}: </strong>
                            {parseTwoParter(action)[1]}
                        </p>
                    );
                })
            );
        }

        let legendaryActions = [<></>];
        if (monster.LegendaryActions) {
            legendaryActions = [<Divider />, <h3>Legendary Actions</h3>];
            legendaryActions = legendaryActions.concat(
                monster.LegendaryActions.map(action => {
                    return (
                        <p key={action}>
                            <strong>{parseTwoParter(action)[0]}: </strong>
                            {parseTwoParter(action)[1]}
                        </p>
                    );
                })
            );
        }

        return (
            <Grid container className="monster-modal">
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardHeader
                            title={monster.name}
                            subheader={monster.size + ' ' + monster.type + ', ' + monster.alignment}
                        />
                        <CardContent>
                            <p>
                                <strong>Challenge Rating: </strong>
                                {monster.cr}
                            </p>
                            <p>
                                <strong>Armor Class: </strong>
                                {monster.ac}
                            </p>
                            <p>
                                <strong>Hit Points: </strong>
                                {monster.hp}
                            </p>
                            <p>
                                <strong>Speed: </strong>
                                {monster.speed}
                            </p>
                            <Divider />
                            <div className="center-parent flex-row monster-statblock">
                                <div className="center-parent flex-column">
                                    <p>
                                        <strong>STR</strong>
                                    </p>
                                    <p>{monster.str}</p>
                                </div>
                                <Divider orientation="vertical" />
                                <div className="center-parent flex-column">
                                    <p>
                                        <strong>DEX</strong>
                                    </p>
                                    <p>{monster.dex}</p>
                                </div>
                                <Divider orientation="vertical" />
                                <div className="center-parent flex-column">
                                    <p>
                                        <strong>CON</strong>
                                    </p>
                                    <p>{monster.con}</p>
                                </div>
                                <Divider orientation="vertical" />
                                <div className="center-parent flex-column">
                                    <p>
                                        <strong>INT</strong>
                                    </p>
                                    <p>{monster.int}</p>
                                </div>
                                <Divider orientation="vertical" />
                                <div className="center-parent flex-column">
                                    <p>
                                        <strong>WIS</strong>
                                    </p>
                                    <p>{monster.wis}</p>
                                </div>
                                <Divider orientation="vertical" />
                                <div className="center-parent flex-column">
                                    <p>
                                        <strong>CHA</strong>
                                    </p>
                                    <p>{monster.cha}</p>
                                </div>
                            </div>
                            <Divider />
                            <p>
                                <strong>Passive Perception: </strong>
                                {monster.PassivePerception}
                            </p>
                            <p>
                                <strong>Skills: </strong>
                                {monster.Skills}
                            </p>
                            <p>
                                <strong>Languages: </strong>
                                {monster.Languages}
                            </p>
                            <Divider />
                            <h3>Abilities</h3>
                            {monster.abilities.map(ability => {
                                return (
                                    <p>
                                        <strong>{parseTwoParter(ability)[0]}: </strong>
                                        {parseTwoParter(ability)[1]}
                                    </p>
                                );
                            })}
                            {actions}
                            {legendaryActions}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    } else {
        return <></>;
    }
};
