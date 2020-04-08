import React from 'react';
import { Button } from '@material-ui/core';

export const Footer = () => {
    return (
        <footer className="App-footer">
            <div>
                <Button variant="contained" color="primary" onClick={() => localStorage.clear()}>
                    Clear Local Storage
                </Button>
            </div>
        </footer>
    );
};
