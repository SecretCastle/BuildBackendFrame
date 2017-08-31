module.exports = {
    path:'prd_list',
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./components/ProductList'))
        })
    }
}