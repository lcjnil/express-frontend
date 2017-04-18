const isDebug = process.env.NODE_ENV === 'development'

const config = {
  server: isDebug ? 'http://localhost:3000' : ''
}

export default config