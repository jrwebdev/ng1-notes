var request = require('request');

var REPO_URL = 'https://api.github.com/repos/jrwebdev/ng1-notes/releases';

var options = {
    url: REPO_URL,
    headers: {
        'User-agent': 'request'
    }
};

module.exports = function(pluginConfig, config, cb) {

    request(options, function(err, res, body) {

        body = JSON.parse(body);

        var lastRelease = body[0].tag_name;

        var match = lastRelease.match(/v([0-9]+\.[0-9]+\.[0-9]+)/);

        cb(null, {version: match[1]});

    });

};

