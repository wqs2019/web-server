const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryoto')

const login = async (username, password) => {
    username = escape(username)

    //加密密码
    // password = genPassword(password)
    password = escape(password)
    const sql = `
        select username,realname from users where username=${username} and password=${password};
    `
    const rows = await exec(sql)
    return rows[0] || {}

}
const register = (username, password, realname) => {
    username = escape(username)
    password = escape(password)
    realname = escape(realname)
    const sql = `
        insert into users (username,password,realname) values (${username},${password},${realname});
    `
    return exec(sql).then(data => {
        console.log(data);
        return {
            id: data.insertId
        }
    })
}
module.exports = {
    login,
    register
}