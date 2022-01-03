import {createContext} from "react";

const cuc = new Map()

cuc.set('loggedIn', false);
/*
{
    id: '',
    email: '',
    loggedIn: false
});
*/

export const CurrentUserContext = createContext(false);
