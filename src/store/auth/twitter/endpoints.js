// Send a post request to this endpoint to obtain token, one parameter is "oauth_callback".
// This is the callabck url that twitter pop-up window will redirect user to 
// after completing authentication process. Callback url must be URL-encoded.
// Example: http%3A%2F%2Flocalhost%2Fsign-in-with-twitter%2F 
export const oauth_request_token = "https://api.twitter.com/oauth/request_token"

// Then direct the user to GET oauth/authenticate, and "oauth_token" that was obtained from 
// the above request should be passed as an argument: 
// https://api.twitter.com/oauth/authenticate?oauth_token={{your_token}}

