import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
              <h3 *ngIf="displayName; else elseBlock1">
                lalala
              </h3>
              <ng-template #elseBlock1>
                <h3>
                    Name is hidden
                </h3>
              </ng-template>

              <div *ngIf="displayName; then thenBlock; else elseBlock2"></div>
              <ng-template #thenBlock>
                   <h2>lalala1</h2>
              </ng-template>

              <ng-template #elseBlock2>
                   <h2>Name is hidden</h2>
              </ng-template>

              <div [ngSwitch]="color">
                   <div *ngSwitchCase="'red'">you picked red color</div>
                   <div *ngSwitchCase="'blue'">you picked blue color</div>
                   <div *ngSwitchCase="'green'">you picked green color</div>
                   <div *ngSwitchDefault>pick again</div>
              </div>

              <div *ngFor="let color of colors; index as i">
                    <h3>{{i+1}}{{color}}</h3>
              </div>

              
              <h2>{{ "Hello "+name }}</h2>
              <button (click)="fireEvent()">Send event</button>
              
              `,
  styles: []
})
export class TestComponent implements OnInit {
  //make use of a property, we can add or remove a element in the dom  ng-if
  displayName=true;
  //ng-switch
  public color="red1";
  //ng-for
  public colors=["red","blue","green","yellow"];

  //component interaction  <h2>{{ "Hello "+parentData }}</h2>
  //@Input() public parentData;
  //or give alias
  @Input('parentData') public name;

  //create a new instance of the event emitter class
  @Output()  childEvent=new EventEmitter();
  //define fireEvent to emit the event
  fireEvent(){
    //this is a message I want to send to parent component
    this.childEvent.emit('Hey this is child');
  }

  constructor() { }

  ngOnInit() {
  }

}
