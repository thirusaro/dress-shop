import express from 'express';

const app = express();
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

interface person{
  name: string,
  age: number
}

let person: person = { name: "saravana", age: 23 }

