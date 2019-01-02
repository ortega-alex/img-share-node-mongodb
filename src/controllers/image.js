const ctrl = {};

ctrl.index = (req, res) => {
    res.send('Index image');
}

ctrl.create = (req, res) => {
    res.send('create image');
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