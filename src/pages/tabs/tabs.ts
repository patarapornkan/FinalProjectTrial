import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
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
  tab2Root = AddReadingPage;
  tab3Root = SearchBookPage;
  tab4Root = StatsPage;
  tab5Root = SettingPage;

  constructor() {

  }
}
