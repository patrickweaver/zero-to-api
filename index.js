const express = require("express");
const app = express();

app.use(express.static("public"));

var rp = require('request-promise');

app.get('/test', function (req, res) {
  res.send("" + Math.random())
})


app.get('/random-dog', function(req, res) {

  rp('https://api.thedogapi.com/v1/images/search')
    .then(function (json) {

      console.log(json);
      
      res.send(JSON.parse(json)[0].breeds[0].name)



    })
    .catch(function (err) {
        console.log("Error:")
        console.log(err)
    });


})



const server = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + server.address().port);
});