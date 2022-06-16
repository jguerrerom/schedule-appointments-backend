/**
* @class
* =============================================================================================================
* Desarrollado Por    		: Juan Carlos Guerrero Maldonado.
* Fecha de Creación 		: 15 Junio 2022
* Lenguaje Programación 	: Node.js, express
* Producto o sistema    	: Schedule-appointments
* Tipo                      : Main - Index del servidor API
* =============================================================================================================
* Versión Descripción
* [1.0.0.0] Main principal del servidor
* =============================================================================================================
* MODIFICACIONES:
* =============================================================================================================
* Versión Fecha    		Autor – Empresa                     Descripción
* ------- ------------- ---------------------------------   -------------------------------------------------------
* 
* =============================================================================================================
*/

//--------------------
//  Crear el servidor de express
//--------------------
const express = require('express');
const app = express();

//--------------------
//- Habilitar los dominios que pueden conectarse
//--------------------
const cors = require('cors');

//--------------------
//--Configurar cors
//--------------------
app.use( cors() );


//--------------------
//-- Para leer variables de entorno requiere instalar el paquete dotenv
// npm install dotenv
//--------------------
require('dotenv').config();


//---------------------
//-- Inicializar el servidor
//---------------------
app.listen(process.env.SERVER_PORT, () => {
    console.log('Schedule-appointments, servidor inicializado en el  puerto: ' , process.env.SERVER_PORT);

});
