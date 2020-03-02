import React, { FunctionComponent } from 'react';
import { SpellType } from '../../types/SpellType';
import { Grid, Card, CardHeader, CardContent, Divider } from '@material-ui/core';

interface SpellCardProps {
    spell?: SpellType;
}

export const SpellCard: FunctionComponent<SpellCardProps> = ({ spell }) => {
    if (!spell) {
        return <></>;
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title={spell.name} subheader={spell.school + ': Level ' + spell.level} />
                    <CardContent>
                        <p>
                            <strong>Casting Time: </strong>
                            {spell.castingTime}
                        </p>
                        <p>
                            <strong>Duration: </strong>
                            {spell.duration}
                        </p>
                        <p>
                            <strong>Range: </strong>
                            {spell.range}
                        </p>
                        <p>
                            <strong>Components: </strong>
                            {spell.components}
                        </p>
                        <Divider />
                        <p>{spell.effect}</p>

                        {spell.higherLevels ? (
                            [
                                <Divider />,
                                <p>
                                    <strong>At Higher Levels: </strong>
                                    {spell.higherLevels}
                                </p>
                            ]
                        ) : (
                            <></>
                        )}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
