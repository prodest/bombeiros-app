import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule, DropdownModule, AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { TimelineComponent, NotificationComponent } from './home.component';

@NgModule({
    imports: [CommonModule, CarouselModule, DropdownModule, AlertModule , AgmCoreModule
    .forRoot({apiKey: 'AIzaSyDqN57CtdR_VJiz8UsUslsAvC3OfORgR4s'})],
    declarations: [HomeComponent, TimelineComponent, NotificationComponent],
    exports: [HomeComponent, TimelineComponent, NotificationComponent]
})

export class HomeModule { }
