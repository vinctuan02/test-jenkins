import express from 'express'

const app = express()

app.get('/', (req, res) => {
    console.log("hello gdagddagworldgdsa");
    res.json('Hihihi')
})

app.listen(8080, () => {
    console.log("App is running ......");
})