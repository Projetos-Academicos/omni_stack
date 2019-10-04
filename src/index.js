const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect('mongodb+srv://Admin:root@ommistack-kg3am.mongodb.net/ommiStack?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);


app.listen(3000);

