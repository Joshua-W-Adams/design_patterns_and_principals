  
/*!
 * TypeScript Module Boilerplate
 * (c) 2021 Joshua Adams
 */

/* ============================== Import Modules ============================ */

// import * as module1 from 'some-module-1';
// import { function1, function2 } from './dist/some-module-2';

/* ================================ Variables =============================== */

// let someVariable: Number = 0;

/* ============================= Type Definitions =========================== */

class someClass {
  // define properties
  prop1: Number;
  prop2: String;
  // configure class constructor
  constructor(prop1: Number, prop2: String) {
    // set property values
    this.prop1 = prop1;
    this.prop2 = prop2;
  };
  
}

/* ============================= Private Methods ============================ */

function _somePrivateMethod() {
  // Code goes here...
  return;
}

/* ============================== Public Methods ============================ */

function doSomething() {
  _somePrivateMethod();
  // Code goes here...
  return;
}

function init(options: Object) {
  console.log(options);
  // Code goes here...
  return;
}

/* =========================== Export Public APIs =========================== */

export default {
  init
  , doSomething
  , someClass
};