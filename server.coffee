path = require('path')
http = require('http')
bodyParser = require('body-parser')
favicon = require('serve-favicon')
cookieSession = require('cookie-session')
port = process.argv[2] or process.env.PORT or 4444
express = require('express')
url = require('url')
app = express()

# all environments

app.set 'port', port
app.use express.static(path.join(__dirname, 'public'))
#app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
app.use bodyParser.json()
# to support JSON-encoded bodies
app.use bodyParser.urlencoded(extended: true)
#Required inorder to receive the forwarded headers and the ip address of the actual client
app.enable 'trust proxy'
app.set('view engine', 'ejs');

app.get '/diagnostic', (req, res) ->
  console.log 'server | /diagnostic called..'
  res.send 200, 'Environment: ' + app.get('env')
  return

# Start Express
console.log 'PORT: ' + app.get('port')
http.createServer(app).listen app.get('port'), ->
  console.log 'Express server listening on port ' + app.get('port')
  console.log 'Phone Accept Dialer has started on port: ' + app.get('port')
  return
