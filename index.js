'use strict';
var rp = require('request-promise');

var nextEpisode = function(show) {
	show = show.replace(/\s|\./g, '');
	return rp({
		uri: 'https://epguides.frecar.no/show/' + show + '/next/',
		json: true
	});
};

module.exports = nextEpisode;
