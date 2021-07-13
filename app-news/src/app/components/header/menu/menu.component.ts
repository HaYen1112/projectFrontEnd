
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']

})
export class MenuComponent implements OnInit {

 @Input() dataTM: any[];
 private urlNew = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fhome.rss';
 @Input() dataCM: any[] = [
   {header: 'VIDEO', data: ['THỜI SỰ', 'PHÓNG SỰ', 'GIẢI TRÍ', 'MÓN NGON', 'THỂ THAO', 'THẾ GIỚI', 'TRỰC TUYẾN']},
   {header: 'THỜI SỰ', data: ['CHÍNH TRỊ', 'PHÁP LUẬT', 'DÂN SINH', 'LAO ĐỘNG - VIỆC LÀM', 'QUYỀN ĐƯỢC BIẾT', 'PHÓNG SỰ / ĐIỀU TRA', 'QUỐC PHÒNG', 'VƯỢT QUA COVID-19']},
   {header: 'TÔI VIẾT', data: ['CHÀO BUỔI SÁNG', 'BLOG PHÓNG VIÊN']},
   {header: 'THẾ GIỚI', data: ['KINH TẾ THẾ GIỚI', 'QUÂN SỰ', 'GÓC NHÌN', 'HỒ SƠ', 'NGƯỜI VIỆT NĂM CHÂU', 'CHUYỆN LẠ']},
   {header: 'VĂN HÓA', data: ['CÂU CHUYỆN VĂN HÓA', 'KHẢO CỨU', 'XEM - NGHE', 'HÀ NỘI THÀNH PHỐ TÔI YÊU', 'SỐNG ĐẸP', 'MÓN NGON HÀ NỘI']},
   {header: 'GIẢI TRÍ', data: ['PHIM', 'TRUYỀN HÌNH', 'ĐỜI NGHỆ SĨ']},
   {header: 'THỂ THAO', data: ['EURO 2020', 'BÓNG ĐÁ VIỆT NAM', 'SÔI ĐỘNG CÙNG V-LEAGUE', 'BÓNG ĐÁ QUỐC TẾ', 'TIN CHUYỂN NHƯỢNG', 'BÓNG RỔ', 'THỂ THAO & CỘNG ĐỒNG', 'THỂ THAO KHÁC']},
   {header: 'ĐỜI SỐNG', data: ['NGƯỜI SỐNG QUANH TA', 'GIA ĐÌNH', 'ẨM THỰC', 'CỘNG ĐỒNG', 'GƯƠNG SÁNG BIÊN CƯƠNG']},
   {header: 'TÀI CHÍNH - KINH DOANH', data: ['KINH TẾ XANH', 'CHÍNH SÁCH & PHÁT TRIỂN', 'NGÂN HÀNG', 'CHỨNG KHOÁN', 'DOANH NGHIỆP', 'DOANH NHÂN', 'TIÊU DÙNG', 'LÀM GIÀU', 'ĐỊA ỐC']},
   {header: 'GIỚI TRẺ', data: ['SỐNG -YÊU - ĂN - CHƠI', 'THẾ GIỚI MẠNG', 'KẾT NỐI', 'ĐOÀN - HỘI']},
   {header: 'GIÁO DỤC', data: ['TUYỂN SINH 2021', 'HỘP TƯ VẤN 24/7', 'DU HỌC', 'CHỌN NGHỀ', 'CHỌN TRƯỜNG', 'NGƯỜI THẦY', 'TRA CỨU ĐIỂM THI 2021', 'CẨM NANG TUYỂN SINH 2021']},
   {header: 'CÔNG NGHỆ', data: ['XU HƯỚNG', 'SẢN PHẨM MỚI', 'KINH NGHIỆM', 'Ý TƯỞNG', 'CHUYỂN ĐỔI SỐ']},
   {header: 'GAME', data: ['ESPORTS', 'THỦ THUẬT', 'PHÒNG MÁY', 'CÔNG NGHỆ GAME', 'CỘNG ĐỒNG', 'VIDEO']},
   {header: 'SỨC KHỎE', data: ['LÀM ĐẸP', 'KHỎE ĐẸP MỖI NGÀY', 'GIỚI TÍNH', 'SỐNG VUI KHỎE']},
   {header: 'DU LỊCH', data: ['KHÁM PHÁ', 'A - Z', 'SĂN TOUR']},
   {header: 'XE', data: ['THỊ TRƯỜNG XE', 'TƯ VẤN XE', 'DIỄN ĐÀN XE', 'ĐÁNH GIÁ XE', 'KHÁM PHÁ XE', 'VIDEO']}
 ];


 constructor(private menu : AppComponent, private router: Router) {
    this.dataTM = [];
    this.setDataTM(this.urlNew);
    console.log(this.dataCM);
    this.colorTextDN = '';
    this.colorBackgroundDN = '';
     if (this.router.url == '/bancanbiet'){
      this.titleBCB = 'TIN TỨC NHANH';
      this.titleHome = 'BẠN CẦN BIẾT';
      this.paddingHome = 10;
      this.paddingBCB = 15;
      this.displayHome = 'none';
      this.displayBCB = 'none'
      this.fontw = 'bold';
      this.routerBCB = '/';
      this.routerHome = 'bancanbiet';

}
    if (this.router.url == '/'){
      this.titleHome = 'TIN TỨC NHANH';
      this.titleBCB = 'BẠN CẦN BIẾT';
      this.paddingHome = 0;
      this.paddingBCB = 10;
      this.displayHome = '';
      this.displayBCB = ''
      this.fontw = '';
      this.routerBCB = 'bancanbiet';
      this.routerHome = '/';
}
if (this.router.url == '/dangnhap') {
  this.titleHome = 'TIN TỨC NHANH';
  this.titleBCB = 'BẠN CẦN BIẾT';
  this.paddingBCB = 10;
  this.colorTextDN = 'black';
  this.colorBackgroundDN = 'white';
}
}
getDisplay(title: string){
      if ((title == 'EURO 2020') || (title == 'SĂN TOUR') || (title == 'CẨM NANG TUYỂN SINH 2021')) return 'block';
      return 'none';
}
setDataTM(urls: string){
  this.menu.getData(urls)
  .subscribe((value: any) => {
    for (let item of value['items']) {
            this.dataTM.push({title: item['title'], time: item['pubDate'].substr(11,5)});
          }
  });
}

 displayBCB = '';
 displayHome = '';
 paddingHome = 0;
 paddingBCB = 0;
 titleHome = '';
 titleBCB = '';
 fontw ='';
 routerHome: string = '/';
 routerBCB: string = 'bancanbiet';

   colorTextDanhMuc = '';
   colorBackgroundDanhMuc = '';
   colorTextTienIch = '';
   colorBackgroundTienIch = '';
   colorTextTimKiem = '';
   colorBackgroundTimKiem = '';
   colorTextDCB = '';
   colorBackgroundDCB = '';
   colorTextVL = '';
   colorBackgroundVL = '';
   colorTextDN = '';
   colorBackgroundDN = '';
   colorTextLH = '';
   colorBackgroundLH = '';
   indDM = 0;
   indTI = 0;
   indTK = 0;
   indDCB = 0;
   indVL = 0;
   indLH = 0;
   indDN = 0;
@Input() style = new NewStyle();
setColor(index :any){
   this.colorTextDanhMuc = '';
   this.colorBackgroundDanhMuc = '';
   this.colorTextTienIch = '';
   this.colorBackgroundTienIch = '';
   this.colorTextTimKiem = '';
   this.colorBackgroundTimKiem = '';
   this.colorTextDCB = '';
   this.colorBackgroundDCB = '';
   this.colorTextVL = '';
   this.colorBackgroundVL = '';
   this.colorTextLH = '';
   this.colorBackgroundLH = '';
   this.style = new NewStyle();
    if (index == 'chuyenmuc') {
        this.colorBackgroundDanhMuc = 'white';
        this.colorTextDanhMuc = 'black';
        this.style = new Style();
        this.indDM++;
        if (this.indDM > 1) {
          this.colorBackgroundDanhMuc = '';
          this.colorTextDanhMuc = '';
          this.style = new NewStyle();
           this.indDM = 0;
        }
        this.indTK = 0;  this.indTI = 0;  this.indDCB = 0;
        this.indVL = 0;  this.indLH = 0;
    }
    if (index == 'tienich') {
      this.colorTextTienIch = 'black';
      this.colorBackgroundTienIch = 'white';
      this.indTI++;
      this.indTK = 0;  this.indDM = 0;  this.indDCB = 0;
      this.indVL = 0;  this.indLH = 0;
      if (this.indTI > 1) {
        this.colorTextTienIch = '';
        this.colorBackgroundTienIch = '';
        this.indTI = 0;
      }
  }
  if (index == 'timkiem') {
    this.colorTextTimKiem = 'black';
    this.colorBackgroundTimKiem = 'white';
    this.indTK++;
    if (this.indTK > 1) {
      this.colorTextTimKiem = '';
      this.colorBackgroundTimKiem = '';
      this.indTK = 0;
    }
    this.indDM = 0;  this.indTI = 0;  this.indDCB = 0;
    this.indVL = 0;  this.indLH = 0;
}
if (index == 'danhchoban') {
  this.colorTextDCB = 'black';
  this.colorBackgroundDCB = 'white';
  this.indDCB++;
  if (this.indDCB > 1) {
    this.colorTextDCB = '';
    this.colorBackgroundDCB = '';
    this.indDCB = 0;
  }
  this.indDM = 0;  this.indTI = 0;  this.indTK = 0;
  this.indVL = 0;  this.indLH = 0;
}
if (index == 'vieclam') {
  this.colorTextVL = 'black';
  this.colorBackgroundVL = 'white';
  this.indVL++;
  if (this.indVL > 1) {
    this.colorTextVL = '';
    this.colorBackgroundVL = '';
    this.indVL = 0;
  }
  this.indDM = 0;  this.indTI = 0;  this.indDCB = 0;
  this.indTK = 0;  this.indLH = 0;
}
if (index == 'lienhe') {
  this.colorTextLH = 'black';
  this.colorBackgroundLH = 'white';
  this.indLH++;
  if (this.indLH > 1) {
    this.colorTextLH = '';
    this.colorBackgroundLH = '';
    this.indLH = 0;
  }
  this.indDM = 0;  this.indTI = 0;  this.indDCB = 0;
  this.indVL = 0;  this.indTK = 0;
}
}
  ngOnInit(): void {

  }
}
Injectable();
class Style {
    'position': string = 'absolute';
    'top.px': number = -5;
    'left.px': number = 0;
    'color': string = 'blue';
    'display': string = 'block';
}
class NewStyle {
  'display': string = 'none';
}

