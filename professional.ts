export class Professional {

    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor(name: string, age: number, weight: number, height: number,
        isRetired: boolean, nationality: string, oscarsNumber: number,
        profession: string) {
            this.name = name;
            this.age = age;
            this.weight = weight;
            this.height = height;
            this.isRetired = isRetired;
            this.nationality = nationality;
            this.oscarsNumber = oscarsNumber;
            this.profession = profession;
    }
    
    public showData(): string {
        const keys = Object.keys(this);
        return keys.map((key) => `${key}: ${this[key]}`).join('\n');
    }

}
