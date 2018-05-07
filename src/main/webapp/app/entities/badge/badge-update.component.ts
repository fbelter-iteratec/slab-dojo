import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { IBadge } from 'app/shared/model/badge.model';
import { BadgeService } from './badge.service';
import { IDimension } from 'app/shared/model/dimension.model';
import { DimensionService } from 'app/entities/dimension';

@Component({
    selector: 'jhi-badge-update',
    templateUrl: './badge-update.component.html'
})
export class BadgeUpdateComponent implements OnInit {
    private _badge: IBadge;
    isSaving: boolean;

    dimensions: IDimension[];
    availableUntil: string;

    constructor(
        private dataUtils: JhiDataUtils,
        private jhiAlertService: JhiAlertService,
        private badgeService: BadgeService,
        private dimensionService: DimensionService,
        private elementRef: ElementRef,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.route.data.subscribe(({ badge }) => {
            this.badge = badge.body ? badge.body : badge;
        });
        this.dimensionService.query().subscribe(
            (res: HttpResponse<IDimension[]>) => {
                this.dimensions = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entity, field, isImage) {
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    clearInputImage(field: string, fieldContentType: string, idInput: string) {
        this.dataUtils.clearInputImage(this.badge, this.elementRef, field, fieldContentType, idInput);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.badge.availableUntil = moment(this.availableUntil, DATE_TIME_FORMAT);
        if (this.badge.id !== undefined) {
            this.subscribeToSaveResponse(this.badgeService.update(this.badge));
        } else {
            this.subscribeToSaveResponse(this.badgeService.create(this.badge));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IBadge>>) {
        result.subscribe((res: HttpResponse<IBadge>) => this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: IBadge) {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackDimensionById(index: number, item: IDimension) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
    get badge() {
        return this._badge;
    }

    set badge(badge: IBadge) {
        this._badge = badge;
        this.availableUntil = moment(badge.availableUntil).format();
    }
}
