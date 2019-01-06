const { Comment, Image } = require('../models');

async function imagesCounter() {
    return await Image.countDocuments();
}

async function commentsConter() {
    return await Comment.countDocuments();
}

async function imageTotalViewCounter() {
    const result = await Image.aggregate([{
        $group: {
            _id: '1',
            viewsTotal: { $sum: '$views' }
        }
    }]);
    if ( result.length > 0 ) {
        return result[0].viewsTotal;
    }
    return 0;
}

async function likesTotalCounter() {
    const result = await Image.aggregate([{
        $group: {
            _id: '1',
            likesTotal: { $sum: '$likes' }
        }
    }]);
    if ( result.length > 0 ) {
        return result[0].likesTotal;
    }
    return 0;
}

module.exports = async () => {
    const results = await Promise.all([
        imagesCounter(),
        commentsConter(),
        imageTotalViewCounter(),
        likesTotalCounter()
    ]);
    return {
        imagenes: results[0],
        comments: results[1],
        views: results[2],
        likes: results[3]
    }
};