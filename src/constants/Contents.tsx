import useStateImge from '../assets/useState-example.png'
import useEffectImge from '../assets/react-img/useEffectExapmple.png'
import varExample from '../assets/javascript-img/var-example.png'
import letExample from '../assets/javascript-img/let-example.png'
import constExample from '../assets/javascript-img/const-example.png'
import dataTypesNumer from '../assets/javascript-img/datatype-numer-exmple.png'
import { DBERROR } from '../enums/DbError'

export const modelContentsDetails = {
   basic: `React.js, commonly referred to as React, is an open-source JavaScript library primarily used for building user interfaces (UIs) for single-page web applications. It was developed by Facebook and released in 2013. React allows developers to create interactive UI components that can efficiently update and render based on changes in application state.`,
   syntax: {
      Variables: {
         var: {
            a: `Variables declared with var are function-scoped, meaning they are only available within the function they are declared in, or globally if declared outside any function`,
            b: `var declarations are hoisted to the top of their scope during execution, which means you can access them before they are declared.`,
            c: `They can be re-declared and updated within their scope.`,
            example:varExample
         },
         let: {
            a: `Introduced in ES6 (ECMAScript 2015), let allows block-scoping, meaning it's confined to the nearest enclosing block (e.g., {}), function, or global scope if outside any block`,
            b: `let declarations are also hoisted but not initialized. You'll get a ReferenceError if you try to access them before declaration.`,
            c: `They can be reassigned but not re-declared within the same scope.`,
            example:letExample
         },
         const: {
            a: `Also introduced in ES6, const also provides block-scoping like let.`,
            b: `Variables declared with const must be initialized with a value, and once assigned, their value cannot be changed.`,
            c: `They behave like immutable variables. const declarations are also hoisted but not initialized, similar to let.`,
            example:constExample
         },
       
      },
      DataTypes: {
         number:{
            a:DBERROR.comments,
            b:DBERROR.comments,
            c:DBERROR.comments,
            example:dataTypesNumer
         }
      }
   },

   react: {
      hooks: `useState, useEffect`,
      useState: `This hook allows you to add state variables to functional components. It returns an array with the current state value and a function to update that value.`,

      useStateExample: useStateImge,
      useEffect: `This hook allows you to perform side effects in function components. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount`,

      useEffectExample: useEffectImge,
   },

}