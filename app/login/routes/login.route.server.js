module.exports = function(app)
{
    var userController = require('../controllers/login.controller.server.js');
    app.post('/api/user/login', userController.login);
    app.post('/api/user/signup', userController.signup);
    app.post('/api/user/forgot', userController.forgot);
    app.get('/api/user/reset', userController.reset);
}