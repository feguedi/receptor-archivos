# Receptor de archivos

Servidor que escucha una ruta HTTP de un puerto para recibir un archivo.

Con __cUrl__ podemos teclear:

```shell
$ curl -X POST -F "data=@miarchivo.txt" http://localhost:8080/datos
```