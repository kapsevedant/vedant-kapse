import {Component} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  protected skillsHeading: string = "Skills";
  protected skillsDescription: string = "Explore my skills in web development, design, and programming, showcasing my expertise and projects in an easy-to-understand way.";

  constructor() {
  }

  protected webDev = [
    {
      style: "angular",
      icon: `<i class="fab fa-angular"></i>`,
      name: "Angular"
    },
    {
      style: "js",
      icon: `<i class="fa-brands fa-js"></i>`,
      name: "JavaScript"
    },
    {
      style: "react",
      icon: `<i class="fa-brands fa-react"></i>`,
      name: "React"
    },
    {
      style: "html",
      icon: ` <i class="fa-brands fa-html5"></i>`,
      name: "HTML"
    },
    {
      style: "css",
      icon: `<i class="fa-brands fa-css3-alt"></i>`,
      name: "CSS"
    },
    {
      style: "bootstrap",
      icon: `<i class="fa-brands fa-bootstrap"></i>`,
      name: "Bootstrap"
    },
    {
      style: "php",
      icon: ` <i class="fa-brands fa-php"></i>`,
      name: "PHP"
    },
    {
      style: "sql",
      icon: `<i class="fa-solid fa-database"></i>`,
      name: "SQL"
    },
  ];

  protected programming = [
    {
      style: "c",
      icon: `<i class="fa-solid fa-c"></i>`,
      name: "C"
    },
    {
      style: "java",
      icon: ` <i class="fa-brands fa-java"></i>`,
      name: "Java"
    },
    {
      style: "js",
      icon: ` <i class="fa-brands fa-js"></i>`,
      name: "JavaScript"
    },
  ];

  protected otherSkills = [
    {
      style: "git",
      icon: ` <i class="fa-brands fa-git-alt"></i>`,
      name: "Git"
    },
    {
      style: "github",
      icon: ` <i class="fa-brands fa-github"></i>`,
      name: "Github"
    },
    {
      style: "bitbucket",
      icon: `<i class="fa-brands fa-bitbucket"></i>`,
      name: "Bitbucket"
    },
  ]
}
