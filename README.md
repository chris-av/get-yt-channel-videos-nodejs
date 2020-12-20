# Get YouTube Channel Videos (NodeJS)

I wanted to simply get a list of every video published by a specific YouTube channel. This is a demonstration of how to use asynchronous code to make multiple, sequential requests to an API service. 

## Instructions

1) Make sure to install all of your dependencies first. You can do this by running the following in your computer's terminal: 

```sh
npm install
```

2) Ensure that you have a project created on [Google Cloud Console](http://console.cloud.google.com). Create a project, then on the top left menu, click on *APIs & Services* and click *Credentials*. You simply need to create credentials (one long string) under the *API Keys* section.

3) Then, you will need to define your API key value in an `.env` file or variable. Define it like so:

```sh
YOUTUBE_KEY=ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

Once you do this, everything should be good to go.


## Notes

The resulting output can be potentially large depending on how many videos a YouTube channel has published.

The structure of this code is inspired by [this](https://youtu.be/IK5UUrPglTM) video. However, it appears that the methodology in the video is [necessary](https://stackoverflow.com/questions/26831919/get-all-playlist-ids-from-channel-id-youtube-api-v3) due to the nature of how YouTube structures its API. You first have to get a list of the playlists for the channel. Every channel will have a generic "Uploads" playlist. Querying that playlist will retrieve all of the videos the channel has uploaded.