import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  protected educationDetails=[
    {
      educationName:'B.Tech (Computer Engineering)',
      collegeName:'ST.Vincent Pallotti College Of Engineering & Technology',
      score:'CGPA : 7.9',
      duration:'2020 - 2024'
    },
    {
      educationName:'12th (HSC)',
      collegeName:'Atulesh English College',
      score:'Percentage : 87.38',
      duration: '2018 - 2020'
    },
    {
      educationName:'10th (SSC)',
      collegeName:'Shree Convent & High School',
      score:'Percentage : 95.40',
      duration: '2018'
    }
  ]
}
