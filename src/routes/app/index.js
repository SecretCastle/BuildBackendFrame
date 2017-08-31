module.exports = {
    path:'app',
    getChildRoutes(location, callback) {
        require.ensure([], function (require) {
            callback(null, [
                require('./routes/dashboard'),
                require('./routes/product')
            ])
        })
    },

    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./components/MainApp'))
        })
    }
}