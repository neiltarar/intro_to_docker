# React-TypeScript Cheatsheet

This is a simple cheatsheet for developers that are starting to use TypeScript with React for the first time. This is just a small entry point and does not have a comprehensive introduction to TypeScript. Official documentation for ***[TypeScript](https://www.typescriptlang.org/docs/handbook/react.html)*** will be a good starting point.

<br>

### Virtual Sandboxes to practice Type-Script 

---

You can practice on these cloud setups:

- [CodeSandbox](https://codesandbox.io/s/react-ts?utm_source=dotnew) - A cloud IDE 
- [Stackblitz](https://stackblitz.com/edit/react-typescript-base?file=index.tsx) - A cloud IDE

<br>

### Creating a React-TypeScript App

---

You can create a new React App using templates

`$ npx create-react-app my-app --template typescript`

<br>

### Start your app

---

`$ npm run start` or `$ npm start`

<br>

#### Basic Prop Types Examples:

A list of TypeScript types you will likely use in a React+TypeScript app:

<details><summary><b>Prop Type Examples:</b></summary>

```tsx
interface AppProps {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status: "waiting" | "success";
  /** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
  obj: object;
  obj2: {}; // almost the same as `object`, exactly the same as `Object`
  /** an object with any number of properties (PREFERRED) */
  obj3: {
    id: string;
    title: string;
  };
  /** array of objects! (common) */
  objArr: {
    id: string;
    title: string;
  }[];
  /** a dict object with any number of properties of the same type */
  dict1: {
    [key: string]: MyTypeHere;
  };
  dict2: Record<string, MyTypeHere>; // equivalent to dict1
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function;
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void;
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void;
  /** function type syntax that takes an event (VERY COMMON) */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  /** an optional prop (VERY COMMON!) */
  optional?: OptionalType;
};
```

Notice we have used the TSDoc `/** comment */` style here on each prop. You can and are encouraged to leave descriptive comments on reusable components. For a fuller example and discussion, see our [Commenting Components](https://react-typescript-cheatsheet.netlify.app/docs/advanced/misc_concerns/#commenting-components) section in the Advanced Cheatsheet.

</details>

---

<br>

#### Functional Components

These can be written as normal functions that take a `props` argument and return a JSX element.

<details><summary><b>Functional Component Props:</b></summary>

```tsx
// Declaring type of props 
type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
const App = ({ message }: AppProps) => <div>{message}</div>;

// you can choose annotate the return type so an error is raised if you accidentally return some other type
const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

// you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
const App = ({ message }: { message: string }) => <div>{message}</div>;
```

</details>

---