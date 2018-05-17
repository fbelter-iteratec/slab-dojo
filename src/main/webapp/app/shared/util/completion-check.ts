import { IBadge } from 'app/shared/model/badge.model';
import { ILevel } from 'app/shared/model/level.model';
import { ILevelSkill } from 'app/shared/model/level-skill.model';
import { IBadgeSkill } from 'app/shared/model/badge-skill.model';
import { ITeam } from 'app/shared/model/team.model';

export class CompletionCheck {
    constructor(private team: ITeam, private item: ILevel | IBadge) {}

    public isCompleted(): boolean {
        let score = 0;
        let totalScore = 0;
        for (const itemSkill of this.item.skills) {
            totalScore += itemSkill.score;
            if (this.isSkillCompleted(itemSkill)) {
                score += itemSkill.score;
            }
        }
        const requiredScore = totalScore * this.item.requiredScore;
        return score >= requiredScore;
    }

    private isSkillCompleted(itemSkill: ILevelSkill | IBadgeSkill): boolean {
        return this.team.skills.some(teamSkill => {
            if (teamSkill.skillId === itemSkill.skillId) {
                return !!teamSkill.completedAt;
            }
            return false;
        });
    }
}
