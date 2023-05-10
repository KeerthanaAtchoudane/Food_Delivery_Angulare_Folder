import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FoodService } from '../../service/food.service';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {
  url: string = "/client/home";
  constructor(
    private gService :FoodService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
  }
  routerToLink(link: string): void {
    if (link === '/client/logout') {
      this.gService.clientLogout();
      return;
    }
    this.router.navigate([link]);
  }

}
