'use strict';
var nextEpisode = require('./index');

var show = process.argv.slice(2).join(' ');

nextEpisode(show).then(function (data) {
	console.log('Next episode: ' + data.episode.title);
	console.log('Release date: ' + data.episode.release_date);
	console.log('Season: ' + data.episode.season);
	console.log('Episode: ' + data.episode.number);
}).catch(function (err) {
	console.log('Show not found or no data on next episode');
});
