import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import route from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// body-perser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app);

// serving static files
app.use(express.static('public'))

app.get('/', (req, res) =>
    res.send(`Node and Express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);

