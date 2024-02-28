import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit{

  ads: AdItem[] = [];

  constructor(private adService: AdService){}

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

}
