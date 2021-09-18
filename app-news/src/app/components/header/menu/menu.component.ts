
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
@Injectable({ providedIn: 'root' })
export class MenuComponent implements OnInit {
  // tìm kiếm;
  item = [
    {
      id: 1,
      text:''

    }
  ];
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

 navigationExtras?: NavigationExtras;

//  linh rss video
 private Video ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvideo.thanhnien.vn%2Frss%2Fhome.rss';
 private viThoiSu='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fthoi-su.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private phongSu ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fphong-su.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private videoGT ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fgiai-tri.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private monNgon =' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fmon-ngon.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private viThethao='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fvideo-the-thao.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private viTheGioi=' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fthe-gioi.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private trucTuyen='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Ftruc-tuyen.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
// link Thời sự
 private ThoiSu=' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private chinhTri='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fchinh-tri.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private phapLuat='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fphap-luat.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private danSinh='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fdan-sinh.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private ldvl ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Flao-dong-viec-lam.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private qdb='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fquyen-duoc-biet.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private psđt='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fphong-su-dieu-tra.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private quocphong='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fquoc-phong.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
 private vqCovid='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fvuot-qua-covid-19.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
//  Tôi viết
private ToiViet='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftoi-viet.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
// Thế giới
private TheGioi='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
private kttg='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fkinh-te-the-gioi.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
private quanSu='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fquan-su.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
private gocNhin='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fgoc-nhin.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
private hoSo='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fho-so.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
private nvnc='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fnguoi-viet-nam-chau.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
private chuyenLa='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fchuyen-la.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
  // Văn hóa
  private VanHoa='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
  private ccvh='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fcau-chuyen.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
  private khaoCuu='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fkhao-cuu.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
  private xemNghe='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fxem-nghe.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
  private haNoi='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fha-noi-thanh-pho-toi-yeu.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
  private songDep='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fsong-dep.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
  private mnhn='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fvan-hoa%2Fmon-ngon-ha-noi.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
// Giải trí
private GiaiTri='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiai-tri.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private phim='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiai-tri%2Fphim.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private truyenHinh='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiai-tri%2Ftruyen-hinh.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private đns='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiai-tri%2Fdoi-nghe-si.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
// Thể thao
private TheThao=' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthethao.thanhnien.vn%2Frss%2Fhome.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private euro='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Feuro-2020.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private bđvn='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Fbong-da-viet-nam.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private vLeague='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Fsoi-dong-cung-vleague.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private bđqt='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Fbong-da-quoc-te.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private chuyenNhuong='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Ftin-chuyen-nhuong.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private bongRo='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Fbong-ro.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private ttcđ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Fthe-thao-cong-dong.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private khac='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fthe-thao%2Ftoan-canh-the-thao.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
// Đời sống
private DoiSong='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private nsqt='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song%2Fnguoi-song-quanh-ta.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private giaDinh='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song%2Fgia-dinh.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private amThuc=' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song%2Fam-thuc.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private congDong='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song%2Fcong-dong.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
private gsbc='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song%2Fguong-sang-bien-cuong.rss&api_key=lqvd2mniv9y9rt4ino5oqdsgmx1rytp90t2qycmz';
// Tài chính - Kinh doanh
private TCKD='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private ktx='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fkinh-te-xanh.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private cspt='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fkinh-doanh%2Fchinh-sach-phat-trien.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private nganHang='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fngan-hang.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private chungKhoan='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fchung-khoan.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private doanhNg='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fdoanh-nghiep.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private doanhNh='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fdoanh-nhan.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private tieuDung='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Ftieu-dung.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private lamGiau='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Flam-giau.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private diaOc='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh%2Fdia-oc.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
// Giới trẻ
private GioiTre='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgioi-tre.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private syac='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgioi-tre%2Fsong-yeu-an-choi.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private tgM='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgioi-tre%2Fthe-gioi-mang.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private ketNoi='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgioi-tre%2Fket-noi.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private doanHoi='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgioi-tre%2Fdoan-hoi.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
// Giáo dục
private GiaoDuc='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private tuyenSinh='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Ftuyen-sinh%2F2021.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private tuVan='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fhop-thu-tu-van-24-7.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private duHoc='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fdu-hoc.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private chonNghe='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fchon-nghe.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private chonTruong='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fchon-truong.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private nguoiThay='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fnguoi-thay.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private traCuu='';
private camNang='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fgiao-duc%2Fcam-nang-tuyen-sinh-2021.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
// Công nghệ
private CongNghe='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private xuHuong='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fxu-huong.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private spM='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fsan-pham-moi.rss&api_key=1k25wgfmjkjyuixk5j6s3l2vabkshvjrpdvzhusf';
private kinhNgh='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fkinh-nghiem.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private yTuong='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fy-tuong.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private cđs='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fchuyen-doi-so.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
// Game
private Game='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgame.thanhnien.vn%2Frss%2Fhome.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private eSport='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fesports.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private thuThuat='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fthu-thuat.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private phongM='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fgame%2Fphong-may.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private CnG='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fcong-nghe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private congĐ=' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fcong-dong.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private vd='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fgame%2Fvideo-game.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
// Sức khỏe
private SucKhoe='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private lamDep='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Flam-dep.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private kđmn='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Fkhoe-dep-moi-ngay.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private gioiTinh='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Fgioi-tinh.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private songVk='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Fsong-vui-khoe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
// DU lịch
private DuLich='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private khamPha='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich%2Fkham-pha.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private az='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich%2Fa-z.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private sanTour='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich%2Fsan-tour.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
// Xe
private Xe='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fxe.thanhnien.vn%2Frss%2Fhome.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private ttx='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fxe%2Fthi-truong-xe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private tvx='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fxe%2Ftu-van-xe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private dđx='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fxe%2Fdien-dan-xe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private đgx='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fxe%2Fdanh-gia-xe.rss&api_key=gnndukhk8wcsrve3kal0zgdfm1e34bjbri7o4jjv';
private kpx='';
private vdx='';
// còn hai cái cuối lấy link dùm nha


// data link rss các chuyên mục menu
@Input() dataLinkCM: any[] = [
    {header:this.Video,data:[this.viThoiSu,this.phongSu,this.videoGT,this.monNgon,this.viThethao,this.viTheGioi,this.trucTuyen]},
    {header:this.ThoiSu,data:[this.chinhTri,this.phapLuat,this.danSinh,this.ldvl,this.qdb,this.psđt,this.quocphong,this.vqCovid]},
    {header:this.TheGioi,data:[this.kttg,this.quanSu,this.gocNhin,this.hoSo,this.nvnc,this.chuyenLa]},
    {header:this.VanHoa,data:[this.ccvh,this.khaoCuu,this.xemNghe,this.haNoi,this.songDep,this.mnhn]},
    {header:this.GiaiTri,data:[this.phim,this.truyenHinh,this.đns]},
    {header:this.TheThao,data:[this.euro,this.bđvn,this.vLeague,this.bđqt,this.chuyenNhuong,this.bongRo,this.ttcđ,this.khac]},
    {header:this.DoiSong,data:[this.nsqt,this.giaDinh,this.amThuc,this.congDong,this.gsbc]},
    {header:this.TCKD,data:[this.ktx,this.cspt,this.nganHang,this.chungKhoan,this.doanhNg,this.doanhNh,this.tieuDung,this.lamGiau,this.diaOc]},
    {header:this.GioiTre,data:[this.syac,this.tgM,this.ketNoi,this.doanHoi]},
    {header:this.GiaoDuc,data:[this.tuyenSinh,this.tuVan,this.duHoc,this.chonNghe,this.chonTruong,this.nguoiThay,this.traCuu,this.camNang]},
    {header:this.CongNghe,data:[this.xuHuong,this.spM,this.kinhNgh,this.yTuong,this.cđs]},
    {header:this.Game,data:[this.eSport,this.thuThuat,this.phongM,this.CnG,this.congĐ,this.vd]},
    {header:this.SucKhoe,data:[this.lamDep,this.kđmn,this.gioiTinh,this.songVk]},
    {header:this.DuLich,data:[this.khamPha,this.az,this.sanTour]},
    {header:this.Xe,data:[this.ttx,this.tvx,this.dđx,this.đgx,this.kpx,this.vdx]},
=======
  public keyword: string;
  @Input() dataTM: any[];
  private urlNew = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su.rss&api_key=geidhyghyfmctbkyu9epa976k5ofgyqw7mkbuufa';
  dataCM: any[] = [
    { header: 'VIDEO', data: ['THỜI SỰ', 'PHÓNG SỰ', 'GIẢI TRÍ', 'MÓN NGON', 'THỂ THAO', 'THẾ GIỚI', 'TRỰC TUYẾN'] },
    { header: 'THỜI SỰ', data: ['CHÍNH TRỊ', 'PHÁP LUẬT', 'DÂN SINH', 'LAO ĐỘNG - VIỆC LÀM', 'QUYỀN ĐƯỢC BIẾT', 'PHÓNG SỰ / ĐIỀU TRA', 'QUỐC PHÒNG', 'VƯỢT QUA COVID-19'] },
    { header: 'THẾ GIỚI', data: ['KINH TẾ THẾ GIỚI', 'QUÂN SỰ', 'GÓC NHÌN', 'HỒ SƠ', 'NGƯỜI VIỆT NĂM CHÂU', 'CHUYỆN LẠ'] },
    { header: 'VĂN HÓA', data: ['CÂU CHUYỆN VĂN HÓA', 'KHẢO CỨU', 'XEM - NGHE', 'HÀ NỘI THÀNH PHỐ TÔI YÊU', 'SỐNG ĐẸP', 'MÓN NGON HÀ NỘI'] },
    { header: 'GIẢI TRÍ', data: ['PHIM', 'TRUYỀN HÌNH', 'ĐỜI NGHỆ SĨ'] },
    { header: 'THỂ THAO', data: ['EURO 2020', 'BÓNG ĐÁ VIỆT NAM', 'SÔI ĐỘNG CÙNG V-LEAGUE', 'BÓNG ĐÁ QUỐC TẾ', 'TIN CHUYỂN NHƯỢNG', 'BÓNG RỔ', 'THỂ THAO & CỘNG ĐỒNG', 'THỂ THAO KHÁC'] },
    { header: 'ĐỜI SỐNG', data: ['NGƯỜI SỐNG QUANH TA', 'GIA ĐÌNH', 'ẨM THỰC', 'CỘNG ĐỒNG', 'GƯƠNG SÁNG BIÊN CƯƠNG'] },
    { header: 'TÀI CHÍNH - KINH DOANH', data: ['KINH TẾ XANH', 'CHÍNH SÁCH & PHÁT TRIỂN', 'NGÂN HÀNG', 'CHỨNG KHOÁN', 'DOANH NGHIỆP', 'DOANH NHÂN', 'TIÊU DÙNG', 'LÀM GIÀU', 'ĐỊA ỐC'] },
    { header: 'GIỚI TRẺ', data: ['SỐNG -YÊU - ĂN - CHƠI', 'THẾ GIỚI MẠNG', 'KẾT NỐI', 'ĐOÀN - HỘI'] },
    { header: 'GIÁO DỤC', data: ['TUYỂN SINH 2021', 'HỘP TƯ VẤN 24/7', 'DU HỌC', 'CHỌN NGHỀ', 'CHỌN TRƯỜNG', 'NGƯỜI THẦY', 'CẨM NANG TUYỂN SINH 2021'] },
    { header: 'CÔNG NGHỆ', data: ['XU HƯỚNG', 'SẢN PHẨM MỚI', 'KINH NGHIỆM', 'Ý TƯỞNG', 'CHUYỂN ĐỔI SỐ'] },
    { header: 'GAME', data: ['ESPORTS', 'THỦ THUẬT', 'PHÒNG MÁY', 'CÔNG NGHỆ GAME', 'CỘNG ĐỒNG', 'VIDEO'] },
    { header: 'SỨC KHỎE', data: ['LÀM ĐẸP', 'KHỎE ĐẸP MỖI NGÀY', 'GIỚI TÍNH', 'SỐNG VUI KHỎE'] },
    { header: 'DU LỊCH', data: ['KHÁM PHÁ', 'A - Z', 'SĂN TOUR'] },
    { header: 'XE', data: ['THỊ TRƯỜNG XE', 'TƯ VẤN XE', 'DIỄN ĐÀN XE', 'ĐÁNH GIÁ XE', 'KHÁM PHÁ XE', 'VIDEO'] }

  ];

  routerHome: string = '/';
  routerBCB: string = 'bancanbiet';
  constructor(private menu: AppComponent, private router: Router) {
    this.dataTM = [];
    this.setDataTM(this.urlNew);
    this.colorTextDN = '';
    this.colorBackgroundDN = '';
    this.keyword = '';

    if (this.router.url == '/bancanbiet') {
      this.titleBCB = 'TIN TỨC NHANH';
      this.titleHome = 'BẠN CẦN BIẾT';
      this.paddingHome = 10;
      this.paddingBCB = 15;
      this.displayHome = 'none';
      this.displayBCB = 'none'
      this.fontw = 'bold';
      this.routerBCB = '/';
      this.routerHome = 'bancanbiet';
      this.size = 15;

    }
    if (this.router.url == '/') {
      this.titleHome = 'TIN TỨC NHANH';
      this.titleBCB = 'BẠN CẦN BIẾT';
      this.paddingHome = 0;
      this.paddingBCB = 10;
      this.displayHome = '';
      this.displayBCB = ''
      this.fontw = '';
      this.size = 0;
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
    if (this.router.url == '/search') {
      this.titleHome = 'TIN TỨC NHANH';
      this.titleBCB = 'BẠN CẦN BIẾT';
      this.paddingBCB = 10;
    }
  }

  navigationExtras?: NavigationExtras;
  view2(index1: number, index2: number, title: string): void {
    this.router.navigate(['/']).then(() => {
      const index: any[] = [index1, index2, title];
      this.navigationExtras = { state: index };
      this.router.navigateByUrl('/search', this.navigationExtras);
    });
  }
  view1(index1: number, title: string): void {
    this.router.navigate(['/']).then(() => {
      const index: any[] = [index1, title];
      this.navigationExtras = { state: index };
      this.router.navigateByUrl('/search', this.navigationExtras);
     // console.log(index);
    });
  }
  view3(): void {
    this.router.navigate(['/']).then(() => {
      const index: any[] = [this.keyword];
      this.navigationExtras = { state: index };
      this.router.navigateByUrl('/search', this.navigationExtras);
    });
  }
  getDisplay(title: string) {
    if ((title == 'EURO 2020') || (title == 'SĂN TOUR') || (title == 'CẨM NANG TUYỂN SINH 2021')) return 'block';
    return 'none';
  }
  setDataTM(urls: string) {
    this.menu.getData(urls)
      .subscribe((value: any) => {
        for (let item of value['items']) {
          this.dataTM.push({ title: item['title'], time: item['pubDate'].substr(11, 5), link: item['link'] });
        }
      });
  }
  setColor(index: any) {
    this.colorTextDN = ''; this.colorBackgroundDN = '#00bfc5';
    this.colorTextDanhMuc = ''; this.colorBackgroundDanhMuc = '';
    this.colorTextTienIch = ''; this.colorBackgroundTienIch = '';
    this.colorTextTimKiem = ''; this.colorBackgroundTimKiem = '';
    this.colorTextDCB = ''; this.colorBackgroundDCB = '';
    this.colorTextVL = ''; this.colorBackgroundVL = '';
    this.colorTextLH = ''; this.colorBackgroundLH = '';
    this.displayCM1 = 'block'; this.displayCM2 = 'none';
    this.displayTI1 = 'block'; this.displayTI2 = 'none';
    this.displayVL1 = 'block'; this.displayVL2 = 'none';
    this.displayTK1 = 'block'; this.displayTK2 = 'none';
    this.displayLH1 = 'block'; this.displayLH2 = 'none';
    this.displayTM1 = 'block'; this.displayTM2 = 'none';
    if (index == 'chuyenmuc') {
      this.colorBackgroundDanhMuc = 'white'; this.colorTextDanhMuc = 'black';
      this.displayCM2 = 'block'; this.displayCM1 = 'none';
      this.indDM++;
      if (this.indDM > 1) {
        this.colorBackgroundDanhMuc = ''; this.colorTextDanhMuc = '';
        this.displayCM1 = 'block'; this.displayCM2 = 'none';
        this.indDM = 0;
      }
      this.indTK = 0; this.indTI = 0; this.indDCB = 0; this.indVL = 0; this.indLH = 0;
    }
    if (index == 'tienich') {
      this.colorTextTienIch = 'black'; this.colorBackgroundTienIch = 'white';
      this.indTI++; this.displayTI2 = 'block'; this.displayTI1 = 'none';
      this.indTK = 0; this.indDM = 0; this.indDCB = 0; this.indVL = 0; this.indLH = 0;
      if (this.indTI > 1) {
        this.displayTI1 = 'block'; this.displayTI2 = 'none';
        this.colorTextTienIch = ''; this.colorBackgroundTienIch = '';
        this.indTI = 0;
      }
    }
    if (index == 'timkiem') {
      this.colorTextTimKiem = 'black'; this.colorBackgroundTimKiem = 'white';
      this.indTK++; this.displayTK2 = 'block'; this.displayTK1 = 'none';
      if (this.indTK > 1) {
        this.colorTextTimKiem = ''; this.colorBackgroundTimKiem = '';
        this.indTK = 0; this.displayTK1 = 'block'; this.displayTK2 = 'none';
      }
      this.indDM = 0; this.indTI = 0; this.indDCB = 0; this.indVL = 0; this.indLH = 0;
    }
    if (index == 'danhchoban') {
      this.colorTextDCB = 'black'; this.colorBackgroundDCB = 'white';
      this.indDCB++; this.displayTM2 = 'block'; this.displayTM1 = 'none';
      if (this.indDCB > 1) {
        this.colorTextDCB = ''; this.colorBackgroundDCB = '';
        this.indDCB = 0; this.displayTM1 = 'block'; this.displayTM2 = 'none';
      }
      this.indDM = 0; this.indTI = 0; this.indTK = 0; this.indVL = 0; this.indLH = 0;
    }
    if (index == 'vieclam') {
      this.colorTextVL = 'black'; this.colorBackgroundVL = 'white';
      this.indVL++; this.displayVL2 = 'block'; this.displayVL1 = 'none';
      if (this.indVL > 1) {
        this.displayVL1 = 'block'; this.displayVL2 = 'none';
        this.colorTextVL = ''; this.colorBackgroundVL = ''; this.indVL = 0;
      }
      this.indDM = 0; this.indTI = 0; this.indDCB = 0; this.indTK = 0; this.indLH = 0;
    }
    if (index == 'lienhe') {
      this.colorTextLH = 'black'; this.colorBackgroundLH = 'white';
      this.indLH++; this.displayLH2 = 'block'; this.displayLH1 = 'none';
      if (this.indLH > 1) {
        this.colorTextLH = ''; this.colorBackgroundLH = ''; this.indLH = 0;
        this.displayLH1 = 'block'; this.displayLH2 = 'none';
      }
      this.indDM = 0; this.indTI = 0; this.indDCB = 0; this.indVL = 0; this.indTK = 0;
    }
  }
  displayBCB = ''; displayHome = ''; displayCM1 = 'block'; displayCM2 = 'none';
  displayTI1 = 'block'; displayTI2 = 'none'; displayVL1 = 'block'; displayVL2 = 'none';
  displayTK1 = 'block'; displayTK2 = 'none'; displayTM1 = 'block'; displayTM2 = 'none';
  displayLH1 = 'block'; displayLH2 = 'none';
  paddingHome = 0;
  paddingBCB = 0;
  titleHome = '';
  titleBCB = '';
  fontw = '';
  size = 0;
  colorTextDanhMuc = ''; colorBackgroundDanhMuc = '';
  colorTextTienIch = ''; colorBackgroundTienIch = '';
  colorTextTimKiem = ''; colorBackgroundTimKiem = '';
  colorTextDCB = ''; colorBackgroundDCB = '';
  colorTextVL = ''; colorBackgroundVL = '';
  colorTextDN = ''; colorBackgroundDN = '';
  colorTextLH = ''; colorBackgroundLH = '';
  displayclose = ''; indDM = 0; indTI = 0; indTK = 0;
  indDCB = 0; indVL = 0; indLH = 0; indDN = 0;


  ngOnInit(): void {

  }
}
