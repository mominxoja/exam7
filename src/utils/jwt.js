require("dotenv").config()
const {env} = require("../config") 


const SEKRET_KEY = env.SEKRET_KEY||"qwertrewq"
//undefined keldi sekret key

const jwt = require("jsonwebtoken")
//payload=tokenni ichiga nma kiritmoqchi bo'lgan narsamiz
const sign = (payload) => jwt.sign(payload,SEKRET_KEY,{expiresIn:"1h"} )
const verify = (payload) => jwt.verify(payload,SEKRET_KEY)

module.exports = {sign,verify}