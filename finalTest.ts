const rls = require("readline-sync");
const fs = require('fs');
import { Imdb } from "./imdb";
import { Movie } from "./movie";
import { Professional } from "./professional";

///cuando esté hecho el paso 7  hay que llamar a los métodos en vez de usar esto
const data = fs.readFileSync("./imdbBBDD.json", { encoding: "utf8" });

const parsedData = JSON.parse(data);

let myFilms = new Imdb(parsedData.peliculas);

for (let i = 0; i < parsedData.peliculas.length; i++) {
    parsedData.peliculas[i] = new Movie(parsedData.peliculas[i].title, parsedData.peliculas[i].releaseYear,
        parsedData.peliculas[i].nationality, parsedData.peliculas[i].genre)  
}
///

///Arrays que sirven para que el usuario pueda escoger entre las opciones disponibles al preguntar por consola
let filmList:string[] = myFilms.peliculas.map((value) => value.title);
let jobList:string[]=['Actor/Actress','Director','Writer'];
let yesOrNo:string[]=['YES','NO'];
let listAttributes:string[] = ['All the data is correct','Movie','Name', 'Age', 'Retired', 'Nationality', 'Weight', 'Height','Number of oscars', 'Profession'];

///selección de película
console.log('Which film would you like to update? '); //pongo el log antes en vez de meterlo todo en la pregunta porque si no queda raro
let filmIndex = rls.keyInSelect(filmList, 'Please choose one of the options above.'); 
if (filmIndex === -1) {
    console.log("No film selected");
} else {
    console.log("You selected: " + filmList[filmIndex]);
}
///selección de profesión, para luego saber si hay que hacer push en el array de actores o reemplazar el director/guionista
console.log('What kind of professional do you want to include/update?');

let jobIndex = rls.keyInSelect(jobList, 'Please choose one of the options above.'); 

if (jobIndex === -1) {
    console.log("No entry selected");
} else {
    console.log("You selected: " + jobList[jobIndex]);
}

let newProfession:string = jobIndex ==1 ? 'actor':jobList[jobIndex].toLowerCase()

///datos del profesional
let newName:string = rls.question(`Please enter the name of the ${jobList[jobIndex].toLowerCase()} you want to add.\n`);
let newAge:number = parseInt(rls.question(`How old is ${newName}?\n`));
while(isNaN(newAge)){
    newAge = parseInt(rls.question(`The age has to be a number\n`))
} 
console.log(`Is ${newName} retired?`)
let isRetiredIndex:number = rls.keyInSelect(yesOrNo,'Please choose from above');
let newIsRetired:boolean = isRetiredIndex==1;

let newNationality:string = rls.question(`Please enter ${newName}'s nationality\n`)

let newWeight:number = parseInt(rls.question(`Insert ${newName}'s weight\nNOTE: Please use kg\n`))
while(isNaN(newWeight)){
    newWeight = parseInt(rls.question(`The weight has to be a number\n`))
} 

let newHeight:number = parseInt(rls.question(`Insert ${newName}'s height\nNOTE: Please use cm\n`))
while(isNaN(newHeight)){
    newHeight = parseInt(rls.question(`The height has to be a number\n`))
} 
let newOscarsNumber:number = parseInt(rls.question(`Last question, how many oscars does ${newName} have?\n`))
while(isNaN(newOscarsNumber)){
    newOscarsNumber = parseInt(rls.question(`The amount of oscars has to be a number\n`))
} 

console.log(`**********************************`)

///Instanciación de nuevo profesional
let newProfessional = new Professional(newName,newAge,newWeight,newHeight,newIsRetired,newNationality,newOscarsNumber,newProfession)

///Por si hay que corregir algún dato (NOTA: el check index es lo que se mete por consola-1, porque el 0 lo pone para CANCEL)
let checkIndex:number = -1
while (checkIndex != 0 && checkIndex !=10){
    
    ///No sé si showData() de  la clase profesional se podría modificar para incluir el nombre del atributo (en el enunciadono pide esto)
    console.log(`New ${jobList[jobIndex].toLowerCase()} will be added to the film ${filmList[filmIndex]}.\n\n · Name: ${newName}\n · Age: ${newAge}\n · Weight: ${newWeight}\n · Height: ${newHeight}\n · Is retired?: ${yesOrNo[isRetiredIndex]}\n · Nationality: ${newNationality}\n · Number of oscars: ${newOscarsNumber}\n · Profession: ${jobList[jobIndex]}`)

    checkIndex =  rls.keyInSelect(listAttributes, 'Please check the data and select the information you want to correct')
    switch (checkIndex){
        case 1:
            filmIndex = rls.keyInSelect(filmList, 'Please select the film you want to update.');
            break; 
        case 2:
            newName = rls.question(`Please enter the correct name of the ${jobList[jobIndex].toLowerCase()} you want to add.\n`);
            newProfessional.name = newName;
            break;
        case 3:
            newAge = rls.question(`Please enter ${newName}'s correct age?\n`);
            newProfessional.age = newAge;
            break;
        case 4:
            newIsRetired ? console.log('Retired switched from YES to NO') : console.log('Retired switched from NO to YES');
            newIsRetired = !newIsRetired;
            newProfessional.isRetired = newIsRetired;
            break;
        case 5:
            newNationality = rls.question(`Please enter ${newName}'s nationality\n`);
            newProfessional.nationality = newNationality;
            break;
        case 6:
            newWeight = rls.question(`Insert ${newName}'s weight\nNOTE: Please use kg\n`);
            newProfessional.weight = newWeight;
            break;    
        case 7:
            newHeight = rls.question(`Insert ${newName}'s height\nNOTE: Please use cm\n`);
            newProfessional.height = newHeight;
            break;    
        case 8:
            newOscarsNumber =  rls.question(`Please enter the correct amount of oscars\n`);
            newProfessional.oscarsNumber = newOscarsNumber;
            break;
        case 9:
            jobIndex = rls.keyInSelect(jobList, 'Please select the correct profession');
            newProfession = jobIndex ==1 ? 'actor':jobList[jobIndex].toLowerCase();
            newProfessional.profession = newProfession;
            break;
        default:
            checkIndex = 0;
            break;
    }
}


/*
con esto tenemos:
- newProfesional: el obj de clase Professional que queremos añadir (push si es actor, remplazar si es director o writer)
- newProfession o newProfessional.proffesion: actor, director, writer
- filmList[filmIndex] >> myFilms.peliculas[filmIndex]: para sacar la película que queremos actualizar dentro de películas del objeto de clase Imdb
*/