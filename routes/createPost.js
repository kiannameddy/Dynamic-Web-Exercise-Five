// Create a post 
const express = require("express");
const { getFirestore } = require('firebase/firestore');
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

const submitForm = `
    <form action="/create/post">
    <label>Title
        <input type= "text" name="postTitle"/>
    </label>
    <label>Author
        <input type= "text" name="author"/>
    </label>
    <label>Text
        <input type= "text" name="postText"/>
    </label>
    <button type="submit">Submit</button>
    </form>
    
`;

router.get("/", (req, res) => {
    res.send(submitForm);
});

router.get("/submit", (req, res) => {
    const queryParams = req.query;
    const title = queryParams.postTitle;
    const id = title.replace(/\s+/g,"-")/toLowerCase();
    const text = queryParams.postText;
    const author = queryParams.author;

    const setBlogPost = firebase.setDoc(firestore.doc(db, "posts", id), {
        postTitle: title,
        postText: text,
        author: author,
    });

    setBlogPost
        .then(() => {
            res.send(` 
            <h1> thanks </h1>
            <p><a href ="/create"> Submit another post</a>.</p>
         `);
        })
        .catch((error) => {
            res.send(`Error submitting: ${error.toString()}`)
        });
});


module.exports = router;