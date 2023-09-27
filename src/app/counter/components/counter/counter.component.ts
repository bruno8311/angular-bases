import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
<h3>Counter: {{counter}}</h3>
<button (click)="increaseBy(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
    
    `
})

export class CounterComponent implements OnInit {

    public counter: number = 10;
    public title: string = 'Hola Mundo';

    constructor() { }

    ngOnInit() { }
    
    increaseBy(value: number){
    this.counter +=value
    }

    reset(){
    this.counter = 10
    }

}