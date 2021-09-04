module.exports = function(app, validator) {
    const basePath = '/api/admin'
    const ErrorHandler = require('../Utils/error')
    const Common = require('../Utils/common')
    //const BookingController = require('../controller/BookingController')
    require('dotenv').config()
    
    const AppSliderController = require('../controller/Admin/AppSliderController')
    const FileUploadCtrl = require('../controller/Admin/FileUploadCtrl')
    
    
    var appSliderController = new AppSliderController();
    var fileUploadCtrl = new FileUploadCtrl();
   
   var errorHandler = new ErrorHandler();
   
    app.post(`${basePath}/appSliderAdd`, [
       
        validator.check('Image').isLength({ min: 1, max: 255 }).optional()
        .withMessage('INVALID: $[1],Image'),
        
    ],  (req, res) => {
        const lang = req.headers.lang
        const error = validator.validation(req)
        var data = req.body
        if (error.array().length) {
            errorHandler.requestHandler(error.array(), true, lang, (message) => {
                message.data = error.array()
                return res.send(message)
            })
        } else {
            appSliderController.appSliderAddCtrl(data, (result) => {
                errorHandler.ctrlHandler([result], result.error, lang, (message) => {
                    return res.send(message)
                })
            })
        }
    })

    
    app.get(`${basePath}/appSliderView/:page`, (req, res) => {
        const lang = req.headers.lang
        const error = validator.validation(req)
        var limit = 100
        var page = { page: req.params.page, limit: limit }
        if (error.array().length) {
            errorHandler.requestHandler(error.array(), true, lang, (message) => {
                return res.send(message)
            })
        } else {
            appSliderController.appSliderPageViewCtrl(page, (result) => {
                errorHandler.ctrlHandler([result], result.error, lang, (message) => {
                    return res.send(message)
                })
            })
        }
    })

    app.get(`${basePath}/getappSliderView/:id`, (req, res) => {
        const lang = req.headers.lang
        const error = validator.validation(req)
        const id = req.params.id
        if (error.array().length) {
            errorHandler.requestHandler(error.array(), true, lang, (message) => {
                return res.send(message)
            })
        } else {
            appSliderController.getappSliderViewCtrl(id, (result) => {
                errorHandler.ctrlHandler([result], result.error, lang, (message) => {
                    return res.send(message)
                })
            })
        }
    })

    
    app.post(`${basePath}/fileUpload`, async function(req, res) {
        const lang = req.headers.lang
        const error = validator.validation(req)
        var data = { req: req, res: res }
        if (error.array().length) {
            errorHandler.requestHandler(error.array(), true, lang, (message) => {
                message.data = error.array()
                return res.send(message)
            })
        } else {
            fileUploadCtrl.fileUploadCtrl(data, (result) => {
                errorHandler.ctrlHandler([result], result.error, lang, (message) => {
                    return res.send(message)
                })
            })
        }
    })

   
    app.post(`${basePath}/appSliderDelete`, [
        validator.check('id').trim().isLength({ min: 1 })
        .withMessage('INVALID: $[1],id')
    ], (req, res) => {
        const lang = req.headers.lang
        const error = validator.validation(req)
        var data = req.body
        if (error.array().length) {
            errorHandler.requestHandler(error.array(), true, lang, (message) => {
                return res.send(message)
            })
        } else {
            appSliderController.appSliderDeleteCtrl(data, (result) => {
                errorHandler.ctrlHandler([result], result.error, lang, (message) => {
                    return res.send(message)
                })
            })
        }
    })

}