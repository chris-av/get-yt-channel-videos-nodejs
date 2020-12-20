const getUploadsToken = require('./getUploadsToken');
const getUploadsPlaylist = require('./getUploadsPlaylist');

let videos = [];

module.exports = async function(channelId) {
  try {
    const uploadsId = await getUploadsToken(channelId);
    let content = await getUploadsPlaylist(uploadsId);

    let nextToken = content.nextPageToken;
    
    for (let i = 0; i < content.items.length; i++) {
      videos.push({
        title: content.items[i].snippet.title,
        date: content.items[i].snippet.publishedAt,
        description: content.items[i].snippet.description
      })

    }

    if (nextToken) {
      while (nextToken) {
        
        console.log("downloading next page " + nextToken + " ...");
        
        // get the next page of content
        content = await getUploadsPlaylist(uploadsId, nextToken);

        // store the new token; if none exists, this will be none and will break the while loop
        nextToken = content.nextPageToken;

        // download all the videos from the page
        for (let i = 0; i < content.items.length; i++) {
          videos.push({
            title: content.items[i].snippet.title,
            date: content.items[i].snippet.publishedAt,
            description: content.items[i].snippet.description
          });
        }

      }
    }

    return videos;

  } catch (err) {
    console.log('found error')
    console.log(err)
  }
}