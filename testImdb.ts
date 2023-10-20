import { Movie } from "./movie";
import { Professional } from "./professional";
import { Imdb } from "./imdb";

const fs = require('fs');

/*
TESTS ABAJO DEL TODO
*/

///SNATCH
let myMovie0 = new Movie('Snatch',2000,'UK','black comedy');

let director0 = new Professional('Guy Ritchie', 54, 84, 183, false, 'British', 0, 'director, writer');
let actor01 = new Professional('Jason Statham', 55, 77, 175, false, 'British', 0, 'actor');
let actor02 = new Professional('Brad Pitt', 59, 78, 180, false, 'American', 2, 'actor');
let actor03 = new Professional('Vinnie Jones', 58, 93, 185, true, 'British', 0, 'actor');
let cast0:Professional[] = [actor01,actor02,actor03];

myMovie0.language = 'EN';
myMovie0.plataforma = 'Netflix';
myMovie0.isMCU = false;
myMovie0.mainCharacterName = 'Turkish';
myMovie0.producer = 'Ska Films';
myMovie0.distributor = 'Columbia Pictures';
myMovie0.actors = cast0;
myMovie0.director = director0;
myMovie0.writer = director0;

///La vida de Pi
let myMovie1 = new Movie('La vida de Pi', 2012, 'USA', 'Aventura, Drama');
let actor1_1 = new Professional('Suraj Sharma', 29, 77, 175, false, 'Indian', 0, 'actor');
let actor1_2 = new Professional('Irrfan Khan', 53, 68, 183, false, 'Indian', 1, 'actor');
let director1 = new Professional('Ang Lee', 67, 72, 175, false, 'Taiwanese', 2, 'director');
let writer1 = new Professional('David Magee', 60, 75, 180, false, 'American', 0, 'writer');
let cast1: Professional[] = [actor1_1, actor1_2];

myMovie1.language = 'ES';
myMovie1.plataforma = 'Amazon prime';
myMovie1.isMCU = false;
myMovie1.mainCharacterName = 'Pi Patel';
myMovie1.producer = 'Fox 2000 Pictures';
myMovie1.distributor = '20th Century Fox';
myMovie1.actors = cast1;
myMovie1.director = director1;
myMovie1.writer = writer1;

//TROYA
let myMovie2 = new Movie('Troya', 2004, 'USA', 'Acción, Aventura');
let actor2_1 = actor02
let actor2_2 = new Professional('Eric Bana', 53, 80, 188, false, 'Australian', 0, 'actor');
let director2 = new Professional('Wolfgang Petersen', 76, 75, 183, false, 'German', 0, 'director');
let writer2 = new Professional('David Benioff', 51, 70, 180, false, 'American', 0, 'writer');
let cast2: Professional[] = [actor2_1, actor2_2];

myMovie2.language = 'ES';
myMovie2.plataforma = 'Disney +';
myMovie2.isMCU = false;
myMovie2.mainCharacterName = 'Aquiles';
myMovie2.producer = 'Warner Bros. Pictures';
myMovie2.distributor = 'Warner Bros. Pictures';
myMovie2.actors = cast2;
myMovie2.director = director2;
myMovie2.writer = writer2;

//el silencio de los corderos
let myMovie3 = new Movie('El silencio de los corderos', 1991, 'USA', 'Crimen, Drama');
let actor3_1 = new Professional('Jodie Foster', 59, 45, 160, false, 'American', 2, 'actor');
let actor3_2 = new Professional('Anthony Hopkins', 84, 75, 175, false, 'British', 2, 'actor');
let director3 = new Professional('Jonathan Demme', 73, 90, 173, false, 'American', 1, 'director');
let writer3 = new Professional('Ted Tally', 71, 75, 180, false, 'American', 1, 'writer');
let cast3: Professional[] = [actor3_1, actor3_2];

myMovie3.language = 'ES';
myMovie3.plataforma = 'HBO';
myMovie3.isMCU = false;
myMovie3.mainCharacterName = 'Clarice Starling';
myMovie3.producer = 'Orion Pictures';
myMovie3.distributor = 'Metro-Goldwyn-Mayer';
myMovie3.actors = cast3;
myMovie3.director = director3;
myMovie3.writer = writer3;

//Joker
let myMovie4 = new Movie('Joker', 2019, 'USA', 'Crimen, Drama');
let actor4_1 = new Professional('Joaquin Phoenix', 48, 76, 173, false, 'American', 1, 'actor');
let actor4_2 = new Professional('Robert De Niro', 79, 77, 183, false, 'American', 2, 'actor');
let director4 = new Professional('Todd Phillips', 52, 80, 175, false, 'American', 0, 'director, writer');
let cast4: Professional[] = [actor4_1, actor4_2];

myMovie4.language = 'EN';
myMovie4.plataforma = 'Netflix';
myMovie4.isMCU = false;
myMovie4.mainCharacterName = 'Arthur Fleck (Joker)';
myMovie4.producer = 'DC Films';
myMovie4.distributor = 'Warner Bros. Pictures';
myMovie4.actors = cast4;
myMovie4.director = director4;
myMovie4.writer = director4;

//Avengers

let myMovie5 = new Movie('Avengers: Endgame', 2019, 'USA', 'Acción, Aventura');
let actor5_1 = new Professional('Robert Downey Jr.', 57, 78, 174, false, 'American', 0, 'actor');
let actor5_2 = new Professional('Chris Evans', 41, 88, 183, false, 'American', 0, 'actor');
let actor5_3 = new Professional('Scarlett Johansson', 38, 57, 160, false, 'American', 1, 'actor');
let actor5_4 = new Professional('Mark Ruffalo', 55, 76, 173, false, 'American', 0, 'actor');
let actor5_5 = new Professional('Chris Hemsworth', 39, 90, 191, false, 'Australian', 0, 'actor');
let director5 = new Professional('Anthony Russo', 53, 72, 175, false, 'American', 0, 'director');
let writer5 = new Professional('Christopher Markus', 51, 73, 180, false, 'American', 0, 'writer');
let cast5: Professional[] = [actor5_1, actor5_2, actor5_3, actor5_4, actor5_5]

myMovie5.language = 'EN';
myMovie5.plataforma = 'Disney +';
myMovie5.isMCU = true;
myMovie5.mainCharacterName = 'Varios personajes de Marvel';
myMovie5.producer = 'Marvel Studios';
myMovie5.distributor = 'Walt Disney Studios Motion Pictures';
myMovie5.actors = cast5
myMovie5.director = director5;
myMovie5.writer = writer5;

//TEST IMDB

let myFilms = new Imdb([myMovie0,myMovie1,myMovie2,myMovie3,myMovie4,myMovie5])

console.log(myFilms)

myFilms.peliculas.forEach((film)=> film.printAll())

myFilms.peliculas[3].actors.forEach((actor_actriz)=>(console.log(actor_actriz.showData())))

// Lectura/Escritura en Fichero

let myFilmsString = JSON.stringify(myFilms);

fs.writeFileSync("imdbBBDD.json", myFilmsString);

const data = fs.readFileSync("./imdbBBDD.json", { encoding: "utf8" });

const parsedData = JSON.parse(data);

let myFilms2 = new Imdb(parsedData.peliculas);

for (let i = 0; i < parsedData.peliculas.length; i++) {
    parsedData.peliculas[i] = new Movie(parsedData.peliculas[i].title, parsedData.peliculas[i].releaseYear,
        parsedData.peliculas[i].nationality, parsedData.peliculas[i].genre)
    
}

myFilms2.peliculas.forEach((film)=> film.printAll())
myFilms.peliculas[3].actors.forEach((actor_actriz)=>(console.log(actor_actriz.showData())))
