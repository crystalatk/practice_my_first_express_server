'use strict';
const express = require('express'),
    router = express.Router();

const friendsArray = require('../db');

    // When we are inside the route, this file is the route. So the root of this file is /friends, so we don't need to say /friends here, we need to just call the root.....
router.get('/', (req, res) => {
    let htmlData = `<ul>`;

    friendsArray.map((friend) => {
        htmlData += `<li><a href="./friends/${friend.handle}">${friend.name}</a></li>`;
    })

    htmlData += `</ul>`;

    res.send(htmlData);
});

router.get('/:handle', (req, res) => {
    const { handle } = req.params;
    const friend = friendsArray.find((friend) => {
        if (friend.handle === handle) {
            return friend;
        } 
    });
    if (friend) {
        res.send(`<h1>Hi ${friend.name}!</h1>`);
    } else {
        res.send(`No friend with the handle: ${handle} was found. :(`)
    }
})

module.exports = router;