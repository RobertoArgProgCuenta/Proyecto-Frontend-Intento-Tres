import { Component,Input} from '@angular/core';
import { Link } from 'src/app/Interfaces/Link';

@Component({
  selector: 'app-side-link',
  templateUrl: './side-link.component.html',
  styleUrls: ['./side-link.component.css']
})
export class SideLinkComponent {
  @Input() link:Link = {"name":"placeholder","href":""};
  constructor(){}
  ngOnInit():void
  {

  }
}
