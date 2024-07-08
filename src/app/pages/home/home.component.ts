import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
protected toggleExperienceDiv : boolean = false;
  constructor() {
  }
  protected experience = [
    {
      companyName: 'Locationguru Solutions Pvt. Ltd.',
      duration: 'Feb 2024 - Present',
      skills: 'Angular,SASS, Git, Bitbucket, Project Management',
      projects: 'Smart Track, Sim Swap, Teampilot-UI',
      experienceDetails: `<span class="d-block text-size-15">1. I have worked on different project UI’s which are based on LBS (Location Based Services) platform
         where I have learned the Software Development Lifecycle and project management with frontend Web Development Framework ANGULAR.
         </span><span class="text-size-15">2. These Angular projects integrates various APIs and utilizes Leaflet with OpenStreetMap (OSM)
         services for interactive mapping. It features dynamic data visualization, user-friendly interface,
         and seamless geolocation capabilities, enhancing the overall user experience.
</span>`
    }
  ];

  protected toggleExperience(){
    setTimeout(()=>{
      this.toggleExperienceDiv = !this.toggleExperienceDiv;
    },200)
  }
}
