const express = require('express');
const cors = require('cors');

const webpush = require('web-push');

const functions = require('firebase-functions');
const firebase = require("firebase");
const admin = require('firebase-admin');

const serviceAccountCredentials = require('./serviceAccount');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountCredentials),
  apiKey: "AIzaSyDgns91GikP_A_19k8FSCxgceSn5vlneCg",
  authDomain: "hyperapp-46652.firebaseapp.com",
  databaseURL: "https://hyperapp-46652.firebaseio.com",
  projectId: "hyperapp-46652",
  storageBucket: "hyperapp-46652.appspot.com",
  messagingSenderId: "871558612182"
});

const app = express();
const db = admin.database();

webpush.setGCMAPIKey('BEfr-TQE853v_Cp9Vz5YZlTHJ9wzeSWT2e9mkYTcsPYgaCIoXvSUyrTYETtzRlxKTwtEWrp85K5ajCdO66ved8c');
webpush.setVapidDetails(
  'mailto:mail@jatintiwari.com',
  "BEfr-TQE853v_Cp9Vz5YZlTHJ9wzeSWT2e9mkYTcsPYgaCIoXvSUyrTYETtzRlxKTwtEWrp85K5ajCdO66ved8c",
  "xrylcQzRRmFJKQi4y0wNUuC-tHJiE17vb3ikYYmvmKQ"
);

app.use(cors({ origin: true }));

app.get("/blogs", (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  res.set('Vary', 'Accept-Encoding');
  const blogs = db.ref('/blogs').once('value')
    .then(snapshot => {
      const content = snapshot.val();
      const blogs = content.reduce((acc, blog) => {
        if (blog !== null) acc.push(blog)
        return acc;
      }, []);
      res.status(200).json(blogs);
    });

});

const validateRequest = (req) => {
  const blogToAdd = req.body;
  const headers = req.headers;

  if (blogToAdd && blogToAdd.id === undefined) return { error: "id required" };
  if (headers['x-knows-nothing'] !== 'jon') return { error: "invalid" };

  return null;
}

app.post("/blogs", (req, res) => {
  const blogToAdd = req.body;
  const invalidRequestError = validateRequest(req);
  console.error(`[post] invalidRequestError`, invalidRequestError)
  if (invalidRequestError) {
    return res.status(403).json(invalidRequestError);
  }
  console.log('[post] adding blog:', blogToAdd.id);
  db.ref('blogs/' + blogToAdd.id)
    .set(blogToAdd)
    .then(() => res.status(201).send())
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.post("/clients", (req, res) => {
  const payload = req.body;
  console.log('[payload]', payload)
  if (!payload) return res.status(400).send("Invalid");
  console.log('[client-ids] Payload', payload);
  db.ref('clients/' + payload["keys"]['p256dh'])
    .set(payload)
    .then(response => {
      res.status(201).send()
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.post("/notifications", (req, res) => {
  const payload = req.body;
  if (req.headers['x-knows-nothing'] !== 'jon') return res.status(403).send();
  const blogs = db.ref('/clients').once('value')
    .then(pushSubscriptionsRef => {
      const pushSubscriptions = Object.values(pushSubscriptionsRef.val());
      console.log('[Notification] Count: ', pushSubscriptions.length);
      pushSubscriptions.reduce((acc, pushSubscription, i) => {
        return acc.then(() => {
          webpush.sendNotification(pushSubscription, JSON.stringify(payload))
            .then(response => {
              console.log('[Notification] sent.',i)
            })
            .catch(error => {
              console.error('[Notification] error', error.message, pushSubscription);
            });
        })
      }, Promise.resolve())
        .then(response => {
          console.log('[Notifications] sent.')
          res.json(response);
        })
        .catch(error => {
          console.error('[Notifications] error', error.message);
          res.json(error);
        });
    }).catch(error => {
      console.error('[Notifications] Fetch error', error.message);
      res.json(error);
    });
})

const api = functions.https.onRequest(app)

module.exports = {
  api
}

// app.listen(3000, () => {
//   console.log('Listing...');
// })