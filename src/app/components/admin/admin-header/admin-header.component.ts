import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FoodService } from '../../service/food.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit{
  url: string = '';
  constructor(
    private gService :FoodService,
    private router:Router,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
  }

  
  routerToLink(link: string): void {
    if (link === '/admin/logout') {
      this.gService.clientLogout();
      return;
    }
    this.router.navigate([link]);
  }

}
