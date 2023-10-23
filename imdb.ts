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

    static obtenerInstanciaIMDB(nombreFichero:string): Imdb {
        const data = fs.readFileSync(`${nombreFichero}.json`, { encoding: "utf8" });
        const parsedData = JSON.parse(data);
        for (let i = 0; i < parsedData.length; i++) {
            parsedData[i] = new Movie(parsedData[i].title, parsedData[i].releaseYear,
            parsedData[i].nationality, parsedData[i].genre)
        }
        return new Imdb(parsedData);
    }

}
