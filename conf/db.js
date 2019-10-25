const env = process.env.NODE_ENV  //获取环境变量

let MYSQL_CONF
let REDIS_CONF

if (env === 'dev') {
    //mysql
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: 'password',
        database: 'myblog'
    }

    //redis
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: 'password',
        database: 'myblog'
    }

    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}
module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}