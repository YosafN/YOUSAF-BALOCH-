//https://github.com/MoonContentCreator/BixbyBot-Md/blob/main/server.js#L39



import express from 'express'
import { createServer } from 'http'
import path from 'path'
import { Socket } from 'socket.io'
import { toBuffer } from 'qrcode'
import fetch from 'node-fetch'

function connect(conn, PORT) {
let app = global.app = express()

let server = global.server = createServer(app)
let _qr = 'QR invalido'

conn.ev.on('connection.update', function appQR({ qr }) {
if (qr) _qr = qr
})

app.use(async (req, res) => {
res.setHeader('content-type', 'image/png')
res.end(await toBuffer(_qr))
})
  
server.listen(PORT, () => { console.log('App listened on port', PORT) })}

function pipeEmit(event, event2, prefix = '') {
let old = event.emit
event.emit = function (event, ...args) {
old.emit(event, ...args)
event2.emit(prefix + event, ...args)
}
return {
unpipeEmit() {
event.emit = old
}}}



export default connect