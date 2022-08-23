const express = require('express');
let axios = require('axios');
let app = express();

app.use(express.json());
let arr = []
app.post('/', async function (req, res, next) {
  try {

    let results = req.body.developers.map(d => {
      return axios.get(`https://api.github.com/users/${d}`);

    });
    let result = await Promise.all(results)
    res.send(JSON.stringify(result.map(el => ({ 'name': el.data.name, 'bio': el.data.bio }))))
  } catch (err) {
    next(err);
  }
});

app.listen(3000, function () {
  console.log('App on port 3000');
})
