const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 5500

app.use(express.json())

app.use(require("./routes/book.route"))
app.use(require('./routes/coment.route'))
app.use(require('./routes/genre.route'))
app.use(require('./routes/user.route'))




mongoose.connect("mongodb+srv://abu-hanifa:lom0895311@intocode.qw0fyj8.mongodb.net/books116").then(() => 
    console.log('успешно')).catch(() => console.log('ошибка'))

    app.listen(port, () => {
        console.log(`сервер http://localhost${port}`);
    })