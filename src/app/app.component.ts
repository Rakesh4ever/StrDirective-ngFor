import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StrDirective-ngFor';

  public colors=['red','maroon','pink','blue','Navi blue','purple','green','black','orange','yellow','gray','brown','White']

public employees=[
  {eid :1,ename:'Santosh',eaddress:'Ranchi',epin:804444},
  {eid :2,ename:'Shankar',eaddress:'Giridih',epin:815301},
  {eid :3,ename:'Sabyasachi',eaddress:'Jamshedpur',epin:825301},
  {eid :4,ename:'Ravi',eaddress:'Hazaribagh',epin:808011},
]
}
