const express = require('express'); 
const app = express();
const router = express.Router();
const firebase = require("firebase/app");
const port = 4000;

const firebaseConfig = {
    apiKey: "AIzaSyDrceUnHKwShVIWlrSANa6-pXCsP9HYPM4",
    authDomain: "exercise-five-fall-2023.firebaseapp.com",
    projectId: "exercise-five-fall-2023",
    storageBucket: "exercise-five-fall-2023.appspot.com",
    messagingSenderId: "176234642082",
    appId: "1:176234642082:web:078d6a0776e320c5fe35fb"
  };

firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const singlePostRoute = require('./routes/singlePost');
const createPostRoute = require('./routes/CreatePost');

app.use("/", indexRoute);
app.use("/post", singlePostRoute);
app.use("/create", createPostRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
