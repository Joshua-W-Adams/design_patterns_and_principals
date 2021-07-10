/*!
 * npm Entry File
 * (c) 2020 Joshua Adams
 */

/**
 * app.ts is main application file which will compile all other files.
 * it is exports to dist/app.js. And dist/app.js is the main entry point
 * for the application as defined by the "main" property in the package.json
 * file. This means other packages that "require", "import" etc. this one
 * will refer to said file.
 */

import restfulApi from './restful_api';

console.log(restfulApi.app);