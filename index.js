const express = require('express')
const app = express()
app.use(express.json());
const port = 8080

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body ? req.body : "No data provided");
});

app.put("/", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body ? req.body : "No data provided");
});

app.delete("/", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body ? req.body : "No data provided")
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = app;