const axios = require('axios');
require('dotenv').config();

module.exports = function(playlistId, token = '') {
  return new Promise((resolve, reject) => {
    axios.default.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet,contentDetails,id',
        playlistId: playlistId,
        key: process.env.YOUTUBE_KEY,
        maxResults: 50,
        pageToken: token
      }
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      const { status, data } = err.response;
      reject(util.inspect({ status, data }, { colors: true, depth: null }));
    })
  });
}