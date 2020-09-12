var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
require('dotenv').config()
var AWS = require('aws-sdk')

const config = {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
    adminEmail: process.env.ADMIN_EMAIL
}

var ses = new AWS.SES(config);

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


app.post('/message', function(req, res) {
    const { name, message, email } = req.body;
    ses.sendEmail({
        Source: config.adminEmail,
        ReturnPath: config.adminEmail,
        Destination: {
            ToAddresses: [config.adminEmail]
        },
        Message: {
            Subject: {
                Data: "Message from Portfolio"
            },
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data:
                    `<h3>${name} has sent you a message.</h3>
                    <p>${message}</p>
                    <br>
                    <p>return Email to: <a href="mailto:${email}">${email}</a></p>`
                }
            }
        }
    }, (err, data) => {
        if(err) {
            return res.status(500).json({ error: err })
        }
        res.json({
            message: "Success",
            data
        })
    })
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object.
module.exports = app
