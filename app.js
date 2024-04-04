const express = require('express');
const app = express();
app.use(express.json());
const ExpressError = require('./expressError');
const { convertAndValidateNumsArray, findMean, findMode, findMedian } = require('./helpers');


app.get('/mean', (req,res) => {
    if(!req.query){
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    };
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let result = {
        operations: "mean",
        result: findMean(nums)
    }
    return res.send(result)
})

app.get('/mode', (req,res) => {
    if(!req.query){
        throw ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    };
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let result = {
        operations: "mode",
        result: findMode(nums)
    }
    return res.send(result)
})


app.get('/median', (req,res) => {
    if(!req.query){
        throw ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    };
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let result = {
        operations: "mode",
        result: findMedian(nums)
    }
    return res.send(result)
})

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);

    return next(err);
  });
  
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
  });
  

app.listen(3000, function(){
    console.log('App on port 3000');
 });