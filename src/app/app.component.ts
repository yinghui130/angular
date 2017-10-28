import { Component } from '@angular/core';

export class Hero{
  id:number;
  name:string;
}

@Component({
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} 详情!</h2>
  <div><label>id:</label>{{hero.id}}</div>
  <div>
    <label>name:</label>
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </div>
  `,
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '英雄浏览';
  //hero='风暴';
  hero:Hero={
    id:1,
    name:'风暴'
  }
}
