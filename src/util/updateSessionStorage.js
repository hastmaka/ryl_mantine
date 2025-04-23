import PropTypes from "prop-types";

const setStore = (key, data) => sessionStorage.setItem(key, JSON.stringify(data))

export const updateSessionStorage = (key, data) => {
    if (sessionStorage.getItem(key) === null) {
        sessionStorage.setItem(key, JSON.stringify({}))
    }

    const useCase = {
        user: () => {
            const {token, email, uid, ...rest} = data;
            setStore(key, rest)
        },
        lang: () => {
            setStore(key, data)
        }
    }


    useCase[key]()
};

updateSessionStorage.prototype = {
    key: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
}
