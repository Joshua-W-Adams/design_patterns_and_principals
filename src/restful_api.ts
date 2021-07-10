/*!
 * RESTful API Example
 */

/// TODO - must adhere to openAPI spec?

/* ============================== Import Modules ============================ */

import express from 'express';

/* ================================ Variables =============================== */

const PORT = process.env.PORT || 8080;
const app = express();

/* ============================= Private Methods ============================ */

/// n/a

/* ============================== Public Methods ============================ */

/// middleware configuration
/// parse request bodys from text to json
app.use(express.json());

/// Check for authentication on all requests
/// app.use(isAuthenticated)

/// Configure express.js to serve static files.
/// i.e. all files in directories specified below.
// app.use('/', express.static(__dirname));

app.listen(PORT, () => {
    console.log(`express server running on http://localhost:${PORT}`);
})

/// Home page
app.get('/', (req, res) => {
    return res.send('Hello World');
})

/// Sample CRUD operations on shapes API

/// Read request
app.get('/shapes/:id', (req, res) => {
    const { id } = req.params;
    /// check for errors
    if (!id) {
        return res.status(404).send('Please provide a valid shape id');
    }
    /// escape any user parameters if used to generate SQL

    /// return response
    return res.send(`id: ${id} corresponds to shape ...`);
})

/// Create Request
app.post('/shapes/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send('Please provide a valid shape id');
    }
    return res.send(`New shape with id: ${id} added successfully`);
})

/// Update request
app.put('/shapes/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send('Please provide a valid shape id');
    }
    return res.send(`Shape with id: ${id} updated successfully`);
})


/// Delete Request
app.delete('/shapes/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send('Please provide a valid shape id');
    }
    return res.send(`New shape with id: ${id} deleted successfully`);
})

/* =========================== Export Public APIs =========================== */

export default {
    app
}