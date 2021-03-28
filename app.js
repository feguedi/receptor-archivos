const app = require('express')()

app.use(require('express-fileupload')())

app.get('/', (req, res) => res.send('Hola'))
app.post('/datos', (req, res) => {
    console.log('/datos')
    if (!req.files) {
        console.log('No se enviaron datos')
        return res.send('No se envió nada')
    } else {
        console.log(req.files)
        const { name, mv } = req.files.data
        mv(`./datos/${ name }`, err => {
            if (err) return res.send('Hubo un error al guardar el archivo\n')
        })
        return res.send('Cámara')
    }
})

app.listen(8080, () => console.log('Corriendo en 8080'))
