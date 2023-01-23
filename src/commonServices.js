import axios from "axios";

export const getData = (url, callback) => {


  axios
    .get(url)
    .then((response) => {
      callback(response.data.results);
      console.log("getData response:", response.data.results);

      /*       console.log("Response.data.value en commonServices",response.data.value); */
    })
    .catch((error) => {
      callback(error);
      console.log(error.message);
    });
};
