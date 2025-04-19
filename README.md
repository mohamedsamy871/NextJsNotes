# TypeScript Notes

## Transpiling TypeScript Files

- To transpile a TypeScript file:
  ```bash
  tsc index.ts
  ```

- To transpile a TypeScript file with watch mode (automatically transpile on changes):
  ```bash
  tsc -w index.ts
  ```

## Initialize TypeScript Configuration

- To initialize a `tsconfig.json` file:
  ```bash
  tsc --init
  ```

## tsconfig.json Settings

- `rootDir: "./src"`  
  ➝ Store TypeScript files in this folder.

- `outDir: "./dist"`  
  ➝ Store compiled JavaScript files in this folder.

- To recompile all files automatically when saved:
  ```bash
  tsc -w
  ```

---

## Type Annotations in TypeScript

```ts
let all: string | number = "osama";
```

- You can assign either a string or a number value to this variable.

- In TypeScript, if you define a variable with a specific type, it will not accept values of a different type.

- If you declare a variable as `any` or leave it without a type, it will accept values of any type.

---

## tsconfig Compiler Options

- **001 - `noImplicitReturns`**  
  This option makes the compiler show an error if there’s a possibility that a function does not return a value on all code paths.

- **002 - `noImplicitAny`**  
  This option disallows variables to have an implicit `any` type. All variables must have an explicitly defined type.

- **003 -** *(Pending description)*
