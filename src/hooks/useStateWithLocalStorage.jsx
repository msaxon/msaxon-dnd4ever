import { useEffect, useState } from 'react';

export const useStateWithLocalStorageString = (localStorageKey) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || '');
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [localStorageKey, value]);
    return [value, setValue];
};

export const useStateWithLocalStorageArray = (localStorageKey) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || []);
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [localStorageKey, value]);
    return [value, setValue];
};
