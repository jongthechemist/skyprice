import axios from 'axios';

export default class SkyPriceService {
  
  constructor() {
    this.ROOT = "https://www.mocky.io/v2/5b5df09532000093031cfa97";
  }

  getFlights(criteria) {
    return new Promise((resolve, reject)=> {
      axios
      .get(this.ROOT, {
        params: criteria
      })
      .then((response)=>{
        resolve(response.data);
      })
      .catch(reject);
    });
  }
  
}