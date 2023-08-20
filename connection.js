const mongoose = require('mongoose');
require('dotenv').config();

return  mongoose.connect(`mongodb+srv://ChatApp:KSLSV2436@cluster0.mah6jzt.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})
.then(() => {
  console.log('connected to mongodb')
})
.catch((err) => {
  console.error('Error connecting to mongodb', err)
});






