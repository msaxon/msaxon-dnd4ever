import React, { useState } from 'react';
import {
    Grid,
    TextField,
    Table,
    TableContainer,
    Paper,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Dialog,
    Divider,
} from '@material-ui/core';
import { useStateWithLocalStorageArray } from '../../hooks/useStateWithLocalStorage';
import { spells } from '../../data/Spells';
import { SpellCard } from './SpellCard';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import '../spells/Spells.css';

export const Spells = () => {
    const [search, setSearch] = useState('');
    const [sortId, setSortId] = useState('name');
    const [sortDirAsc, setSortDirAsc] = useState(true);
    const [isOpen, setIsOpen] = useState(undefined);
    const [pinnedSpells, setPinnedSpell] = useStateWithLocalStorageArray('pinnedSpells');

    const updateSort = (id) => {
        if (id === sortId) {
            setSortDirAsc(!sortDirAsc);
        } else {
            setSortDirAsc(true);
            setSortId(id);
        }
    };

    const includesSearch = (str) => {
        return str.toUpperCase().includes(search.toUpperCase());
    };

    const filteredSpells = spells.filter((spell) => includesSearch(spell.name));
    filteredSpells.sort((a, b) => {
        if (a[sortId] > b[sortId]) {
            return sortDirAsc ? 1 : -1;
        } else if (a[sortId] < b[sortId]) {
            return sortDirAsc ? -1 : 1;
        } else return 0;
    });

    pinnedSpells.sort((a, b) => {
        if (a[sortId] > b[sortId]) {
            return sortDirAsc ? 1 : -1;
        } else if (a[sortId] < b[sortId]) {
            return sortDirAsc ? -1 : 1;
        } else return 0;
    });

    return (
        <div className="center-parent flex-column">
            <Grid container alignItems="center" justify="center">
                <Grid item xs={6}>
                    <TextField
                        label="filter"
                        autoComplete="off"
                        fullWidth={true}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Grid>
            </Grid>

            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Pinned</TableCell>
                            <TableCell onClick={() => updateSort('name')}>
                                <strong>Name</strong>
                            </TableCell>
                            <TableCell align="right" onClick={() => updateSort('level')}>
                                <strong>Level</strong>
                            </TableCell>
                            <TableCell align="right" onClick={() => updateSort('school')}>
                                <strong>School</strong>
                            </TableCell>
                            <TableCell align="right" onClick={() => updateSort('castingTime')}>
                                <strong>Casting Time</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pinnedSpells.map((spell) => {
                            const button = (
                                <RemoveCircleOutline
                                    onClick={() => setPinnedSpell(pinnedSpells.filter((s) => s.name !== spell.name))}
                                />
                            );
                            return (
                                <TableRow key={spell.name}>
                                    <TableCell>{button}</TableCell>
                                    <TableCell component="th" scope="row">
                                        <Button size="small" color="primary" onClick={() => setIsOpen(spell)}>
                                            {spell.name}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">{spell.level}</TableCell>
                                    <TableCell align="right">{spell.school}</TableCell>
                                    <TableCell align="right">{spell.castingTime}</TableCell>
                                </TableRow>
                            );
                        })}
                        <TableRow key="divider">
                            <TableCell>
                                <Divider />
                            </TableCell>
                            <TableCell>
                                <Divider />
                            </TableCell>
                            <TableCell>
                                <Divider />
                            </TableCell>
                            <TableCell>
                                <Divider />
                            </TableCell>
                            <TableCell>
                                <Divider />
                            </TableCell>
                        </TableRow>
                        {filteredSpells.map((spell) => {
                            if (pinnedSpells.includes(spell)) {
                                return <></>;
                            }
                            const button = (
                                <AddCircleOutline onClick={() => setPinnedSpell(pinnedSpells.concat([spell]))} />
                            );
                            return (
                                <TableRow key={spell.name}>
                                    <TableCell>{button}</TableCell>
                                    <TableCell component="th" scope="row">
                                        <Button size="small" color="primary" onClick={() => setIsOpen(spell)}>
                                            {spell.name}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">{spell.level}</TableCell>
                                    <TableCell align="right">{spell.school}</TableCell>
                                    <TableCell align="right">{spell.castingTime}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog onClose={() => setIsOpen(undefined)} open={isOpen !== undefined} maxWidth="lg">
                <SpellCard spell={isOpen} />
            </Dialog>
        </div>
    );
};
