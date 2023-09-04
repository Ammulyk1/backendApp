const router = require('express').Router();
const User = require('../modules/User');

router.get('/members', async (req, res) => {
  try {
    // Query the database to get members
    const members = await User.find(); // Assuming User is your model
    res.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//creating user
router.post('/', async(req, res)=> {
    try {
      const {name, email, password, picture} = req.body;
      console.log(req.body);
      const user = await User.create({name, email, password, picture});
      res.status(201).json(user);
    } catch (e) {
      let msg;
      if(e.code == 11000){
        msg = "User already exists"
      } else {
        msg = e.message;
      }
      console.log(e);
      res.status(400).json(msg)
    }
})

//login user
router.post('/login', async(req, res)=> {
  try {
    const {email, password} = req.body;
    const user = await User.findByCredentials(email, password);
    user.status = 'online';
    await user.save();
    res.status(200).json(user);
  } catch (e) {
      res.status(400).json(e.message)
  }
})
module.exports=router