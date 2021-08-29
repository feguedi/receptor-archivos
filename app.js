const fs = require('fs')
const path = require('path')
const app = require('express')()

const directorio = 'datos'

const directorioRelativo = path.join(__dirname, directorio)
console.log(directorioRelativo)

const existeDirectorio = fs.existsSync(directorioRelativo)
!existeDirectorio && fs.mkdirSync(directorioRelativo)

app.use(require('express-fileupload')())

app.get('/', (req, res) => res.send('Hola'))
app.post('/datos', (req, res) => {
    if (!req.files) {
        console.log('No se enviaron datos')
        return res.send('No se envió nada')
    } else {
        const { name, mv } = req.files.data

        mv(`${directorioRelativo}/${ name }`, err => {
            console.error(err)
            if (err) return res.send('Hubo un error al guardar el archivo\n')
        
            return res.send('Cámara')
        })
    }
})

app.listen(8080, () => console.log('Corriendo en 8080'))
