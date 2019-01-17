import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TeamdojoSharedModule } from 'app/shared';
import {
    BadgeComponent,
    BadgeDetailComponent,
    BadgeUpdateComponent,
    BadgeDeletePopupComponent,
    BadgeDeleteDialogComponent,
    badgeRoute,
    badgePopupRoute
} from './';

const ENTITY_STATES = [...badgeRoute, ...badgePopupRoute];

@NgModule({
    imports: [TeamdojoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [BadgeComponent, BadgeDetailComponent, BadgeUpdateComponent, BadgeDeleteDialogComponent, BadgeDeletePopupComponent],
    entryComponents: [BadgeComponent, BadgeUpdateComponent, BadgeDeleteDialogComponent, BadgeDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeamdojoBadgeModule {}
