import fetch from "petitio";
import { albumMethods } from "./albumReq";
import { TokenEndpoint, SpotifyOpts } from "./interfaces";
import { album } from './utils';


/**
 * The Spotify HTTP client, which covers all endpoints.
 */
export class SpotifyRequester {
    clientID: string;
    clientSecret: string;
    accessToken: string;
    albums: albumMethods;

    constructor(opts: SpotifyOpts) {
        this.clientID = opts.clientID;
        this.clientSecret = opts.clientSecret;
        this.accessToken = opts.accessToken;
        
        this.albums = new albumMethods(this.accessToken);
    }
    
    static async getOauthToken(clientID: string, clientSecret: string): Promise<TokenEndpoint> {
        const fetchReq = await fetch(album.getOauthURL(), 'POST').header("Authorization", "Basic " + Buffer.from(clientID + ':' + clientSecret).toString('base64')).body({ grant_type: 'client_credentials' }, 'form').timeout(3000).send();

        if(fetchReq.statusCode !== 200) {
            throw new Error("Invalid client credentials.");
        }

        const fetchRes = fetchReq.json() as TokenEndpoint;
        return fetchRes;
    }

}
