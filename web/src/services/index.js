
let firebaseUrl = "https://us-central1-hyperapp-46652.cloudfunctions.net/api";
if (window.location.host.includes('localhost')) firebaseUrl = "http://localhost:5000/hyperapp-46652/us-central1/api/";

class Client {
  constructor(apiUrl, firebaseUrl) {
    this.apiUrl = apiUrl;
    this.firebaseUrl = firebaseUrl;
  }

  get menuItems() {
    return fetch(this.apiUrl + "/menu/all", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
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
        'Content-Type': 'application/json',
      }
    })
  }

  orders(id) {
    if(id) {
      return fetch(this.apiUrl + `/orders/${id}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(response => response.json());
    } else {
      return fetch(this.apiUrl + `/orders`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(response => response.json());
    }
  }
}

export default new Client("http://172.16.120.130:8080/", firebaseUrl);