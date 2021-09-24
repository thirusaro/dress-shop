import express from 'express';

const app = express();
const port = 5000;

const person: person = { name: 'saravana', age: 33 };

app.get('/', (req, res) => {
  res.send('Hello World!' + person.name);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

interface person {
  name: string;
  age: number;
}
