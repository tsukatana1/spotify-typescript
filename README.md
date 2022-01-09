# spotify-typescript

Some spotify API code to efficiently fetch spotify data through its web API routes.

## Status
It is still in development, but most likely I will update it enough for it to become a library.

##Example

If for some reason you want to use this code, then sure go ahead, heres some example:

```typescript
async function main() {
    //Startup the spotify HTTP requester.
    let client = new SpotifyRequester({
        clientID: "your_client_id",
        clientSECRET: "your_client_secret",
        accessToken: "your_access_token (or generate)"
    });

    //To generate a accessToken.
    let token = SpotifyRequester.getOAuthToken("your_client_id", "your_client_secret");
    console.log(token);

    //To fetch an album
    let album = client.albums.fetchById("2nLOHgzXzwFEpl62zAgCEC");
    console.log(album)

    //Result will be a interface with the album information.
}
```

## Important Details

Keep in mind that the access token expires every hour, so if you are fetch data constantly throughout the day, make an interval that will call the getOAuthToken function every 3600 seconds.
