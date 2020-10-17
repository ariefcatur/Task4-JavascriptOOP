class Student {
    constructor({name, age, gender, dateOfBirth, id, hobies}) {
        this.name = name 
        this.age = age 
        this.gender = gender 
        this.dateOfBirth = dateOfBirth 
        this.id = id 
        this.hobies = hobies
        this.list = []

    }

    set studentName(newName) {
        this.name = newName
    }

    set studentAge(newAge) {
        this.age = newAge
    }

    set studentGender(newGender) {
        this.gender = newGender
    }

    set  studentDateOfBirth(newDateOfBirth) {
        this.dateOfBirth = newDateOfBirth
    }

    set studentId(newId) {
        this.id = newId
    }

    set studentHobies(newHoby) {
        this.hobies.push(newHoby) = newHoby
    }

    set studentList(newStudent) {
        this.list.push(newStudent)
    }

    get infoList() {
        return this.list
    }
    // set  removeHoby (newHoby) {
    //     let hobyArray = [];

    //     for (let i = 0; i < this.hobies.length; i++) {
    //         if(this.hobies[i] !== newHoby) {
    //             hobyArray.push(this.hobies[i]) ;
    //         }
    //     }
        
    //     this.hobies = hobyArray
    // }

    get studentInfo() {
        return `${this.name} adalah siswa berumur ${this.age} tahun lahir  pada ${this.dateOfBirth} berjenis kelamin ${this.gender} dengan nomor siswa ${this.id} serta memiliki hobi ${this.hobies}`  
    }
}

// const student = new Student ({
//     name  : nama,
//     age : umur ,
//     gender : umur ,
//     dateOfBirth : ttl ,
//     id : ktp,
//     hobies : hobi
// })
const myFunction = () => {

let nama = document.getElementById("nama").value
let ttl = document.getElementById("ttl").value
let gender = document.getElementById("gender").value
let umur = document.getElementById("umur").value
let ktp = document.getElementById("ktp").value
let hobi = document.getElementById("hobi").value

let student = new Student ({
    name  : nama,
    age : umur ,
    gender : gender ,
    dateOfBirth : ttl ,
    id : ktp,
    hobies : hobi,

})
console.log (student.studentInfo)
document.getElementById("demo").innerHTML = student.studentInfo;
student.studentList;
document.getElementById("student").innerHTML = student.infoList;
}

