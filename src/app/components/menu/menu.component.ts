import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Set up & Initialize Menu Config
    const main_nav = $('#main-nav');
    const toggle = $('.toggle');
    const defaultOptions = {
        disableAt: false,
        customToggle: toggle,
        levelSpacing: 40,
        navTitle: 'Angular Academy',
        levelTitles: true,
        levelTitleAsBack: true,
        pushContent: '#container',
        insertClose: 2
    };
    main_nav.hcOffcanvasNav(defaultOptions);
  }

}
