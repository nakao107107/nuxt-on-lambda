const { app } = require('./app')
const { nuxt, config } = require('./middlewares/nuxt-middleware')
const { Builder } = require('nuxt')
const consola = require('consola')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

const start = async () => {
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
