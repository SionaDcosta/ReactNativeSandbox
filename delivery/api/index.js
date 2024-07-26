const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000
const JWT_SECRET = 'siona'

// Middleware
app.use(bodyParser.json())
app.use(cors())

// MongoDB connection
mongoose
    .connect(
        'mongodb+srv://siona:siona@cluster0.jybhztk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))

// User schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

const User = mongoose.model('User', userSchema)

// Routes
app.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body
    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).send('All fields are required')
    }

    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match')
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        return res.status(400).send('User already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })

    await newUser.save()
    res.status(201).send('User registered successfully')
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).send('All fields are required')
    }

    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).send('Invalid credentials')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return res.status(400).send('Invalid credentials')
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: '30d',
    })

    res.status(200).json({ token, username: user.username }) // Include username in the response
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
