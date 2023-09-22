console.log("Hello World");

var a = 100;
a = "Hello";

let b = 200;
const c = 300;

student = {
    sid: 100,
    fnm: "Pritesh",
    lnm: "Patel",
    course: "MADT"
};

student2 = { ...student };

console.log({
    sayHello() {
        console.log("Hello");
    }
});

const { sid: student_id, fnm, lnm } = student;

eid = 1;
enm = "Pritesh";
emp = {
    eid,
    enm,
}

console.log(emp)


console.log([]);