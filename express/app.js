const express = require('express')
const data = require('./data')
const app = express()
let useCors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method == 'OPTIONS') {
    return res.send()
  }
  next()
}
app.use(useCors) //使用cors,与发送普通ajax请求无异。唯一需要注意的是，需要携带cookie信息时，需要将withCredentials设置为true即可。
app.get('/recursiondata', (req, res) => {
  res.json({
    code: 0,
    data: data.recursiondata
  })
})
app.get('/myTreedata', (req, res) => {
  res.json({
    code: 0,
    data: data.myTreeData
  })
})
let server = app.listen(9999, () => {
  let host = server.address().address
  let port = server.address().port
  console.log(`应用启动成功,地址是${host}${port}`)
})
