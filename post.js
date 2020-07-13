exports. getPosts = (req ,res) => {
    //res.send("hello world from node js");
    res.json({
        posts : [{tittle : "first post"}, {tittle : "second post"}]
    });
}; 

