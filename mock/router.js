var express = require("express");
var router = express.Router();
var homeBanner = require("./home/homeBanner.js");
var homeList = require("./home/homeList.js");
var homeMore = require("./home/homeMore.js");
var detailChat = require("./detail/detailChat.js");
var detailHot = require("./detail/detailHot.js");

router.get("/homeBanner",function(req,res){
  res.send(homeBanner)
})

router.get("/homeList",function(req,res){
  res.send(homeList)
})

router.get("/homeMore",function(req,res){
  res.send(homeMore)
})

router.get("/detailChat",function(req,res){
  res.send(detailChat)
})

router.get("/detailHot",function(req,res){
  res.send(detailHot)
})

module.exports = router;