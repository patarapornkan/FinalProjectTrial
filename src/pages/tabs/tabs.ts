import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AddReadingPage } from '../add-reading/add-reading';
import { SearchBookPage } from '../search-book/search-book';
import { SettingPage } from '../setting/setting';
import { StatsPage } from '../stats/stats'


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchBookPage;
  tab3Root = AddReadingPage;
  tab4Root = StatsPage;
  tab5Root = SettingPage;

  constructor() {

  }
}
