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
        return new Imdb(parsedData);
    }

}
