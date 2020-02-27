import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardHeader, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import '../home/Home.css';

const useStyles = makeStyles({
    card: {
        minWidth: 300,
        margin: 16
    },
    media: {
        width: '100%',
        height: '100px'
    }
});

export const Home: FunctionComponent<{}> = () => {
    const classes = useStyles();
    return (
        <div className="center-parent flex-column">
            <h2>Home</h2>
            <p>
                Welcome to D&D 4Ever, a dungeon master's tool for quickly finding rules and generating random content.
                Take a look at some of these features offered below.
            </p>
            <div className="center-parent flex-row ruleCardContainer">
                <div className="ruleCard-home">
                    <Link to="/rules" className="anchor-card">
                        <Card className={classes.card}>
                            <CardHeader title="Rules" subheader="Forget a table?" />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    Search for all those helpful tables like armors, weapons, or conditions.
                                </Typography>
                            </CardContent>
                            <CardMedia
                                title="Rules"
                                className={classes.media}
                                image="https://media.miniaturemarket.com/media/wysiwyg/dnd-5th-edition-photo-3.png"
                            />
                        </Card>
                    </Link>
                </div>
                <div className="ruleCard-home">
                    <Link to="/random" className="anchor-card">
                        <Card className={classes.card}>
                            <CardHeader title="Random" subheader="Content on the fly" />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    Random genertaors that help you make npcs, taverns, and events on the fly.
                                </Typography>
                            </CardContent>
                            <CardMedia
                                title="Random"
                                className={classes.media}
                                image="https://www.dnddice.com/media/catalog/product/cache/1/image/650x/613132e0f270af58849e99a6dbb00be2/f/u/full_metal_packet3.jpg"
                            />
                        </Card>
                    </Link>
                </div>
                <div className="ruleCard-home">
                    <Link to="/monsters" className="anchor-card">
                        <Card className={classes.card}>
                            <CardHeader title="Monsters" subheader="All the monsters" />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    All the monsters and all their stats with initiative tracker (soon).
                                </Typography>
                            </CardContent>
                            <CardMedia
                                title="Monsters"
                                className={classes.media}
                                image="https://brandewinder.com//assets/2018-07-23-goblin.png"
                            />
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
};
