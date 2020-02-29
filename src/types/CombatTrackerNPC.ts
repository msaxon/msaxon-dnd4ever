import { MonsterType } from '../types/MonsterType';

export interface CombatTrackerNpc {
    name: string;
    info: MonsterType;
    initiative: number;
}
