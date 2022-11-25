import { notify } from "@kyvg/vue3-notification";
import { API_GOOGLE_LOGIN, API_GOOGLE_LOGIN_FETCH_TOKEN } from "../api";
import { useAuth } from "../token";
import axios from "axios";

export const googleLogin = (access_token) => {
  const auth = useAuth()
  // axios.post(API_GOOGLE_LOGIN_FETCH_TOKEN, {code}, {withCredentials: true})
  axios.post(API_GOOGLE_LOGIN, {access_token}, {withCredentials: true})
  .then(res => {
    auth.setToken("AUTH_TOKEN")
    window.location.reload()
  })
  .catch(err => {
    console.log(err.response.data.non_field_errors)
    let error_message = err.response.data.non_field_errors ? err.response.data.non_field_errors.join('. ') : 'Unhandled error in server response. Probably you have entered invalid credentials.'
    notify({
      type: 'error',
      title: 'Error when trying to sign in',
      text: error_message,
      duration: 100000
    })
  })
}