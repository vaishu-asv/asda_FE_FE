import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SavedScheduleComponent } from './saved-schedule/saved-schedule.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    SavedScheduleComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ,	QuickUiModule,
]
})
export class CoreModule { }
