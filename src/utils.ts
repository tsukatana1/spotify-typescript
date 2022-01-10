export const links = {
    getAlbumURL: (id: string) => `https://api.spotify.com/v1/albums/${id}`,
    
    getMultiAlbums: (id: string) => `https://api.spotify.com/v1/albums?ids=${id}`,

    getAlbumTracksURL: (id: string) => `https://api.spotify.com/v1/albums/${id}/tracks`,

    getOauthURL: () => `https://accounts.spotify.com/api/token`,

    searchURL: (type: string, q: string) => `https://api.spotify.com/v1/search?type=${type}&q=${q}`,
    
    getTrackURL: (id: string) => `https://api.spotify.com/v1/tracks/${id}`
};

export enum SearchTypes {
    ALBUM = "album",
    ARTIST = "artist",
    PLAYLIST = "playlist",
    TRACK = "track",
    SHOW = "show",
    EPISODE = "episode"
};