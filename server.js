const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
require('colors');
const connectDb = require('./config/config')

//dotenv config
dotenv.config();

//db config
connectDb();

//rest object
const app = express();

//middlwares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));


//routes
app.use('/api/items', require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoute"));

//port
const PORT = process.env.PORT || 8080;

//listen
// app.listen(PORT, () =>{
//     console.log(`server runnning on PORT ${PORT}`.bgCyan.white);
// });

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`.bgCyan.white);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});
