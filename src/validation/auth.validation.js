const Joi = require('joi')

const authDTO=({ism, password}) =>{
    return Joi.object({
        ism:Joi.string().max(15).required(),
        password:Joi.string().required()
    }).validate({ism,  password})
}


module.exports = {authDTO}