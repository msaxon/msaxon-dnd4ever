import React, { FunctionComponent, useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Dialog, TextField, Button } from '@material-ui/core';
import { Info, Face, AddBox } from '@material-ui/icons';
import { CombatTrackerChar } from '../../types/CombatTrackerChar';
import { MonsterType } from '../../types/MonsterType';
import { MonsterCard } from './MonsterCard';

interface CombatTrackerProps {
    chars: CombatTrackerChar[];
    callback(c: CombatTrackerChar, i: number): void;
}

export const CombatTracker: FunctionComponent<CombatTrackerProps> = ({ chars, callback }) => {
    const [isOpen, setIsOpen] = useState<MonsterType | undefined>(undefined);
    const [isAddPcOpen, setIsAddPcOpen] = useState(false);

    if (chars.length === 0) {
        return <></>;
    }

    const handleInitChange = (e, index) => {
        console.log('e', e.target.value, index);
        if (isNaN(e.target.value)) {
            console.log('not a number...');
        } else {
            console.log('updating chars...');
            callback({ ...chars[index], initiative: parseInt(e.target.value) }, index);
        }
    };

    chars.sort((a, b) => b.initiative - a.initiative);
    console.log('chars', chars);

    return (
        <div className="center-parent flex-column">
            <List>
                {chars.map((char, index) => {
                    return (
                        <ListItem className="init-tracker-item center-parent" key={char.name}>
                            <ListItemIcon>
                                {char.info ? <Info onClick={() => setIsOpen(char.info)} /> : <Face />}
                            </ListItemIcon>
                            <ListItemText primary={char.name} />
                            <TextField
                                className="init-field"
                                variant="outlined"
                                size="small"
                                onChange={e => handleInitChange(e, index)}
                            ></TextField>
                        </ListItem>
                    );
                })}
                <ListItem>
                    <ListItemIcon>
                        <AddBox onClick={() => setIsAddPcOpen(true)} />
                    </ListItemIcon>
                    <ListItemText primary="Add PC" />
                </ListItem>
            </List>
            <Dialog onClose={() => setIsOpen(undefined)} open={isOpen !== undefined} maxWidth={'lg'}>
                <MonsterCard monster={isOpen} />
            </Dialog>
            <Dialog onClose={() => setIsAddPcOpen(false)} open={isAddPcOpen} maxWidth={'sm'}>
                <form
                    noValidate
                    autoComplete="off"
                    onSubmit={e => {
                        e.preventDefault();
                        callback({ name: e.target[0].value, initiative: 0 }, chars.length);
                        setIsAddPcOpen(false);
                    }}
                    className="add-npc-form"
                >
                    <TextField variant="outlined" size="small" label="Name" id="name" />
                    <Button variant="contained" type="submit">
                        Add
                    </Button>
                </form>
            </Dialog>
        </div>
    );
};
