import { Injectable } from '@angular/core';
import { Song } from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {


  playlist: Song[] = [
    {
      id: 'pxMHXDEHU-I',
      name: 'Cuối Cùng Thì - Kỳ Vọng Sai Lầm Remix - Ngàn Câu Hứa Chẳng Được Gì.. Nhạc Remix HOT Nhất TikTok'
    },
    {
      id: 'Jn_epqPaFok',
      name: 'Hơn Cả Mây Trời, Chuyện Đôi Ta - List Nhạc Chill Buồn Tâm Trạng | Nhạc Lofi Chill Hot TikTok'
    },
    {
      id: 'fjtdkIYc6gs',
      name: 'Những Bản Nhạc Lofi Chill Đang Hot Trend TikTok - Nhạc Chill Nhẹ Nhàng Đăng Story - Nhạc Lofi 2022'
    },
    {
      id: '59mrwL_FmiI',
      name: 'FACE NUEST REMIX - KỲ VỌNG SAI LẦM - MÌNH LỠ YÊU THƯƠNG MỘT NGƯỜI | NHẠC REMIX HOT NHẤT TIKTOK 2022'
    },
    {
      id: 'n8KOSfy_NNc',
      name: 'Nhạc Trẻ Remix 2022 Hay Nhất Hiện Nay, NONSTOP 2022 Bass Cực Mạnh,Việt Mix Dj Nonstop 2022 Vinahouse'
    },
    {
      id: 'fIk3OacivaQ',
      name: 'THIÊN THẦN SA NGÃ REMIX TIKTOK "FICTION" REMIX HOT TIKTOK - FACE NUEST REMIX x LONELY REMIX'
    }
  ];
  constructor(){}
  findSongById(id: any) {
    return this.playlist.find(item => item.id === id);
  }
}


