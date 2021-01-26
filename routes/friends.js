'use strict';
const express = require('express'),
    router = express.Router();

const friendsArray = require('../db');

    // When we are inside the route, this file is the route. So the root of this file is /friends, so we don't need to say /friends here, we need to just call the root.....
router.get('/', function (req, res) {
    let htmlData = `<ul>`;

    friendsArray.map(function(friend) {
        htmlData += `<li>${friend.name}</li>`;
    })

    htmlData += `</ul>`;

    res.send(htmlData);
});

module.exports = router;