module.exports = function () {
  const bcrypt = require('bcryptjs')
  const multer = require('multer')
  const uuid = require('uuid/v4')
  var jwt = require('jsonwebtoken')
  require('dotenv').config()
  var s2 = require('s2-geometry').S2
  var moment = require('moment')
  const authy = require('authy')(process.env.TWILIO_KEY)
  const multiStringReplace = require('multi-string-replace')
 
  //const Common = require('../Utils/common')


  this.fileUpload = function (image, m) {
    return new Promise(function (resolve) {
      try {
        console.log("Directory name",dir)
        var dir ='user'
        var data = {}
        //var img  = {}
        var uid = uuid()
        var storage = multer.diskStorage({
          destination: (req, file, cb) => {
          cb(null, process.env.IMAGE_PATH + dir)
          },
          filename: (req, file, cb) => {
            cb(null, uid + '.' + file.originalname.split('.')[1])
          }
        })
        var upload = multer({ storage: storage }).single('file')
        upload(image, null, function (err) {
          if (typeof image.file === 'undefined' || err) {
            data.error = true
            data.msg = err
          } else {
            data.error = false
            data.msg = process.env.HOST + ':' + process.env.PORT + '/' + image.file.path.replace('public/', '').replace(/\\/g, '/')
            //img.msg = process.env.HOST + ':' + process.env.PORT + '/public/' + image.file.path.replace(/\\/g, '/')
          }
          resolve(data)
        })
      } catch (err) {
        err.error = true
        resolve(err)
      }
    })
  }

  this.fileUpload2 = function (image, dir) {
    return new Promise(function (resolve) {
      try {
        var data = {}
        //var img  = {}
        var uid = uuid()
        var storage = multer.diskStorage({
          destination: (req, file, cb) => {
          cb(null, process.env.IMAGE_PATH2 + dir)
          },
          filename: (req, file, cb) => {
            cb(null, uid + '.' + file.originalname.split('.')[1])
          }
        })
        var upload = multer({ storage: storage }).single('file')
        upload(image, null, function (err) {
          if (typeof image.file === 'undefined' || err) {
            data.error = true
            data.msg = err
          } else {
            data.error = false
            data.msg = process.env.HOST + ':' + process.env.PORT + '/' + image.file.path.replace(/\\/g, '/')
            console.log(data.msg)
            //img.msg = process.env.HOST + ':' + process.env.PORT + '/public/' + image.file.path.replace(/\\/g, '/')
          }
          resolve(data)
        })
      } catch (err) {
        err.error = true
        resolve(err)
      }
    })
  }


  this.imageUpload = function (image, res) {
    return new Promise(function (resolve) {
      try {
        var data = {}
        var uid = uuid()
        var storage = multer.diskStorage({
          destination: (req, file, cb) => {
            cb(null, process.env.IMAGE_PATH2 + req.body['user'].split('|')[0])
          },
          filename: (req, file, cb) => {
            if (req.body['user'].split('|')[1] !== 'Replace') {
              cb(null, uid + '.' + file.originalname.split('.').reverse()[0])
            } else {
              cb(null, req.body['user'].split('|')[2])
            }
          }
        })
        var upload = multer({ storage: storage }).single('file')
        upload(image, res, function (err) {
          if (err) {
            data.error = true
            data.msg = err
          } else {
            data.error = false
            data.msg = process.env.HOST + ':' + process.env.PORT + '/' + image.file.path.replace('public/', '').replace(/\\/g, '/')       
          }
          resolve(data)
        })
      } catch (err) {
        err.error = true
        resolve(err)
      }
    })
  }


  this.multipleStringReplace = function (string, replacementList) {
    return new Promise(function (resolve) {
      var mst = multiStringReplace(string, replacementList)
      resolve(mst)
    })
  }
  this.bookingTripStarCounting = function (rating) {
    return new Promise(function (resolve) {
      var ratingstring = ''
      switch (rating) {
        case '1':
          ratingstring += '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
          break
        case '2':
          ratingstring += '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
          break
        case '3':
          ratingstring += '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
          break
        case '4':
          ratingstring += '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
          break
        case '5':
          ratingstring += '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
          break
        default:
          ratingstring += '<i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
          break
      }
      resolve(ratingstring)
    })
  }

}