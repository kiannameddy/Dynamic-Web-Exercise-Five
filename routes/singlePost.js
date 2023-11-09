// Create a single post //

const express = require('express');
const { getFirestore } = require('firebase/firestore');
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore(); 


router.get("/:postId", (req, res) => {
    // How do I get a param ?!!
    const postId = req.params.postId;
    const postQuery = firestore.getDoc(firestore.doc(db, "posts", postId));

    postQuery
        .then((response) => {
            res.send(response.data());
        })
        .catch((error) => {
            res.send(error);
        });
           
}); 
module.exports = router; 

