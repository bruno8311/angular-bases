import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log('uuid: ',uuid())
@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Character[]=[
        {id: uuid(),name: 'Krilin',power: 1000},
        {id: uuid(), name: "Goku",power: 9500},
        {id: uuid(),name: "Vegeta",power: 9500}
    ]
    
    onNewCharacter(character: Character){
        const newCharacter: Character = {id: uuid(), ...character}
        this.characters.push(newCharacter)
    }
    
    // onDeleteCharacter(index: number){
    //     this.characters.splice(index,1)
    // }

    deleteCharcterById(id: string){
        this.characters = this.characters.filter( characters => characters.id !== id)
        console.log('El nuevo character es: ',this.characters)
    }
    
    
}