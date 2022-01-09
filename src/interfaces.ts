export interface SpotifyOpts {
    clientID: string,
    clientSecret: string,
    accessToken: string
};

//TODO: Find a way to make the JSON return in camelCase instead of snake case.

export interface GetAlbumResp {
    albumType: string,
    totalTracks: number,
    available_markets: string[],
    external_urls: { spotify: string },
    href: string,
    id: string,
    images: Array<{ url: string, height: number, width: number }>,
    name: string,
    release_date: string,
    release_data_precision: string,
    restrictions: { reason: string },
    type: string,
    uri: string,
    artists: Array<getAlbumInner>,
    tracks: { href: string, items: Array<object> },
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: string
};

export interface getAlbumInner {
    external_urls: { spotify: string },
    followers: { href: string, total: number },
    genres: Array<string>,
    href: string,
    id: string,
    images: Array<{ url: string, height: number, width: number }>,
    name: string,
    popularity: number,
    type: string,
    uri: string
};

export interface TokenEndpoint {
    access_token: string,
    token_type: string,
    expires_in: number
}

export interface TrackSearchEndpoint {
    tracks: {
        href: string,
        items: object[],
        limit: number,
        next: string,
        offset: number,
        previous: string | null,
        total: number
    }
}

export interface SpotifyError {
    error: { status: number, message: string }
}
