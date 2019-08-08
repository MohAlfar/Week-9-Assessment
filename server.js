const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json('hello');
  });

  app.get('/tasks', (req, res) => {
    res.json(tasks);
  });


  app.get('/tasks', (req, res) => {
    res.json(tasks);
  });


  app.post('/tasks', (req, res) => {
    let newTask = req.body;
    tasks.push(newTask);
    res.json(tasks);
  });

  app.delete('/tasks/title/:id', (req, res) => {
    let id = parseInt(req.params.id);
    tasks.map(elem => {
      if(elem.id === id) {
          delete elem.title;
      }
      return elem;
    });
    res.json(tasks);
  });


  const PORT = 4444;
app.listen(PORT, () => console.log(`Your server ${PORT}`));



const tasks = [
    {
      id: 1,
      title: "food",
      isCompleted: true
    },
    {
      id: 2,
      title: "work",
      isCompleted: false
    },
    {
        id: 3,
        title: "slep",
        isCompleted: false
      }]
