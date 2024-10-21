exports.getHome = (req, res, next) => {
  res.status(200).render("index", {
    title: "Hi",
  });
};

exports.postContent = (req, res, next) => {
    res.status(200).render("createPost" ,{
        title: "send it"
    })
}