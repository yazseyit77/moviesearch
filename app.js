let rp = require('request-promise')
let express = require('express')
let app = express();

app.get('/', (req, res) => {
    res.render('search.ejs')
})

app.get('/res', (req, res) => {
    let query = req.query.movieName
    rp(`https://www.omdbapi.com/?s=${query}&apikey=thewdb`)
        .then(resp => {
            let data = JSON.parse(resp);
            // res.send(data.Search[0])
            res.render('index.ejs', { data })
        })
        .catch(error => res.send(error))
})


app.listen(7000, console.log("Movie app listening on PORT: 7000"));
