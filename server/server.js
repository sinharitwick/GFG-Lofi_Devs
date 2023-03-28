const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/user-routes')
const blogRouter = require('./routes/blog-routes')
const app = express()

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/user', router); //http://localhost:5000/api/user
app.use('/api/blog', blogRouter); //http://localhost:5000/api/blog

app.get('/', (req, res) => {
    res.send("Hello World!")
})

mongoose.connect(
    'mongodb+srv://sritwick10:safetypass@cluster0.kvvcjil.mongodb.net/farm?retryWrites=true&w=majority'
    ).then(() => app.listen(port)).then(() => console.log("Connected to DataBase and listening to port")).catch((err) => (console.log(err)));

// app.listen(port, () => {
//     console.log(`App is running on port ${port}`);
// })