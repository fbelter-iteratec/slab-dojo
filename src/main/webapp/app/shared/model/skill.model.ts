import { ITeamSkill } from './team-skill.model';
import { IBadgeSkill } from './badge-skill.model';
import { ILevelSkill } from './level-skill.model';

export interface ISkill {
    id?: number;
    title?: string;
    description?: string;
    implementation?: string;
    validation?: string;
    expiryPeriod?: string;
    score?: number;
    teams?: ITeamSkill[];
    badges?: IBadgeSkill[];
    levels?: ILevelSkill[];
}

export class Skill implements ISkill {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public implementation?: string,
        public validation?: string,
        public expiryPeriod?: string,
        public score?: number,
        public teams?: ITeamSkill[],
        public badges?: IBadgeSkill[],
        public levels?: ILevelSkill[]
    ) {}
}
