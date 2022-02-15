const express = require('express')
const mongoose = require('mongoose')
const Post = require('./models/Post')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

// MiddleWares   
app.use(cors())
app.use(bodyParser.json())

// Import Routes
const postsRoute = require('./routes/posts')

app.use('/', postsRoute)

// Connect DB
mongoose.connect('mongodb+srv://admin:PASSWORD@myserver.dwiu0.mongodb.net/post?retryWrites=true&w=majority')
    .then(() => {
        console.log('DB connect')
        app.listen(port, console.log(`Server started. Port ${port}`))
    }).catch(error => console.log(error))

// app.get('/', function (req, res) {
//     Post.create({
//         title: 'Test',
//         description: 'Description',
//         date: new Date()
//     })
//         .then(post => res.send(post))
//         .catch(error => res.send(error))
// })

// app.get('/posts', function (req, res) {
//     Post.find({})
//         .then(post => res.send(post))
//         .catch(error => res.send(error))
// })

// app.post('/posts/add', async (req, res) => {
//     const post = new Post({ ...req.body })
//         try{
//             const savePost = await post.save()
//             res.json(savePost)
//         }catch(error) {
//             res.json({message: 'Ошибка сохранения поста!'})
//         }
// });
