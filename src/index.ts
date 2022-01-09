import { SpotifyRequester } from "./spotifyRequester";
import { CLIENT_ID, CLIENT_SECRET, OAUTH_TOKEN } from './info.json'

//Example of how to use this client (for now).
//Will deffo make an example folder when im done for development.
async function makeClient() {
    let client = new SpotifyRequester({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        accessToken: OAUTH_TOKEN
    });
    //const at = await SpotifyRequester.getOauthToken(CLIENT_ID, CLIENT_SECRET);
    //console.log(at);

    let x = await client.albums.fetchByID('4yP0hdKOZPNshxUOjY0cZj');
    console.log(x);
}

makeClient().then();

