const path = require('path');

module.exports = {
    mode:"development",
    entry:{
        app:'./src/app'
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    }
}