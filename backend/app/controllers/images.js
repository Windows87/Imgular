const express = require('express');
const mongoose = require('mongoose');
const Image = require('../models/Image');
const imagesUtils = require('../utils/imagesUtils');

const ObjectId = mongoose.Types.ObjectId;
const imagesRouter = express.Router();
const idInvalid = imagesUtils.idInvalid;
const imageExtensionInvalid = imagesUtils.imageExtensionInvalid;
const createImages = imagesUtils.createImages;

const getImages = (initial, finish) => {
  return new Promise((next, reject) => {
    initial = Number(initial);
    finish = Number(finish); 

  	Image.find().sort({created_date: -1}).limit(finish).skip(initial).exec((err, results) => {
  	  if(err)
  	  	return reject(err);

  	  next(results);
  	});
  });
}

imagesRouter.get('/images/:initial/:finish', async (req, res) => {
  const { initial, finish } = req.params;

  try {
  	const images = await getImages(initial, finish);
  	res.json(images);
  } catch(error) {
  	res.status(400).json({ error: 'Error on get Images' });
  }
});

imagesRouter.get('/image/:id', async (req, res) => {
  const { id } = req.params;

  if(idInvalid(id))
    return res.status(400).json({ error: 'Image id invalid' });

  const _id = ObjectId(id);

  try {
    const image = await Image.findOne({ _id });
    res.json({ image });
  } catch(err) {
    res.status(400).json({ error: 'Error on get Image' });
  }
});

imagesRouter.post('/write/', async (req, res) => {
  const { title } = req.fields;
  const { image } = req.files;
  
  if(!title)
    return res.status(400).json({ error: 'Missing title' });

  if(await Image.findOne({ title }))
    return res.status(400).json({ error: 'Title already exists' });

  if(!image)
    return res.status(400).json({ error: 'Missing image' });

  if(imageExtensionInvalid(['jpg', 'jpeg', 'png', 'gif'], image))
    return res.status(400).json({ error: 'Image extension invalid' });

  try {
    const image_name = await createImages(image);
    const newImage = await Image.create({ image_name, title });
    res.json({ newImage });
  } catch (err) {
    res.status(400).json({ error: 'Error on create Image' });
  }
});

module.exports = imagesRouter;