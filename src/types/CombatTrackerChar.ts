import { MonsterType } from './MonsterType';

export interface CombatTrackerChar {
    name: string;
    initiative: number;
    info?: MonsterType;
}
