const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/culturalMap', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// State Schema and Model
const StateSchema = new mongoose.Schema({
    name: String,
    capital: String,
    info: String,
    culturalDetails: String
});
const State = mongoose.model('State', StateSchema);

// Festival Schema and Model
const FestivalSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    additionalInfo: String
});
const Festival = mongoose.model('Festival', FestivalSchema);

// Monument Schema and Model
const MonumentSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    additionalInfo: String
});
const Monument = mongoose.model('Monument', MonumentSchema);

// API Routes

// Get state by name
app.get('/api/states/:name', async (req, res) => {
    try {
        const state = await State.findOne({ name: req.params.name });
        if (!state) {
            return res.status(404).json({ message: 'State not found' });
        }
        res.json(state);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all festivals
app.get('/api/festivals', async (req, res) => {
    try {
        const festivals = await Festival.find();
        res.json(festivals);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch festivals' });
    }
});

// Get festival by ID
app.get('/api/festivals/:id', async (req, res) => {
    try {
        const festival = await Festival.findById(req.params.id);
        if (!festival) {
            return res.status(404).json({ message: 'Festival not found' });
        }
        res.json(festival);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch festival details' });
    }
});

// Get all monuments
app.get('/api/monuments', async (req, res) => {
    try {
        const monuments = await Monument.find();
        res.json(monuments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch monuments' });
    }
});

// Get monument by ID
app.get('/api/monuments/:id', async (req, res) => {
    try {
        const monument = await Monument.findById(req.params.id);
        if (!monument) {
            return res.status(404).json({ message: 'Monument not found' });
        }
        res.json(monument);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch monument details' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});