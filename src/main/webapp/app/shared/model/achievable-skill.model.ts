import { Moment } from 'moment';

export interface IAchievableSkill {
    teamSkillId?: number;
    skillId?: number;
    title?: string;
    description?: string;
    achievedAt?: Moment;
}

export class AchievableSkill implements IAchievableSkill {
    constructor(
        public teamSkillId?: number,
        public skillId?: number,
        public title?: string,
        public description?: string,
        public achievedAt?: Moment
    ) {}
}