import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://i.pinimg.com/originals/6c/de/7a/6cde7accc735d48c66abef4a170590a3.jpg';
  image2 = 'https://i0.wp.com/www.aesdes.org/wp-content/uploads/2020/01/Cyberpunk-1.jpg';
  image3 = 'https://www.looper.com/img/gallery/the-history-of-tatooine-fully-explained/intro-1598632525.jpg';

  constructor() { }

  ngOnInit() {
  }

}