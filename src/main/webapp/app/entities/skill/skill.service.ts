import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ISkill } from 'app/shared/model/skill.model';
import { ISkillRate } from 'app/shared/model/skill-rate.model';

export type EntityResponseType = HttpResponse<ISkill>;
export type EntityArrayResponseType = HttpResponse<ISkill[]>;

@Injectable()
export class SkillService {
    private resourceUrl = SERVER_API_URL + 'api/skills';

    constructor(private http: HttpClient) {}

    create(skill: ISkill): Observable<EntityResponseType> {
        const copy = this.convert(skill);
        return this.http
            .post<ISkill>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(skill: ISkill): Observable<EntityResponseType> {
        const copy = this.convert(skill);
        return this.http
            .put<ISkill>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<ISkill>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<ISkill[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: EntityArrayResponseType) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    createVote(skillRate: ISkillRate): Observable<EntityResponseType> {
        return this.http
            .post<ISkill>(`${this.resourceUrl}/${skillRate.skillId}/vote`, skillRate, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: ISkill = this.convertItemFromServer(res.body);
        return res.clone({ body });
    }

    private convertArrayResponse(res: EntityArrayResponseType): EntityArrayResponseType {
        const jsonResponse: ISkill[] = res.body;
        const body: ISkill[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({ body });
    }

    /**
     * Convert a returned JSON object to Skill.
     */
    private convertItemFromServer(skill: ISkill): ISkill {
        const copy: ISkill = Object.assign({}, skill, {});
        return copy;
    }

    /**
     * Convert a Skill to a JSON which can be sent to the server.
     */
    private convert(skill: ISkill): ISkill {
        const copy: ISkill = Object.assign({}, skill, {});
        return copy;
    }
}
