exports.sendReqParam = (req, res) => {
    let imgNo = req.params.imageNumber;
    console.log(imgNo);
    if (imgNo == 1){
        res.render("image1");
    }
    if (imgNo == 2){
        res.render("image2");
    }
    if (imgNo == 3){
        res.render("image3");
    }

};

exports.respondWithName = (req, res) => {
    res.render("index");
};

