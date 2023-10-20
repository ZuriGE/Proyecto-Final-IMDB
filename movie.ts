import { Professional } from "./professional";

export class Movie{

    public title: string
    public releaseYear: number
    public actors: Professional[]
    public nationality: string
    public director: Professional
    public writer: Professional
    public language: string
    public plataforma: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string

    constructor(title:string, releaseYear:number, nationality:string, genre:string){
        this.title = title;
        this.releaseYear=releaseYear;
        this.nationality = nationality;
        this.genre=genre;
    }

    public printAll():void{
        let atributos = Object.keys(this);
        atributos.forEach((value) => {
            if (value == 'director' || value == 'writer'){
                console.log(`${value}: ${this[value].name}`)
            }else if (value == 'actors'){
                let cast:string = ''
                this[value].forEach((act) => {
                    cast += act.name + ', '
                })
                console.log(`${value}: ${cast.slice(0,-2)}`)
            }else{
                console.log(`${value}: ${this[value]}`)
            }
        })  
    }

  
}