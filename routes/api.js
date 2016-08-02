var express = require('express');
var router = express.Router();

var md5 = require('js-md5');

var users = {};

router.post('/register', function(req, res, next) {
    var userID = req.body.userID;
    var deviceID = req.body.deviceID;
    var now = (new Date()).getTime();
    var token = md5("" + now + userID + deviceID);

    var user = users[userID] || {userID: userID};
    console.log("users");
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
