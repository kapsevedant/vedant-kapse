import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly panelOpenState = signal(false);
  protected about: string = "About";
  protected aboutDesc: string = "Passionate professional with diverse skills. Committed to innovative solutions and continuous learning. Seeking opportunities to make a positive impact in Computer Science."
  protected educationHeading: string = "Education";
  protected experienceHeading: string = "Experience";

  protected educationDetails = [
    {
      educationName: 'B.Tech (Computer Engineering)',
      collegeName: 'ST.Vincent Pallotti College Of Engineering & Technology',
      score: 'CGPA : 7.9',
      duration: '2020 - 2024'
    },
    {
      educationName: '12th (HSC)',
      collegeName: 'Atulesh English College',
      score: 'Percentage : 87.38',
      duration: '2018 - 2020'
    },
    {
      educationName: '10th (SSC)',
      collegeName: 'Shree Convent & High School',
      score: 'Percentage : 95.40',
      duration: '2018'
    }
  ]


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
}
