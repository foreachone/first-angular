import { Injectable } from "@angular/core";
import { AdItem } from "./ad-item";
import { JobComponent } from "./job.component";
import { ProfileComponent } from "./profile.component";


@Injectable() 
export class AdService {
    getAds() {
        return [
          new AdItem(
            ProfileComponent,
            { name: 'Bombasto', bio: 'Brave as they come' }
          ),
          new AdItem(
            ProfileComponent,
            { name: 'Dr. IQ', bio: 'Smart as they come' }
          ),
          new AdItem(
            JobComponent,
            { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
          ),
          new AdItem(
            JobComponent,
            { headline: 'Openings in all departments', body: 'Apply today' }
          )
        ];
      }
}