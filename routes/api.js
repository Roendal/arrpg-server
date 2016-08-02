var express = require('express');
var router = express.Router();

var md5 = require('js-md5');

var users = {};

/* GET users listing. */
router.get('/register', function(req, res, next) {
    var userID = req.query.userID;
    var deviceID = req.query.deviceID;
    var now = (new Date()).getTime();
    var token = md5(userID + deviceID + now);

    var user = users[userID] || {userID: userID};

    console.log(users);

    user.deviceID = deviceID;
    user.loginTimestamp = now;
    user.token = token;
    users[userID] = user;

    res.send({
        result: "success",
        token: token
    });
});

router.post('/register', function(req, res, next) {
    var userID = req.query.userID;
    var deviceID = req.query.deviceID;
    var now = (new Date()).getTime();
    var token = md5(userID + deviceID + now);

    var user = users[userID] || {userID: userID};

    console.log(users);

    user.deviceID = deviceID;
    user.loginTimestamp = now;
    user.token = token;
    users[userID] = user;

    res.send({
        result: "success",
        token: token
    });
});

module.exports = router;
