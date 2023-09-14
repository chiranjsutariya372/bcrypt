const mongoose = require('mongoose');

const server=async()=>{
  try {
    await mongoose.connect('mongodb+srv://chiranjsutariya372:chiranj@cluster0.vzywpba.mongodb.net/?retryWrites=true&w=majority')
    console.log('database connected successfully');
  } catch (error) {
    console.log(error.massage);
  }
}
module.exports=server;