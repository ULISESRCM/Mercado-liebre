const express = require ("express")
const app =express()
const port = 3000
const path = require('path');



app.use( express.static('public'));
app.use('/images', express.static(__dirname +'/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views/Home.html'))
});
console.log(__dirname)

app.listen(port, ()=>console.log(`servidor levantado en el puerto${port}`)
)

