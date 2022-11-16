export const facebookLogin = () => {
  window.FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     window.FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
     console.log(response)
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
  });
}