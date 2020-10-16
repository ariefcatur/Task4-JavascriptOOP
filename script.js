class Student {
    constructor({name, age, gender, dateOfBirth, nomor, hobies}) {
        this.name = name ;
        this.age = age ;
        this.gender = ""
        this.dateOfBirth = dateOfBirth ;
        this.nomors = nomor ;
        this.hobies = []
    }

    set studentName(newName) {
        this.name = newName
    }

    set studentAge(newAge) {
        this.age = newAge
    }

    set studentGender(newGender) {
        switch(newGender) {
            case "Male" :
                this.gender = newGender
                break;
            case "Female" :
                this.gender = newGender
                break;
            default:
                this.gender = "Unknown"
        }
    }

    set  studentDateOfBirth(newDateOfBirth) {
        this.dateOfBirth = newDateOfBirth
    }

    set studentId(newId) {
        this.nomor = newId
    }

    set studentHobies(newHoby) {
        this.hobies.push(newHoby) 
    }

    set  removeHoby (newHoby) {
        let hobyArray = [];

        for (let i = 0; i < this.hobies.length; i++) {
            if(this.hobies[i] !== newHoby) {
                hobyArray.push(this.hobies[i]) ;
            }
        }
        
        this.hobies = hobyArray
    }

    get studentInfo() {
        return `${this.name} adalah siswa berumur ${this.age} lahir  pada \n
        ${this.dateOfBirth} berjenis kelamin ${this.gender} dengan nomor siswa ${this.id} serta memiliki hobi ${this.hobies}`  
    }
}

const student = new Student ({
    name  : "Artur Pendagron",
    age : 15 ,
    gender : "banci" ,
    dateOfBirth : "17 Agustus 2005" ,
    nomor : 192768,
    hobies : ["belajar", "War", "Politic"]
})