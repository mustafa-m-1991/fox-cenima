import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})

export class NavtabsComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;



  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Home',
            link: './',
            index: 0
        }, {
            label: 'Movies',
            link: './movies',
            index: 1
        }, {
            label: 'Find us',
            link: './findus',
            index: 2
        }, {

          label: 'Promotions',
          link: './promotions',
          index: 3

        }

    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}
