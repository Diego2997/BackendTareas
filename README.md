# Proyecto de Backend - Tareas

Este es el proyecto de backend para una aplicación basada en el modelo "Tarea". El objetivo de este proyecto es proporcionar una API RESTful para administrar y obtener información sobre tareas.

## Tecnologías utilizadas

El proyecto se ha desarrollado utilizando las siguientes tecnologías:

- Node.js: Plataforma de tiempo de ejecución de JavaScript.
- Express: Marco de aplicación web de Node.js para construir la API RESTful.
- Express Validator: Middleware para validar y sanitizar datos de entrada.
- Mongoose: Biblioteca de modelado de objetos de MongoDB para Node.js.
- Morgan: Middleware de registro de solicitudes HTTP para Node.js.
- Cors: Middleware para habilitar el intercambio de recursos entre diferentes dominios.
- Dotenv: Módulo para cargar variables de entorno desde un archivo .env.
- Babel CLI: Herramienta para transpilar código ECMAScript 6+ a versiones compatibles con Node.js.
- Babel Preset Env: Preset de Babel para transpilar el código a la versión adecuada de JavaScript.

## Instalación

Sigue los siguientes pasos para configurar y ejecutar el proyecto en tu entorno local:

1. Clona este repositorio en tu máquina utilizando el siguiente comando:

```
git clone https://github.com/Diego2997/BackendTareas.git
```

2. Instala las dependencias del proyecto:

```
npm install
```

3. Inicia el servidor:

```
npm start
```


¡El servidor de backend ahora está en funcionamiento!

## Uso

La API proporciona las siguientes rutas para interactuar con el modelo "Color":

- `GET /api/tareas`: Obtiene una lista de todos las tareas.
- `POST /api/tareas`: Crea una nueva tarea.
- `DELETE /api/tareas/:id`: Elimina una tarea existente.

Asegúrate de utilizar un cliente HTTP adecuado (por ejemplo, Postman) para realizar solicitudes a la API.


## Autor
DIEGO MERCADO