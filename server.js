 /*********************************************************************************
* WEB700 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
* of this assignment has been copied manually or electronically from any other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: Miracle Uchime Student ID: 133177238 Date: November 02, 2024
*
* Online (Vercel) Link: ________________________________________________________
*
********************************************************************************/
 const express = require('express');
 const path = require('path');
 const collegeData = require('./collegeData');
 
 const app = express();
 const PORT = process.env.PORT || 8080;
 
 // Middleware
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, 'public')));
 
 // Routes
 app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/home.html')));
 app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views/about.html')));
 app.get('/students/add', (req, res) => res.sendFile(path.join(__dirname, 'views/addStudent.html')));
 
 app.post('/students/add', (req, res) => {
     collegeData.addStudent(req.body)
         .then(() => res.redirect('/students'))
         .catch(err => res.status(500).send("Error: Unable to add student"));
 });
 
 // Initialize the data and start the server
 collegeData.initialize()
     .then(() => {
         app.listen(PORT, () => {
             console.log(`Server running at http://localhost:${PORT}`);
         });
     })
     .catch(err => {
         console.log("Failed to initialize data: " + err);
     });

app.post('/students/add', (req, res) => {
    addStudent(req.body)
        .then(() => res.redirect('/students'))
        .catch(err => res.status(500).send("Error: Unable to add student"));
});
 
 app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/home.html"));
 });
 
 app.get("/about", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/about.html"));
 });
 
 app.get("/htmlDemo", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/htmlDemo.html"));
 });
 
 app.get("/students", (req, res) => {
     if (req.query.course) {
         collegeData.getStudentsByCourse(req.query.course)
             .then(data => res.json(data))
             .catch(err => res.json({ message: err }));
     } else {
         collegeData.getAllStudents()
             .then(data => res.json(data))
             .catch(err => res.json({ message: err }));
     }
 });
 
 app.get("/student/:num", (req, res) => {
     collegeData.getStudentByNum(req.params.num)
         .then(data => res.json(data))
         .catch(err => res.json({ message: err }));
 });
 
 app.get("/courses", (req, res) => {
     collegeData.getCourses()
         .then(data => res.json(data))
         .catch(err => res.json({ message: err }));
 });
 
 app.get("/tas", (req, res) => {
     collegeData.getTAs()
         .then(data => res.json(data))
         .catch(err => res.json({ message: err }));
 });
 
 app.use((req, res) => {
     res.status(404).send("Page Not Found");
 });
 
 app.get('/students/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/addStudent.html'));
});

 collegeData.initialize()
     .then(() => {
         app.listen(HTTP_PORT, () => {
             console.log(`Server listening on port ${HTTP_PORT}`);
         });
     })
     .catch(err => {
         console.error(`Failed to start server: ${err}`);
     });
