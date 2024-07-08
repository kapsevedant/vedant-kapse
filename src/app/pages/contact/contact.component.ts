import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected myEmailId: string = 'vedantkapse2020@gmail.com';
  protected userName!: string;

  constructor(private http: HttpClient) {
  }

  protected socialAccounts = [
    {
      icon:`<i class="fa-brands fa-linkedin"></i>`,
      name:"LinkedIn",
      href:"https://www.linkedin.com/in/vedant-kapse/",
      style:"linkedin"
    },
    {
      icon:`<i class="fa-brands fa-github"></i>`,
      name:"Github",
      href:"https://github.com/kapsevedant/",
      style:""
    },
    {
      icon:`<i class="fa-solid fa-phone"></i>`,
      name:"Contact",
      href:"tel:+91 9529342942",
      style: "contact"
    },
    {
      icon:`<i class="fa-solid fa-envelope"></i>`,
      name:"Gmail",
      href:"mailto:vedantkapse2020@gmail.com",
      style: "gmail"
    }
  ]

  onSubmit(contactForm: any) {
    const formData = {
      name: contactForm.value.name,
      email: contactForm.value.email
    };

    this.http.post('https://formspree.io/YOUR_FORM_ID', formData).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          text: 'Form submitted successfully!',
        });
      },
      error => {
        Swal.fire({
          icon: 'error',
          text: `Sorry "${this.userName}" there was an error submitting the form. Please try again later or else manually send me mail.`,
        });
      }
    );

  }

}
