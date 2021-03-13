const getIsAuthenticated = (state) => state.auth.isAuthenticated
const userName = (state) => state.auth.user.name

export default {
    getIsAuthenticated,
    userName,
}
