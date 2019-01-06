const Comment = require('./comment');
const Stats = require('./stats');
const Images = require('./images');

module.exports = async viewModel => {
    const result = await Promise.all([
        Stats(),
        Images.popular(),
        Comment.newest()
    ])
    viewModel.sidebar = {
        stats: result[0],
        popular: result[1],
        comments: result[2]
    }
    return viewModel;
}