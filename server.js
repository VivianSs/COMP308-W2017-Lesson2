const connect = require('connect');

const app = connect();



app.listen(3000);
console.log('Server running at http://localhost:3000/');

app.use('/hello', (req, res, next) =>{
  res.setHeader('Content-Type', 'text/plain');
  res.end("hello world");
  next();
});

app.use('/', (req, res, next) =>{
  res.setHeader('Content-Type', 'text/plain');
  res.end("Welcome");
  next();
});