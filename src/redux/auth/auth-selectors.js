const getIsAuthenticated = (state) => state.auth.token
const userName = (state) => state.auth.user.name

export default {
    getIsAuthenticated,
    userName,
}
