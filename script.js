//Task1
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.technologies = [];
//         this.status = "Junior";
//     }

//     setTechnologies (technologies) {
//         this.technologies = [...this.technologies, ...technologies];
//     }
//     setNewStatus(newStatus) {
//         this.status = newStatus;
//     }
// }
// const student = new Student("Maxim", 20);
// student.setTechnologies(["HTML", "CSS", "JavaScript"]);
// student.setNewStatus("Middle");
// console.log(student);

//Task2
// class Person {
//     constructor(name,age) {
//        this.name = name;
//        this.age = age;
//     }
//     compareAge(newPerson){
//         if(this.name < newPerson.age){
//             alert(`${this.name} is yonger then${newPerson.name}`);
//         }else{
//             alert(`${this.name} i older than ${newPerson.name}`);
//         }
//     }
// }

// let person1 = new Person("sara", 23);
// let person2 = new Person("fidan", 19);

// person1.compareAge(person2);