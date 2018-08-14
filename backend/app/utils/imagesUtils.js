const sharp = require('sharp');

const getExtension = (image) => {
  return image.name.slice(image.name.lastIndexOf('.') + 1);
}

const imageExtensionInvalid = (extensions, image) => {
  return extensions.indexOf(getExtension(image)) === -1;
}

const idInvalid = (id) => {
  return id.length !== 12 && id.length !== 24;
}

const generateImageFilename = (image) => {
  const date = new Date();
  const dateTime = date.getTime();
  const extension = getExtension(image);
  return dateTime + '_' + Math.round(Math.random() * dateTime) + '.' + extension;
}

const createImages = (image) => {
  return new Promise(async (next, reject) => {
  	const newImageFile = generateImageFilename(image);
  	const imageExtension = getExtension(image);

  	try {
  	  switch(imageExtension) {
  	  	case 'png':
  	      await sharp(image.path).resize(200).png({ compressionLevel: 6 }).toFile('./public/images/200/' + newImageFile);
  	      await sharp(image.path).resize(800).png({ compressionLevel: 6 }).toFile('./public/images/800/' + newImageFile);
  	      break;
  	    case 'gif':
  	      await sharp(image.path).resize(200).toFile('./public/images/200/' + newImageFile);
  	      await sharp(image.path).resize(800).toFile('./public/images/800/' + newImageFile);
  	      break;
  	    default:
  	      await sharp(image.path).resize(200).jpeg({ quality: 60 }).toFile('./public/images/200/' + newImageFile);
  	      await sharp(image.path).resize(800).jpeg({ quality: 60 }).toFile('./public/images/800/' + newImageFile);  	    
  	  }

  	  next(newImageFile);
    } catch(err) {
      console.log(err);
      reject(err);
    }
  });
}

module.exports = { imageExtensionInvalid, idInvalid, createImages };