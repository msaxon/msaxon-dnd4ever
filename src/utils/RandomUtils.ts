import { rareRace, commonRace } from '../data/Race';
import { desires } from '../data/Desires';
import { fears } from '../data/Fears';
import * as Desc from '../data/NPCAppearence';
import * as Weather from '../data/Weather';
import * as Book from '../data/Books';
import * as DesertEncounter from '../data/Desert';
import { knowledge } from '../data/Knowledge';
import { curses } from '../data/Curses';
import { drinks } from '../data/Drinks';
import { wildMagic } from '../data/WildMagic';

export const randomItemFromCollection = (collection: string[]): string => {
    return collection[Math.floor(Math.random() * collection.length)];
};

export const multipleRandomItemsFromCollection = (collection: string[], num: number): string[] => {
    const newArray: string[] = [];
    do {
        const str: string = randomItemFromCollection(collection);
        if (newArray.indexOf(str) < 0) {
            newArray.push(str);
        }
    } while (newArray.length < num);
    return newArray;
};

export const randomizeEachItemFromCollection = (collection: string[]): string[] => {
    return collection.filter(str => rollDice(1, 2) === 1);
};

export const rollDice = (numOfDice: number, sizeOfDice: number, add: number = 0, multiplier: number = 1): number => {
    let aggregator = 0;
    for (let i = 0; i < numOfDice; i++) {
        aggregator += Math.floor(Math.random() * sizeOfDice) + 1;
    }
    if (multiplier) {
        aggregator *= multiplier;
    }

    if (add) {
        aggregator += add;
    }
    return aggregator;
};

export const getGender = (): string => {
    const num = rollDice(1, 21);
    if (num < 11) return 'Male';
    else if (num < 21) return 'Female';
    else return 'Mystery';
};

export const getRace = (): string => {
    const typeNum = rollDice(1, 20);
    if (typeNum > 19) {
        return randomItemFromCollection(rareRace);
    } else {
        return randomItemFromCollection(commonRace);
    }
};

export const getDesire = (): string => randomItemFromCollection(desires);
export const getFear = (): string => randomItemFromCollection(fears);

export const getNpcDescription = (): string[] => {
    const faceArr = [
        'Eyes: ' + randomItemFromCollection(Desc.eyes),
        'Ears : ' + randomItemFromCollection(Desc.ears),
        'Mouth : ' + randomItemFromCollection(Desc.mouth),
        'Chin/Jaw : ' + randomItemFromCollection(Desc.chinOrJaw),
        'Hair : ' + randomItemFromCollection(Desc.hair),
        'Face : ' + randomItemFromCollection(Desc.faceOther)
    ];

    const keepAllArr = [
        'Height : ' + randomItemFromCollection(Desc.height),
        'Body : ' + randomItemFromCollection(Desc.body),
        'Clothes: ' + randomItemFromCollection(Desc.clothes),
        'Calm Emotion: ' + randomItemFromCollection(Desc.calmTrait),
        'Stressed Emotion: ' + randomItemFromCollection(Desc.stressedTrait),
        "Today's mood: " + randomItemFromCollection(Desc.currentMood),
        'Prejudice: ' + randomItemFromCollection(Desc.prejudice),
        'Flaw: ' + randomItemFromCollection(Desc.flaws),
        'Fear: ' + randomItemFromCollection(fears),
        'Desire: ' + randomItemFromCollection(desires),
        'Information: ' + randomItemFromCollection(knowledge)
    ];

    const trueOrFalseArr = [
        'Jewelry : ' +
            randomItemFromCollection(Desc.jewelry) +
            ' made of ' +
            randomItemFromCollection(Desc.jewelryMaterial),
        'Faith: ' + randomItemFromCollection(Desc.faith),
        'Hands : ' + randomItemFromCollection(Desc.hands)
    ];

    return multipleRandomItemsFromCollection(faceArr, 3)
        .concat(keepAllArr)
        .concat(randomizeEachItemFromCollection(trueOrFalseArr));
};

export const getWeather = (): string[] => {
    const arr = [
        'Temp: ' + randomItemFromCollection(Weather.temperature),
        'Wind: ' + randomItemFromCollection(Weather.wind),
        'Precip: ' + randomItemFromCollection(Weather.precipitation)
    ];

    if (rollDice(1, 20) === 1) {
        arr.push('Abnormal Weather: ' + randomItemFromCollection(Weather.wildWeather));
    }

    return arr;
};

export const getBook = (): string[] => {
    return [
        'The books subject is ' + randomItemFromCollection(Book.subject),
        'The books condition is ' + randomItemFromCollection(Book.condition),
        'The books cover is ' + randomItemFromCollection(Book.cover),
        'The book is ' + randomItemFromCollection(Book.state)
    ];
};

export const getDesertEncounter = (): string[] => {
    return [randomItemFromCollection(DesertEncounter.desertRandom)];
};

export const getCurse = (): string[] => {
    return [randomItemFromCollection(curses)];
};

export const getDrink = (): string[] => {
    return [randomItemFromCollection(drinks)];
};

export const getWildMagic = (): string[] => {
    return [randomItemFromCollection(wildMagic)];
};
