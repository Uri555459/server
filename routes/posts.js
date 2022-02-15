const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

// GET ALL POSTS
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.json({ message: 'Ошибка!' })
    }
})

// Added post
router.post('/posts/add', async (req, res) => {
    const post = new Post({ ...req.body })
    try {
        const savePost = await post.save()
        res.json(savePost)
    } catch (error) {
        res.json({ message: 'Ошибка сохранения поста!' })
    }
});

// Getting a post on id 
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (error) {
        res.json({message: 'Такого поста нет!'})
    }
});

// Delete post 
router.delete('/posts/:id', async (req, res) => {
    try {
        const removePost = await Post.remove({_id: req.params.id})
        res.json(removePost)
    } catch (error) {
        res.json({message: 'Такого поста нет!'})
    }
});

// Update post 
router.patch('/posts/:id', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({_id: req.params.id}, {...req.body})
        res.json(updatePost)
    } catch (error) {
        res.json({message: 'Ошибка, пост не обновлен!'})
    }
});

module.exports = router