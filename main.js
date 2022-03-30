const port = 3000,
    express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");   
app.use(express.static("public"));

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use ((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful !");
});

app.get("/home", homeController.respondWithName);
app.get("/images/:imageNumber", homeController.sendReqParam);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

