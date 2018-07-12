var path = require("path"),
    express = require("express")
    

var APP_DIR = path.join(__dirname, "app"),
    PORT = 3000,
    app = express();

//Serving the files on the app folder
app.use(express.static(APP_DIR));

app.get('/#', function (req, res) {
  res.sendFile(path.join(APP_DIR, "index.html"));
});
app.listen(PORT, function(){
  console.log('listeneing on port ' + PORT)
})

