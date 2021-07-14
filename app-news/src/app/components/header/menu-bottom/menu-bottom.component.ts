import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-menu-bottom',
  templateUrl: './menu-bottom.component.html',
  styleUrls: ['./menu-bottom.component.scss']
})
export class MenuBottomComponent implements OnInit {
  @Input() dataCMMB: any[] = [
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
  getDisplay(title:String){
    if ((title == 'EURO 2020') || (title == 'SĂN TOUR') || (title == 'CẨM NANG TUYỂN SINH 2021') || (title == 'VƯỢT QUA COVID-19')) return 'block';
    return 'none';
  }
  constructor(private menubottom: AppComponent) {


   }

  ngOnInit(): void {
  }

}


