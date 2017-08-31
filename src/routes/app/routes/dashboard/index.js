module.exports = {
    path:'dashboard',
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./components/DashBoard'))
        })
    }
}