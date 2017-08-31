module.exports = {
    path:'product',
    getChildRoutes(location, callback) {
        require.ensure([], function (require) {
            callback(null, [
                require('./routes/productList'),
                require('./routes/productAdd')
            ])
        })
    },
}