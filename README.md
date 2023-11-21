# PedidosApp

## ¡Bienvenida/o!

En este repositorio, encontrarás un proyecto que es un sistema web desarrollado en React y Redux que proporciona una interfaz para la autenticación de usuarios y la gestión de pedidos. El sistema incluye una pantalla de inicio de sesión, una lista de pedidos y utiliza Redux para gestionar el estado de la aplicación.

## Tecnologías Utilizadas

- **React.js:** Biblioteca de JavaScript para construir interfaces de usuario interactivas.
  
- **React-redux:** Librería que conecta React con Redux para gestionar el estado de la aplicación de manera eficiente.

- **Node.js:** Entorno de ejecución para JavaScript del lado del servidor.

- **ExpressJS:** Framework para crear aplicaciones web y APIs robustas.

## Funcionalidades

- **Autenticación de Usuario:**
  - Permite a los usuarios autenticarse como administrador (`admin`) o usuario (`user`).
  - Los datos de usuario se gestionan mediante Redux para distinguir entre roles y almacenar el estado de autenticación.

- **Lista de Pedidos:**
  - Muestra una lista de pedidos con información relevante.
  - El usuario administrador puede ver y eliminar cualquier pedido.
  - El usuario normal solo puede ver y eliminar sus propios pedidos.

- **Gestión de Estado con Redux:**
  - Utiliza Redux para gestionar el estado global de la aplicación.
  - Acciones y reducers específicos para la autenticación y la gestión de pedidos.


## Instalar Dependencias

### Front-End

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema antes de seguir estos pasos.

```bash
# Instalar dependencias del Front-End
npm install @reduxjs/toolkit@1.9.7
npm install @testing-library/jest-dom@5.17.0
npm install @testing-library/react@13.4.0
npm install @testing-library/user-event@13.5.0
npm install bootstrap@5.3.2
npm install react@18.2.0
npm install react-dom@18.2.0
npm install react-redux@8.1.3
npm install react-router-dom@6.18.0
npm install react-scripts@5.0.1
npm install web-vitals@2.1.4
```
```bash
# Instalar dependencias del Back-End
npm install cors@2.8.5
npm install express@4.18.2
npm install morgan@1.10.0
npm install mysql@2.18.1
npm install nodemon@3.0.1
```


## Configuración del Entorno de Desarrollo

### Backend con XAMPP

Este proyecto utiliza XAMPP como entorno de desarrollo para el backend. Asegúrate de seguir estos pasos para configurar adecuadamente el servidor:

1. **Instalación de XAMPP:**
   - Descarga e instala [XAMPP](https://www.apachefriends.org/index.html) según las instrucciones del sitio web oficial.

2. **Iniciar el Servidor Apache y MySQL:**
   - Inicia XAMPP y asegúrate de que los servicios de Apache y MySQL estén activos.
### Base de Datos con MySQL Workbench o phpMyAdmin

Este proyecto utiliza MySQL como sistema de gestión de bases de datos. Puedes administrar la base de datos de las siguientes maneras:

#### MySQL Workbench

1. **Instalación de MySQL Workbench:**
   - Descarga e instala [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) según las instrucciones del sitio web oficial.

2. **Conexión a la Base de Datos:**
   - Abre MySQL Workbench y configura una nueva conexión utilizando los detalles de tu servidor MySQL.

#### phpMyAdmin (Alternativa)

1. **Acceder a phpMyAdmin:**
   - Si prefieres utilizar phpMyAdmin, abre tu navegador y accede a `http://localhost/phpmyadmin/`.

2. **Inicio de Sesión en phpMyAdmin:**
   - Inicia sesión utilizando las credenciales de tu servidor MySQL configuradas en XAMPP.
