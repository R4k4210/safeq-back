const express = require('express');
const dbConnect = require('./config/db');
const cors = require('cors');

const app = express();
dbConnect();

app.use(cors());

app.use(express.json({extended:true}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});