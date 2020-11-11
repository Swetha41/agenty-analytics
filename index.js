const express = require( 'express' );
const mongoose = require( 'mongoose' );
require('dotenv/config' );
const resumeRouter = require( './routes/resume' );

const app = express();

//middleware
app.use( express.json() );

//home route
app.get( "/", ( req, res ) => {
  res.json( { "message": "Success" } );
});

//routes
app.use("/resume", resumeRouter);

// MongoDB connection
mongoose.connect( process.env.DB_URI, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }, () => {
  console.log( 'Connected to mongoDB' );
} );

const PORT = process.env.PORT || 3000;

//app listening at port
app.listen( PORT, () => {
  console.log( `server started on ${ PORT }` );
});