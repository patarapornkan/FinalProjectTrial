import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddReadingPage } from './add-reading';

@NgModule({
  declarations: [
    AddReadingPage,
  ],
  imports: [
    IonicPageModule.forChild(AddReadingPage),
  ],
})
export class AddReadingPageModule {}
