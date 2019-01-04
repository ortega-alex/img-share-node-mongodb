const ctrl = {};
const path = require('path');
const { randowNumber } = require('../helpers/libs');
const fs = require('fs-extra');
const { Image } = require('../models');

ctrl.index = (req, res) => {
    res.send('Index image');
}

ctrl.create =  (req, res) => {
    const saveImage = async () => {
        const imgUrl = randowNumber();
        const images = await Image.find({ filename: imgUrl });
        if (images.length > 0) {
            saveImage();
        } else {
            const imageTempPath = req.file.path;
            const ext = path.extname(req.file.originalname).toLowerCase();
            const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.git') {
                await fs.rename(imageTempPath, targetPath);
                const newImg = new Image({
                    title: req.body.title,
                    filename: imgUrl + ext,
                    description: req.body.description
                });
                const imageSave = await newImg.save();
                //res.redirect('/images');
                res.send('create image');
            } else {
                await fs.unlink(imageTempPath);
                res.status(500).json({ error: 'Only images are allawed' });
            }
        }
    };
    saveImage();
}

ctrl.like = (req, res) => {
    res.send('remove image');
}

ctrl.comment = (req, res) => {
    res.send('Index page');
}

ctrl.remove = (req, res) => {
    res.send('Index page');
}

module.exports = ctrl;