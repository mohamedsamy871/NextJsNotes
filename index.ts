/**
 * to transplie ts file ----> tsc intdex.ts
to transplie ts file with watch : to monitor any changes and perform
 transpilation automatically----->tsc -w index.ts

tsc --init --->to initialize tsconfig file
rootDir:"./src ", ---> to store typescript files into this folder 
outDir:"./dist", to store compiled js files 
you can just write tsc -w -----> to rercomplie all files on saving 

let all:string|number="osama";
you can assign numerical or string value for this variable

in typeScript if you determined previously data type of variable it will never accept other value. 
but if you determined data type as any or left it blank it will 
allow any value type will be assigned to the variable.
** 001-NoImplicitReturn -this option in tsconfig makes compiler to show error incase that 
**there are a possibolity of this function to return a value
002-NoImplicitAny to allow ("any") as a datatype
**003-"...nums" this used to say i have some parameters
that i dont know how many, and allowing finction 
to recieve unlimited number of parameters

**004- {arrayName}.forEach((param)=>res+=param);
interesting foreach syntax as arrow function 

 -->you can create a type like
        --type Buttons={
            right:string,
            down:string
        }
-->also you can inhirih this type 
    --type Last = Buttons&{
        x:boolean
    }

    --after that you can use this type 
    like a function parameter
    function funcationName (btn:Buttons)

-->you can define this type with certain values
that are allowed and other values will not 
be accepted
type nums = 0| 1 | -1;
-so this variable will recieve these values only 

--making a variable or array readonly 
prevents this array to recieve a new value

    --let article:readonly [number,string,bollean]
    = [11,"title",true];
    article.push(100);  will be prevented

-- array destration 
to fill array values into separate variables
const [id,title,published] = article;
    -- if you print id it will give you 11

--type assertions
 "as" {datatype}
to skip parameter whiile calling a function --> just set parameter to undefined
--you can set a default value for a parameter
**/
function showData(name = "Un", age, country) {
return `${name} - ${age} - ${country}` ;
}
console.log(showData(undefined, 40,"Egypt"));

//group of related constants is enum
//enum of numbers,enum of strings, hetrogenious



let myObject: {
    readonly username: string,
    id: number,
    hire ?: boolean,
    skills: {
    one: string,
    two: string
    }

    //hire is optional to assign a vlue or not 
    //readonly cannot re assign 
    // value if it was already has a value

    interface User {
        id: number,
        username: string,
        country: string,
        sayHello():string, //wriring function inside interface
        sayWelcome: ()=>string // writing arrow function 
    }
        let user: User = {
        id: 100,
        username: "Elzero",
        country: "Egypt",
        sayHello() {
        return `Hello ${this.username}` ;
        
        sayWelcome: ()=>{
        return 'Welcome ${user. username}`;
        }


// to extend interface 

interface User {
    id: number;
    username: string;
    country: string;
    
    }
    
    interface Moderator {
    role: string |number;
    
    }
    
    interface Admin extends User,Moderator{
    protect ?: boolean;
}


//the following
class User{
    private username: string;
    protected salary: number;
    msg: () =>string;
    constructor(username: string, salary: number) {
        this.username = username;
        this. salary = salary;
        this.msg = function () {
            return `Hello ${this. username} Your Salary Is ${this. salary}` ;
        }
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}
// can be written as follows
class User{
    msg: () =>string;
    constructor(private username: string, protected salary: number) {
    this.msg = function () {
        return `Hello ${this. username} Your Salary Is ${this. salary}` ;
    }
}
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}