module.exports = {
    path:'prd_add',
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./components/ProductAdd'))
        })
    }
}