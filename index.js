const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.post("/", (req, res) => {
    res.status(200).send(req.body ? req.body : "No data provided");
});

app.put("/", (req, res) => {
    res.status(200).send(req.body ? req.body : "No data provided");
});

app.delete("/", (req, res) => {
    res.status(200).send(req.body ? req.body : "No data provided")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})