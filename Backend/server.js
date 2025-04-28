const express = require("express");
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, '..')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/desings/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../portfolio website/html/dynamic-images.html'));
});







app.listen(3100, ()=>{
    try {
        console.log(`Server is running at http://localhost:3100`);
        
    } catch (error) {
        console.log(error.message);
        process.exit(1)
        
    }
})



