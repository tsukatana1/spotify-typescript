import { GetAlbumResp, SpotifyError } from "./interfaces";
import { _ } from './utils';
import fetch from 'petitio';

export class albumMethods {
    accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    async fetchByID(id: string): Promise<GetAlbumResp> {
        const fetchReq = await fetch(_.getAlbumURL(id)).header("Authorization", "Bearer " + this.accessToken).header("Content-Type", "application/json").send();
        const fetchRes = fetchReq.json();
        
        if(fetchReq.statusCode !== 200) {
            const filteredErr = fetchRes as SpotifyError;
            throw new Error(`Code ${filteredErr.error.status} which returned message: ${filteredErr.error.message}`);
        }
            
        return fetchRes as GetAlbumResp;
    }

    async fetchSeveral(ids: string[]): Promise<GetAlbumResp[]> {
        const id = ids.join(',');
        const fetchReq = await fetch(_.getMultiAlbums(id)).header("Authorization", "Bearer " + this.accessToken).header("Content-Type", "application/json").send();
        const fetchRes = fetchReq.json();

        if(fetchReq.statusCode !== 200) {
            const filteredErr = fetchRes as SpotifyError;
            throw new Error(`Code: ${filteredErr.error.status} which returned message: ${filteredErr.error.message}`);
        }

        return fetchRes as GetAlbumResp[];
    }

    async fetchTracks(id: string): Promise<any> {
        const fetchReq = await fetch(_.getAlbumTracksURL(id)).header("Authorization", "Bearer " + this.accessToken).header("Content-Type", "application/json").send();
        const fetchRes = fetchReq.json();

        if(fetchReq.statusCode !== 200) {
            const filteredErr = fetchRes as SpotifyError;
            throw new Error(`Code: ${filteredErr.error.status} which returned message: ${filteredErr.error.message}`);
        }
        
        return fetchRes;
    }
} //
