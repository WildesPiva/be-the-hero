const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {

    index(){
        return celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number()
            })
        })
    },

    create(){
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                // whatsapp: Joi.number().required().min(10),
                whatsapp: Joi.string().required().min(10).max(13),
                city: Joi.string().required(),
                uf: Joi.string().required().length(2)
            })
        })
    }

}