const mongoose = require( 'mongoose' );

// Schema 
const resumeSchema = mongoose.Schema( {
  resumeId: {
    type: String,
    requied: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  skills: [{
    type:String
  }],
  experience: {
    type: String,
    required: true
  }

} );

module.exports = mongoose.model( 'Resume', resumeSchema );