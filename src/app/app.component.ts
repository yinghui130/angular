import { Component } from '@angular/core';

export class Hero{
  id:number;
  name:string;
}
const Heroes:Hero[]=[
  {id:2,name:'Mr.刘'},
  {id:3,name:'豹王'},
  {id:4,name:'林冲'},
  {id:5,name:'吕布'},
  {id:6,name:'岳飞'},
  {id:7,name:'杨继业'},
  {id:8,name:'电魂'},
  {id:9,name:'山丘之王'},
  {id:10,name:'野人王'},
];

@Component({
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
  <h2>我的英雄</h2>
  <ul class='heroes'>
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero" 
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span>
      {{hero.name}}
      </li>
  </ul>
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </div>
  </div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
 // templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '英雄浏览';
  heroes=Heroes;
  selectedHero:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
  hero:Hero={
    id:1,
    name:'风暴'
  }
}
