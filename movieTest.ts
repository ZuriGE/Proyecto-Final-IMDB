import { Movie } from "./movie";
import { Professional } from "./professional";

let myMovie = new Movie('Snatch',2000,'UK','black comedy')

let director = new Professional('Guy Ritchie', 54, 84, 183, false, 'British', 0, 'director')
let actor1 = new Professional('Jason Statham', 55, 77, 175, false, 'British', 0, 'actor')
let actor2 = new Professional('Brad Pitt', 59, 78, 180, false, 'American', 2, 'actor')
let actor3 = new Professional('Vinnie Jones', 58, 93, 185, true, 'British', 0, 'actor')

let cast:Professional[] = [actor1,actor2]

myMovie.language = 'EN'
myMovie.plataforma = 'Netflix'
myMovie.isMCU = false
myMovie.mainCharacterName = 'Turkish'
myMovie.producer = 'Ska Films'
myMovie.distributor = 'Columbia Pictures'
myMovie.actors = cast
myMovie.actors.push(actor3)
myMovie.director = director;
myMovie.writer = director

myMovie.printAll()