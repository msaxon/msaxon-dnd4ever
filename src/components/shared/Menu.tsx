import React, { FunctionComponent, useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Gavel, HomeRounded, MenuSharp, Help, Info } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    }
});

export const Menu: FunctionComponent<{}> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();

    return (
        <div className="menu">
            <MenuSharp onClick={() => setIsOpen(!isOpen)} fontSize="large" />
            <Drawer open={isOpen} anchor="left" onClose={() => setIsOpen(false)} variant="temporary">
                <div className={classes.list} role="presentation" onClick={() => setIsOpen(false)}>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeRounded />
                            </ListItemIcon>
                            <ListItemText>
                                <Link to="/">Home</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Gavel />
                            </ListItemIcon>
                            <ListItemText>
                                <Link to="/rules">Rules</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Help />
                            </ListItemIcon>
                            <ListItemText>
                                <Link to="/random">Random</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Info />
                            </ListItemIcon>
                            <ListItemText>
                                <Link to="/about">About</Link>
                            </ListItemText>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
};
