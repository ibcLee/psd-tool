import path from 'path'

export default {
    common: {
        autoPrefix: {
            enable: true,
            options: {
                browsers: ['last 3 versions']
            }
        }
    },
    build: {
        env: {
            NODE_ENV: '"production"',
        },
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist/psdTool'),
    },
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        host: 'localhost',
        port: 8080,
        autoOpenBrowser: false,
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false,
    }
}