import { notify } from "@kyvg/vue3-notification";
import { API_FACEBOOK_LOGIN } from "../api";
import { useAuth } from "../token";
import axios from "axios";

export const facebookLogin = () => {
  window.FB.login(function(response) {
    if (response.authResponse) {
      const auth = useAuth()
      axios.post(API_FACEBOOK_LOGIN, {access_token: response.authResponse.accessToken}, {withCredentials: true})
      .then((res) => {
        auth.setToken("AUTH_TOKEN")
        return auth.getProfile()
      })
      .then(profile => {
        window.FB.api('/me', function(response) {
          notify({
            type: 'success',
            title: 'Success',
            text: 'Signed in as ' + response.name
          })
        });
        window.location = ''
      })
      .catch(err => {
        notify({
          type: 'error',
          title: 'Error when trying to sign in',
          text: 'Unhandled error in server response. Probably you have entered invalid credentials.',
        })
      })
    } else {
      notify({
        type: 'error',
        title: 'Error when trying to sign in',
        text: 'User cancelled login or did not fully authorize.',
      })
    }
  });
}