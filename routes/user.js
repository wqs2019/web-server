var router = require('koa-router')()
const { login, register } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.post('/login', async function (ctx, next) {
  const { username, password } = req.body

  const data = await login(username, password)
  if (data.username) {

    //登陆成功，写入session
    ctx.session.username = data.username
    ctx.session.realname = data.realname

    ctx.body = new SuccessModel()
    return
  }
  ctx.body = new ErrorModel('登陆失败')

});

// router.get('/login-test', (req, res, next) => {
//   if(req.session.username){
//     res.json({
//       errno:0,
//       msg:'done'
//     })
//     return
//   }
//   res.json({
//     errno:-1,
//     msg:'error'
//   })
// })

// router.get('/session-test', (req, res, next) => {
//   const session = req.session
//   if (session.viewNum == null) {
//     session.viewNum = 0
//   }
//   session.viewNum++
//   res.json({
//     viewNum: session.viewNum
//   })
// })

module.exports = router;
