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
 * 001-NoImplicitReturn -this option in tsconfig makes compiler to show error incase that 
there are a possibolity of this function to return a value
002-NoImplicitAny to allow ("any") as a datatype
003






**/