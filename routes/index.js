const express = require('express');
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore(); 

router.get("/", (req, res) => {
    const postQuery = firestore.getDocs(firestore.collection(db, "posts"));
    const postsArray  = [];
    postQuery
        .then((response) => {
            response.forEach((post) => {
                postsArray.push({id: post.id, ...post.data()});
            });
            res.send(postsArray);
        })
        .catch((error) => {
            console.log(error);
            return res.send(error);
    });
});

module.exports = router;