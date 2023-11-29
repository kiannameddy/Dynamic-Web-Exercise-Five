const express = require('express');
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/:postId", (req, res) => {
    const postId = req.params.postId;
    const postQuery = firestore.getDoc(
        firestore.doc(db, "posts", postId)
    );
    postQuery
        .then((response) => {
            console.log({response})
            res.send(response.data());
        })
        .catch((error) => {
            res.send(error);
        });
});

module.exports = router; 

