//setup express
console.log("sanity check!");
let express = require('express')
let app = express()
let http = require('http')

//make port configurable
const PORT = process.env.PORT || 3000

let db = {
  friends: ['bob', 'mary', 'jean'],
  pets: ['dog', 'cat', 'turtle']
}
//route with request and response arguments
app.get('/friends', (req, res) =>{
  res.json(db.friends)
})

app.get('/pets', (req, res) =>{
  res.json(db.pets)
})

//two ways to setup a server:
app.listen(PORT, () => {
  console.log('server started');
})

//http.createServer(app)

/* Start server by running the js file. Connect to it from another terminal window with http://localhost:3000 */
