import axios from "axios";

export class AxiosService {

  static getSwData() {
    return axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response);
        return response.data.results;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
