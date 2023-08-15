"use strict";
const router = require("express").Router();

const { blogPosts, Comments } = require("../db");

router.get("/BlogPosts", async (req, res, next) => {
    try {
        const allPosts = await blogPosts.findAll();
        res.send(allPosts);
    }
    catch (err) {
        next(err);
    }
});

router.get("/BlogPosts/:id", async (req, res, next) => {
    try {
        const onePost = await blogPosts.findByPk(req.params.id, {
            include:Comments,
        });
        res.send(onePost);
    } catch (err) {
        next(err);
    }
});

router.post("/BlogPosts/:id/comments", async (req, res, next) => {
    try {
        const postId = req.params.id;
        const { firstName, lastName, details } = req.body;

        const comment = await Comments.create({
            firstName,
            lastName,
            details,
            blogPostId: postId,
        });

        res.status(201).send(comment);
    } catch (err) {
        next(err);
    }
});

router.delete("/Comments/:id", async (req, res, next) => {
    try { 
        const oneComment = await Comments.findByPk(req.params.id);
        oneComment.destroy();
        res.sendStatus(200);  }
    catch (err) {
        next(err);
    }
});




