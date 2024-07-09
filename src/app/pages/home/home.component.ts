import {Component, effect, NgZone, signal} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected toggleExperienceDiv: boolean = false;
  private phrases = ['Computer Engineer', 'Web Developer'];
  private currentPhraseIndex = 0;
  private isDeleting = false;
  typedText = signal('');

  constructor(private ngZone: NgZone) {
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.animateText();
    });
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

  protected toggleExperience() {
    setTimeout(() => {
      this.toggleExperienceDiv = !this.toggleExperienceDiv;
    }, 200)
  }

  private animateText() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    const currentText = this.typedText();

    if (this.isDeleting) {
      this.typedText.set(currentText.slice(0, -1));
    } else {
      this.typedText.set(currentPhrase.slice(0, currentText.length + 1));
    }

    let typingSpeed = this.isDeleting ? 150 : 200; // Slower typing and deleting

    if (!this.isDeleting && currentText === currentPhrase) {
      typingSpeed = 2000; // Longer pause at end of phrase
      this.isDeleting = true;
    } else if (this.isDeleting && currentText === '') {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      typingSpeed = 1000; // Pause before starting new phrase
    }

    setTimeout(() => {
      this.ngZone.run(() => {
        this.animateText();
      });
    }, typingSpeed);
  }
}
