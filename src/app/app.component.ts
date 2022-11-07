import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day070 App';
  innerText = "";

getValue(){

 if(confirm("do you want to show information?")){
  this.innerText = "you choose yes"
 }else{
  this.innerText = "you choose no"
 }
}

}
