import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-menu-bottom',
  templateUrl: './menu-bottom.component.html',
  styleUrls: ['./menu-bottom.component.scss']
})
export class MenuBottomComponent implements OnInit {
  @Input() dataCMMB: any[];
  getDisplay(title:String){
    if ((title == 'EURO 2020') || (title == 'SĂN TOUR') || (title == 'CẨM NANG TUYỂN SINH 2021') || (title == 'VƯỢT QUA COVID-19')) return 'block';
    return 'none';
  }
  constructor(private menubottom: MenuComponent, private router: Router) {
       this.dataCMMB = this.menubottom.dataCM;
   }
   navigationExtras?: NavigationExtras;
view2(index1: number, index2: number): void {
  const index: any[] = [index1, index2];
  this.navigationExtras = {state: index};
  this.router.navigateByUrl('/last-new-readings', this.navigationExtras);
}
view1(index1: number): void {
  const index: any[] = [index1];
  this.navigationExtras = {state: index};
  this.router.navigateByUrl('/last-new-readings', this.navigationExtras);
}
  ngOnInit(): void {
  }

}


