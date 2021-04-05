/*!
 * Express.js web server
 * Simple web server running a sample RESTful API
 * (c) 2021 Joshua Adams
 */

/* ============================== Import Modules ============================ */

import express from 'express';
import fs from 'fs';
import path from 'path';

/* ================================ Variables =============================== */

const PORT = process.env.PORT || 8080;
const app = express();

/* ================================ REST API ================================ */

/// add middleware for express server to parse text body to json
app.use(express.json());

/// TODO - must adhere to openAPI spec?

app.listen(PORT, () => {
    return console.log(`its alive on http://localhost:${PORT}`);
});

app.get('/', (_, res) => {
    // var filename = '/index.html',
    //     filepath = __dirname;
    // return _getFile(filename, filepath, res);
    return res.send('Hello World');
});

/// Configure express.js to serve static files.
/// i.e. all files in directories specified below.
// app.use('/', express.static(__dirname));

/// sample REST API
app.post('tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.send({ message: 'we need a logo' });
    }

    res.send(`${id} has the logo: ${logo}`);
})

/* ============================= Private Methods ============================ */

// function _getFile(filename: string, filepath: string, res: any) {
//     // get file extension
//     let ext: string = path.extname(filename);
//     // list of valid file extensions that can be returned to the client.
//     let validExtensions: any = {
//         ".html": "text/html",
//         ".js": "application/javascript",
//         ".css": "text/css",
//         ".txt": "text/plain",
//         ".jpg": "image/jpeg",
//         ".gif": "image/gif",
//         ".png": "image/png",
//         ".woff": "application/font-woff",
//         ".woff2": "application/font-woff2"
//     };
//     // MIME = media / content type.
//     let mimeType: string = validExtensions[ext];
//     var validMimeType: boolean = (mimeType != undefined);
//     if (validMimeType) {
//         // Reads the entire contents of a file and outputs as a text string
//         fs.readFile(filepath + filename, function (err, contents) {
//             if (!err) {
//                 res.setHeader("Content-Length", contents.length);
//                 res.setHeader("Content-Type", mimeType);
//                 // 200 = http OK code
//                 res.statusCode = 200;
//                 // send the file contents to the client
//                 res.end(contents);
//             } else {
//                 // 404 = file not found error
//                 res.writeHead(404);
//                 res.end();
//             }
//         });
//     } else {
//         // 415 = Unsupported Media Type
//         res.writeHead(415);
//         res.end();
//     }
// }

/* ============================== Public Methods ============================ */

/// n/a

/* =========================== Export Public APIs =========================== */
export default {
    app
}