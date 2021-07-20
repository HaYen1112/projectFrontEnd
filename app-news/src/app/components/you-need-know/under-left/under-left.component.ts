import { Component, Input, OnInit } from '@angular/core';
import { BodyCenterComponent } from '../../body/page-body/body-center/body-center.component';

@Component({
  selector: 'app-under-left',
  templateUrl: './under-left.component.html',
  styleUrls: ['./under-left.component.scss']
})
export class UnderLeftComponent implements OnInit {
  urlSlide = " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Ftuyen-sinh%2F2021.rss".trim();

  @Input() DataSlide : any[];

  constructor(private cate : BodyCenterComponent) {
    this.DataSlide = [];
    this.cate.getDatas(this.urlSlide, this.DataSlide);
   }

  ngOnInit(): void {
  }

}
