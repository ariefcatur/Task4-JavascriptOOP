let collection = [];
let sysID = 0;

class Student {
    constructor({sysID,name, age, gender, dateOfBirth, id}) {
        this.sysID = sysID
        this.name = name 
        this.age = age 
        this.gender = gender 
        this.dateOfBirth = dateOfBirth 
        this.id = id 
        this.hobies = []
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
        this.hobies.push(newHoby)
    }

    set removeStudentHobbies(hobbyToBeRemoved){
        let locArray = [];
        for(let i = 0; i < this.hobies.length; i++){
            if(this.hobies[i] != hobbyToBeRemoved){
                locArray.push(this.hobies[i]);
            }
        }
        this.hobies = locArray;
    }

    get studentHobi(){
        return this.hobies
    }

    get studentInfo() {
        return `${this.name} adalah siswa berumur ${this.age} tahun lahir  
        pada ${this.dateOfBirth} berjenis kelamin ${this.gender} dengan nomor siswa ${this.id} 
        serta memiliki hobi ${this.hobies.join()}`  
    }
}

const formSubmit = () => {
    let nama = document.getElementById("nama").value;
    let ttl = document.getElementById("ttl").value;
    let gender = document.getElementById("gender").value;
    let umur = document.getElementById("umur").value;
    let ktp = document.getElementById("ktp").value;

    let student = new Student ({
        sysID : sysID,
        name  : nama,
        age : umur,
        gender : gender ,
        dateOfBirth : ttl ,
        id : ktp
    });

    // set hobbies
    let hobby = document.getElementById("hobi").value;
    if (hobby.split(',') != undefined){
        let splitter = hobby.split(',');
        for (i=0;i<splitter.length;i++) {
            student.studentHobies = splitter[i].trim();
        }
    }

    collection.push(student);
    resetAll();
    addDOM(student);
    sysID++;
}

const studentForm = () =>{
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }
}


const resetAll = () => {
    document.getElementById("nama").value = '';
    document.getElementById("ttl").value = '';
    document.getElementById("umur").value = '';
    document.getElementById("ktp").value = '';
    document.getElementById("hobi").value = '';
}


const addDOM = (obj) => {
    var x = `
    <tr>
        <td>${obj.sysID+1}</td>
        <td>${obj.name}</td>
        <td>${obj.dateOfBirth}</td>
        <td>${obj.age}</td>
        <td>${obj.gender}</td>
        <td>${obj.id}</td>
        <td>
            <table>
                <tbody id="bodyTable">`;

for(i=0;i<obj.hobies.length;i++){
    x += `
        <tr>
            <td>
                ${obj.hobies[i]}
                <button class="btn btn-danger" onclick="deleteOneHobby(${obj.sysID},'${obj.hobies[i]}',this)">
                    <i class="ri-delete-bin-2-fill"></i> Delete
                </button>
            </td>
        </tr>
    `;
}
                    

x += `
                </tbody>
            </table>
        </td>
    </tr>`;

    $('#bodyTable').append(x);
}

const deleteOneHobby = (headID, string, element) => {    
    let getObj = collection.find((item) => item.sysID === headID);

     // let getObj;
    // for (i=0;i<collection.length;i++){
    //     if(collection[i].sysID == headID){
    //         getObj = collection[i];
    //     }
    // }

    let student = new Student (getObj);
    for(i=0;i<getObj.hobies.length;i++){
        student.studentHobies = getObj.hobies[i];
    }

    student.removeStudentHobbies = string;

    // replace
    let findIndex = collection.findIndex((item) => item.sysID === headID);
    collection[findIndex] = student;

    // remove current el
    $(element).parent().parent().remove();

   
}