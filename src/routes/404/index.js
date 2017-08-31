module.exports = {
    path:'404',
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./components/404'))
        })
    }
}