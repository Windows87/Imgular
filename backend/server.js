const express = require('express');
const formidable = require('./app/middleware/formidable-middleware');
const cors = require('cors');

require('events').EventEmitter.defaultMaxListeners = 30;

const imagesController = require('./app/controllers/images'); 

const app = express();

app.use(cors());
app.use(formidable);
app.use(express.static('public'));

app.use('/api/', imagesController);

app.listen(3001, () => {
  console.log('Port running on port 3001');
});