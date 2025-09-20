//Importación de módulo externo: Se utiliza para importar módulos instalados desde npm u otros repositorios.
const os = require('os'); // Módulo nativo de Node.js para obtener información del sistema operativo
console.log(`Sistema Operativo: ${os.type()}`);
console.log(`Plataforma: ${os.platform()}`);
console.log(`Arquitectura: ${os.arch()}`);
console.log(`Memoria Total: ${os.totalmem()} bytes`);
console.log(`Memoria Libre: ${os.freemem()} bytes`);