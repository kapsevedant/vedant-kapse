import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CopyrightModalComponent} from "../shared-components/copyright-modal/copyright-modal.component";
import {ThemeService} from "../services/theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  protected title!:'Copyright';
  protected isLightTheme: boolean = true;
  constructor(private matDialog: MatDialog,private themeService: ThemeService) {
  }

  protected navbarLinks = [
    {
      name:'Home',
      routerLink:'home',
      icon:`<i class="fa-solid fa-house"></i>`,
    },
    {
      name:'About',
      routerLink:'about',
      icon:`<i class="bi bi-file-person"></i>`
    },
    {
      name:'Skills',
      routerLink:'skills',
      icon: `<i class="fa-solid fa-code"></i>`
    },
    {
      name:'Projects',
      routerLink:'projects',
      icon: `<i class="fa-solid fa-laptop"></i>`
    },
    {
      name:'Contact',
      routerLink:'contact',
      icon: `<i class="fa-solid fa-phone"></i>`
    }
  ]

  protected openCopyrightModal(){
    const dialogRef = this.matDialog.open(CopyrightModalComponent, {

    });
  }

  protected toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    this.themeService.toggleTheme();
  }

  protected toggleNavbar(navbarToggler: HTMLButtonElement) {
    if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
      navbarToggler.click();
    }
  }
}
