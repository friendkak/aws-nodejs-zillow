'use strict'

const Zillow = require('node-zillow')
// Instantiate
const zillow = new Zillow(process.env.ZILLOW_ZWSID)
const parameters = require('./parameters')
// const _ = require('lodash')
const Promise = require('bluebird')

function searchPromise (params) {
  return new Promise((resolve, reject) => {
    zillow.get('GetZestimate', params).then((results, err) => {
      if (err) {
        reject(err)
      } else {
        resolve(results)
      }
      // results here is an object { message: {}, request: {}, response: {}}
    })
  })
}

module.exports.search = (event, context, callback) => {
  var params = {
    zpid: parameters.zpidWithZestimate.zpid
  }

  searchPromise(params).then(results => {
    callback(null, results)
  })

  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Go Serverless v1.0! Your function executed successfully!',
  //     input: event
  //   })
  // }

  // callback(null, response)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
}
