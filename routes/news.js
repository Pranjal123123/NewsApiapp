const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const axios= require('axios');
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

  //for deleting cards
  router.get("/", async (req, res) => {
      try{
        const apiKey=process.env.API;
        var url='https://newsapi.org/v2/everything?q=India&apiKey='+apiKey;
        var news= await axios.get(url).then((response)=>{
            data = response.data;
            return data;
        });
        // console.log(news);
        res.render("news", {articles : news.articles,title:"Home"});
      }
      catch(error)
      {
          console.log(error);
      }
  
   
  })
  router.get("/TopHeadlines", async (req, res) => {
    try{
      const apiKey=process.env.API;
      var url='https://newsapi.org/v2/top-headlines?q=India&apiKey='+apiKey;
      var news= await axios.get(url).then((response)=>{
          data = response.data;
          return data;
      });
      // console.log(news);
      res.render("news", {articles : news.articles,title:"Top-headlines"});
    }
    catch(error)
    {
        console.log(error);
    }
})
router.get("/sports", async (req, res) => {
    try{
      const apiKey=process.env.API;
      var url='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey='+apiKey;
      var news= await axios.get(url).then((response)=>{
          data = response.data;
          return data;
      });
      // console.log(news);
      res.render("news", {articles : news.articles,title:"sports"});
    }
    catch(error)
    {
        console.log(error);
    }
})
router.get("/business", async (req, res) => {
    try{
      const apiKey=process.env.API;
      var url='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey='+apiKey;
      var news= await axios.get(url).then((response)=>{
          data = response.data;
          return data;
      });
      // console.log(news);
      res.render("news", {articles : news.articles,title:"business"});
    }
    catch(error)
    {
        console.log(error);
    }
})
router.post("/search", async (req, res) => {
    try{
      const apiKey=process.env.API;
      var url='https://newsapi.org/v2/everything?q='+req.body.query+'&apiKey='+apiKey;
      var news= await axios.get(url).then((response)=>{
          data = response.data;
          return data;
      });
      // console.log(news);
      res.render("news", {articles : news.articles,title:req.body.query});
    }
    catch(error)
    {
        console.log(error);
    }
})
module.exports = router;