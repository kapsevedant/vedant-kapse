import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright-modal',
  templateUrl: './copyright-modal.component.html',
  styleUrl: './copyright-modal.component.scss'
})
export class CopyrightModalComponent {

  protected currentYear!:number;
  constructor() {
  }
  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

}
