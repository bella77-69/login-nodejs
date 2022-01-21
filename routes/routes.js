app.get("/local/signup", (req, res) => {
    res.render("local/signup.ejs");
  });
  
  app.get("/local/signin", (req, res) => {
    res.render("local/signin.ejs");
  });