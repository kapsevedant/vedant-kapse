import {Component} from '@angular/core';
import {Constants} from "../../../utils/constant";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected portfolioImg: string = Constants.projectImages.portfolioImg;
  protected majorProject: string = Constants.projectImages.majorProject;
  protected miniProject: string = Constants.projectImages.miniProject;
  protected invoice: string = Constants.projectImages.invoice;
  protected projectsHeading: string = "Projects";
  protected projectsDescription: string = "Explore my portfolio showcasing innovative projects and skills in web development, design, and digital solutions for diverse industries."

  constructor() {
  }

  protected projects = [
    {
      name: 'Online Exam Proctoring System',
      technologies: 'React, Python, Node Js, Fast API, MongoDB',
      image: this.majorProject
    },
    {
      name: 'Pathfinding Visualizer',
      technologies: 'React, Bootstrap',
      image: this.miniProject
    },
    {
      name: 'Invoice Generator',
      technologies: 'HTML, CSS, Bootstrap, PHP, MySQL',
      image: this.invoice
    },
    {
      name: 'Personal Portfolio',
      technologies: 'Angular',
      image: this.portfolioImg
    },
    {
      name: 'Daily News',
      technologies: 'Angular, Open source APIs',
      image: ''
    }
  ]
}
