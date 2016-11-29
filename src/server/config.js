const path = require('path')

module.exports = {
    http: {
        port: 8080,
        favicon: path.join(__dirname, '../assets/favicon.ico'),
        static: [
            {
                url: '/build',
                path: path.join(__dirname, '../../build')
            },
            {
                url: '/assets',
                path: path.join(__dirname, '../assets')
            },
            {
                url: '/static',
                path: path.join(__dirname, '../docs')
            }
        ]
    }
}
