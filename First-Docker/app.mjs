import express from 'express'

const app = express()

const connection = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 3000);
  })

  return promise
}

await connection()

app.get('/', (req, res) => {
  return res.send('<h2>Hi!</h2>')
})

app.listen(3000)
