const axios = require('axios');
const util = require('util');
require('dotenv').config();


module.exports = function(channelId) {
  return new Promise((resolve, reject) => {
    axios.default.get('https://www.googleapis.com/youtube/v3/channels', {
      params: {
        part: 'snippet,contentDetails,id',
        forUsername: channelId,
        key: process.env.YOUTUBE_KEY,
        maxResults: 50
      }
    }).then(res => {
      resolve(res.data.items[0].contentDetails.relatedPlaylists.uploads);
    }).catch(err => {
      const { status, data } = err.response;
      reject(util.inspect({ status, data }, { colors: true, depth: null }));
    })
  });
}