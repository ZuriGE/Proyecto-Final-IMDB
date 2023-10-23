import { Movie } from "./movie";

const fs = require('fs');

export class Imdb {

    public peliculas: Movie[];

    constructor(peliculas: Movie[]) {
        this.peliculas = peliculas;
    }

    escribirEnFicheroJSON(nombreFichero: string) {
        let stringified = JSON.stringify(this.peliculas);
        fs.writeFileSync(`${nombreFichero}.json`, stringified);
    }

    obtenerInstanciaIMDB(nombreFichero:string): Imdb {
        const data = fs.readFileSync(`${nombreFichero}.json`, { encoding: "utf8" });
        const parsedData = JSON.parse(data);
        for (let i = 0; i < parsedData.peliculas.length; i++) {
            parsedData.peliculas[i] = new Movie(parsedData.peliculas[i].title, parsedData.peliculas[i].releaseYear,
                parsedData.peliculas[i].nationality, parsedData.peliculas[i].genre)
            
        }
        return new Imdb(parsedData.peliculas);
    }

}
