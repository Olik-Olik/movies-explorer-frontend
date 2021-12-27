const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateURL = (value) => {
    if (!validator.isURL(value, { require_protocol: true })) {
        throw new Error('Неправильный формат ссылки');
    }
    return value;
};

const registerValidate = celebrate({
    body: Joi.object().keys({
        email: Joi.string().required().email().min(2).max(30).message({'any.required':'Заполните поле email'}),
        password: Joi.string().required().min(8).message({'any.required':'Заполните поле email'}),
        name: Joi.string().min(2).max(30).message({'any.required':'Заполните поле email'}),
    }),
});
const loginValidate = celebrate({
    body: Joi.object().keys({
        email: Joi.string().required().email().min(2).max(30).message({'any.required':'Заполните поле email'}),

        password: Joi.string(2).required().message({'any.required':'Заполните поля password'}),
    }),
});
const deleteValidate = celebrate({
    params: {
        movieId: Joi.string().message({'any.required': 'Поправьте movieId'}),
    } });


const movieValidate = celebrate({
    body: Joi.object().keys({
        link: validateURL,
        name: Joi.string().required().message({'any.required':'Заполните поле название'}),
        country: Joi.string().required().message({'any.required':'Заполните поле сторана'}),
        director: Joi.string().required().message({'any.required':'Заполните поле режиссер'}),
        duration: Joi.number().required().message({'any.required':'Заполните поле длительность'}),
        year: Joi.string().required().message({'any.required':'Заполните поле год'}),
        description: Joi.string().required().message({'any.required':'Заполните поле описание'}),
        movieId: Joi.string().required().message({'any.required':'Заполните корректно movieId'}),
        nameRU: Joi.string().required().message({'any.required':'Заполните поле название'}),
        nameEN: Joi.string().required().message({'any.required':'Заполните поле название'}),
        thumbnail: Joi.string().required().validateURL.message({'any.required':'Неверная ссылка'}),
        image: Joi.string().required().validateURL.message({'any.required':'Неверная ссылка'}),
        trailer:Joi.string().required().validateURL.message({'any.required':'Неверная ссылка'}),
    }),
});


module.exports = {
    registerValidate,
    loginValidate,
    movieValidate,
    deleteValidate,
    validateURL,
};
