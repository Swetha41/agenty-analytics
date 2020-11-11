const express = require( 'express' );
const router = express.Router();
const Resume = require( '../models/resume' );

//get all resumes
router.get( '/allresumes', async ( req, res ) => {
  try {
    const data = await Resume.find();
    res.json( data );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
} );

//get resume by id
router.get( '/:resumeId', async ( req, res ) => {
  try {
    const data = await Resume.find( { resumeId: req.params.resumeId } );
    res.json( data );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
} );

//post resume data
router.post( '/addresume', async ( req, res ) => {
  
  const resume = new Resume( {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    resumeId: req.body.resumeId,
    location: req.body.location,
    experience: req.body.experience,
    skills: req.body.skills
} );

  try {
    const data = await resume.save();
    res.json( data );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
} );

//delete resume data by id
router.delete( '/:resumeId', async ( req, res ) => {
  try {
    const data = await Resume.deleteOne( { resumeId: req.params.resumeId } );
    res.json( data );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
} );

//edit resume data by id
router.put( '/:resumeId', async ( req, res ) => {
  try {
    const data = await Resume.updateOne( { resumeId: req.params.resumeId }, {
      $set: {
        ...req.body
      }
    } );
    res.json( data );
  } catch ( err ) {
    res.status( 500 ).send( err );
  }
} );

module.exports = router;