import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private menubottom: MenuComponent) {
       this.dataCMMB = this.menubottom.dataCM;
   }

  ngOnInit(): void {
  }

}


