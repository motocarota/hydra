import app from './App'

const port = process.env.PORT || 9000

app.listen(port, (err: any) => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.log(err)
  }

  // eslint-disable-next-line no-console
  return console.log(`server is listening on ${port}`)
})
