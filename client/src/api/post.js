import axios from "axios";
import qs from 'qs';

// posts the data taken from register form
const postRegisterForm = async function(formData) {
  let postedData = ""
  
  // test POST user request data
  let data = {
    "fname": "Kyle",
    "lname": "Hoffman",
    "age": "50",
    "zipcode": "10019",
    "email": "kylehoffman@bing.com",
    "password": "password1"
  };

  // using actual data
  data = formData;

  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },   // encoding problem
    data: qs.stringify(data),
    url: process.env.REACT_APP_UserEndpoint,
  };

  axios(options).then(response => {
      console.log(response)
      postedData = JSON.stringify(response);
    });

}
// posts new Product from Product Form
const postProductForm = async function(formData) {
  // using actual data
  const data = formData;

  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },   // encoding problem
    data: qs.stringify(data),
    url: process.env.REACT_APP_AddProductEndpoint,
  };

  let reqPromise = axios(options).then(response => {
      console.log(response)
      return 0
    });

  return reqPromise;
}


export {postRegisterForm, postProductForm};