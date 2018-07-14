
let firebaseUrl = "https://us-central1-hyperapp-46652.cloudfunctions.net/api";
if (window.location.host.includes('localhost')) firebaseUrl = "http://localhost:5000/hyperapp-46652/us-central1/api";

class Client {
  constructor(apiUrl, firebaseUrl) {
    this.apiUrl = apiUrl;
    this.firebaseUrl = firebaseUrl;
  }
  recommendations() {
    return fetch(this.apiUrl + "/recommendations/").then(response => response.json())
  }

  addClientBrowserId(data) {
    return fetch(this.firebaseUrl + '/clients', {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}

export default new Client("", firebaseUrl);