const express= require("express");
const bodyParser = require("body-parser");
const query = require("./db/movie");
const auth = require('./services/authenticate');

const app= express();
app.use(bodyParser.json());

const port =3000;

process.env.SECRET_KEY = "$2b$08$XX615l/tHyDneJ.A1CJZZu1CSo6RAEJyEReozQC.yoObjKcOCxkPe";

// Get all movies
app.get("/api/movies", query.getAllMovies)

// Get movie by id
app.get("/api/movies/:id", query.getMovieById)

//insert new movie
app.post("/api/movies", query.addMovie);

//delete movie
app.delete("/api/movies/:id", query.deleteMovie);


app.put("/api/movies/:id", query.updateMovie);

// Route for login
app.post("/login", auth.login);

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})

module.exports = app;