Para cargar correctamente la base de datos, hay que seguir unos pasos muy sencillos:

1- Instalar MongoDB Community Server, ya que usaremos la base de datos en local.

2- Instalar MongoShell, donde crearemos la base de datos y realizaremos las querys.

3- Abrir cualquier terminal en el ordenador, e insertar el comando `mongosh`. También se puede usar directamente la consola integrada de MongoDB Compass, que ya usa mongo shell por defecto.
Al usar el comando `mongosh` deberia salirnos en la consola algo asi:
test>

NOTA- Si la consola no reconoce el comando, es posible que tengas que configurar las variables de entorno para añadir el PATH.
    A- Para ello, en el buscador de windows escribimos "variables de entorno", y le damos click a "editar las variables de entorno del sistema".

    B- Una vez abierto, buscamos el botón donde pone "variables de entorno" y le damos click.

    C- En la ventana emergente nos saldrán las variables de entorno del USUARIO, y las del SISTEMA. Buscamos en las variables del SISTEMA la variable llamada "path", la seleccionamos y le damos click a EDITAR mas abajo.

    D- En la nueva ventana emergente, le damos click a "NUEVO", y añadimos la ruta donde tenemos instalado nuestro MongoShell. La ruta debería de ser algo así sin las comillas: "C:\Program Files\MongoDB\mongosh\bin".

4- Insertamos en la consola el comando `load()` con la ruta donde esté el archivo optica.js dentro de los paréntesis:
`load('C:/Users/Pepe/Desktop/optica.js')` 

NOTA- Importante la orientación de las barras al insertar la ruta del archivo. Si las ponemos así `\`, Mongosh nos mandará a paseo. Revisar que las barras estén así `/`.

Listo.

