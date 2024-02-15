const express = require('express');
const cors = require('cors');
const aliensRouter = require('./routes/aliensRouter');

const app = express();
app.use(cors());

app.use('/api', aliensRouter);

app.listen(3000, () => {
    console.log(`Server is running`);
});