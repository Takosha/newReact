export const LOGIN = 'LOGIN';


export const onLogin = (user) => {
    return {
        type: LOGIN,
        payload: user,
    }
}