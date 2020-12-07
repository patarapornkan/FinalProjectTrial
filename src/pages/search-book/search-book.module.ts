import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBookPage } from './search-book';

@NgModule({
  declarations: [
    SearchBookPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchBookPage),
  ],
})
export class SearchBookPageModule {}
