package de.otto.teamdojo.service.dto;

import io.github.jhipster.service.filter.*;

import java.io.Serializable;


/**
 * Criteria class for the TeamSkill entity. This class is used in TeamSkillResource to
 * receive all the possible filtering options from the Http GET request parameters.
 * For example the following could be a valid requests:
 * <code> /team-skills?id.greaterThan=5&amp;attr1.contains=something&amp;attr2.specified=false</code>
 * As Spring is unable to properly convert the types, unless specific {@link Filter} class are used, we need to use
 * fix type specific filters.
 */
public class TeamSkillCriteria implements Serializable {
    private static final long serialVersionUID = 1L;


    private LongFilter id;

    private InstantFilter achievedAt;

    private InstantFilter verifiedAt;

    private BooleanFilter irrelevant;

    private StringFilter note;

    private LongFilter skillId;

    private LongFilter teamId;

    public TeamSkillCriteria() {
    }

    public LongFilter getId() {
        return id;
    }

    public void setId(LongFilter id) {
        this.id = id;
    }

    public InstantFilter getAchievedAt() {
        return achievedAt;
    }

    public void setAchievedAt(InstantFilter achievedAt) {
        this.achievedAt = achievedAt;
    }

    public InstantFilter getVerifiedAt() {
        return verifiedAt;
    }

    public void setVerifiedAt(InstantFilter verifiedAt) {
        this.verifiedAt = verifiedAt;
    }

    public BooleanFilter getIrrelevant() {
        return irrelevant;
    }

    public void setIrrelevant(BooleanFilter irrelevant) {
        this.irrelevant = irrelevant;
    }

    public StringFilter getNote() {
        return note;
    }

    public void setNote(StringFilter note) {
        this.note = note;
    }

    public LongFilter getSkillId() {
        return skillId;
    }

    public void setSkillId(LongFilter skillId) {
        this.skillId = skillId;
    }

    public LongFilter getTeamId() {
        return teamId;
    }

    public void setTeamId(LongFilter teamId) {
        this.teamId = teamId;
    }

    @Override
    public String toString() {
        return "TeamSkillCriteria{" +
            (id != null ? "id=" + id + ", " : "") +
            (achievedAt != null ? "achievedAt=" + achievedAt + ", " : "") +
            (verifiedAt != null ? "verifiedAt=" + verifiedAt + ", " : "") +
            (irrelevant != null ? "irrelevant=" + irrelevant + ", " : "") +
            (note != null ? "note=" + note + ", " : "") +
            (skillId != null ? "skillId=" + skillId + ", " : "") +
            (teamId != null ? "teamId=" + teamId + ", " : "") +
            "}";
    }

}
