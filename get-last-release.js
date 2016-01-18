var request = require('request');

var REPO_URL = 'https://api.github.com/repos/jrwebdev/ng1-notes/tags';

var options = {
    url: REPO_URL,
    headers: {
        'User-agent': 'request'
    }
};

module.exports = function(pluginConfig, config, cb) {

    request(options, function(err, res, body) {

        var releases = JSON.parse(body);
        var latest = releases[0];
        var version = latest.name.match(/v([0-9]+\.[0-9]+\.[0-9]+)/)[1];

        cb(null, {version: version, gitHead: latest.commit.sha});

    });

};

