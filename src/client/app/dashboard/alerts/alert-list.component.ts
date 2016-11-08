import { Component } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
	moduleId: module.id,
    selector: 'alert-list',
    templateUrl: './alert-list.component.html',
    providers: [AlertService]
})

export class AlertListComponent {
    private _alertService: AlertService;
    constructor(alertService: AlertService) {
        this._alertService = alertService;
    }
}
