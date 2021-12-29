import React from "react";
/*
function handleEmailValid(evt){
    const emailValid =
        "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
        "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$" && 'Введите корректный email'

}
function handlePasswordValid(evt){
    const passwordValid ="(?=.*[0-9])(?=.*[a-z])" && 'Одна латинская буква в нижнем регистре и одно число, мин -8 знакв'
}
function handleProfileValid(evt){
    const profileValid="(?=.*[a-z])" && 'Одна латинская буква в нижнем регистре'
}
*/

/*
(?=.*[0-9]) - строка содержит хотя бы одно число;
(?=.*[!@#$%^&*]) - строка содержит хотя бы один спецсимвол;
(?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре;
(?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре;
[0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов.*/







/*
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
        year: Joi.number().required().message({'any.required':'Заполните поле год'}),
        description: Joi.string().required().message({'any.required':'Заполните поле описание'}),
        movieId: Joi.string().required().message({'any.required':'Заполните корректно movieId'}),
        nameRU: Joi.string().required().message({'any.required':'Заполните поле название'}),
        nameEN: Joi.string().required().message({'any.required':'Заполните поле название'}),
        thumbnail: Joi.string().required().custom(validateURL).message({'any.required':'Неверная ссылка'}),
        image: Joi.string().required().custom(validateURL).message({'any.required':'Неверная ссылка'}),
        trailer:Joi.string().required().custom(validateURL).message({'any.required':'Неверная ссылка'}),
    }),
});


module.exports = {
    registerValidate,
    loginValidate,
    movieValidate,
    deleteValidate,
    validateURL,
};

*/
