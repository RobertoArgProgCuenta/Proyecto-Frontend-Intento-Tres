import { Component } from '@angular/core';
import { Link } from 'src/app/Interfaces/Link';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  links:Link[]=
  [
    {"id":1,"name":"Google","href":"https://www.google.com/"},
    {"id":2,"name":"Youtube","href":"https://youtube.com/"}
  ] 
}
