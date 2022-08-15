import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  constructor() { }

  welcome_word: string =' My name is Artem Aksenov, and i`m currently looking for a job as front-end developer.'
  +' Righr now i`m working at Estad as software engineer. This site was created as a showcase of my achievments and prev projects. Sit back and enjoy! '
  hard_skills: string[] = 'Angular, Python, HTML, CSS, ES6, BEM, Pixelperfect, Adaprive design, SCSS, Selenium, JavaScript, Git, Figma, c#'.split(',')
  ngOnInit(): void {
  }
}
