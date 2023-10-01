import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor( private dbzervice: DbzService ){
    }

    get characters(): Character[] {
        return [...this.dbzervice.characters];
    }

    deleteCharcterById( id:string): void{
        this.dbzervice.deleteCharcterById(id)
    }

    onNewCharacter(character: Character): void {
        this.dbzervice.onNewCharacter(character)

    }



}