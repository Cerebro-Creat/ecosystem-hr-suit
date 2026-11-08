# Ecosystem HR Suite · servidor de conexión

Suite integral de RRHH: registro de jornada inalterable, turnos, ausencias, nóminas, documentos e Inspección de Trabajo.
Creado por **THE CEREBRO CREATIVE** · © 2026 · Obra registrada en Safe Creative. Licencia de uso no transferible: prohibida su copia, reventa o redistribución.

Este repositorio crea **el servidor de conexión de una empresa** que ha comprado una licencia. Sin licencia firmada por THE CEREBRO CREATIVE el programa no se puede activar. Cada empresa elige dónde alojarlo:

| Opción | Coste | Cómo |
| --- | --- | --- |
| **Cloudflare** (recomendada) | Gratis, sin cuotas | Botón «Crear el servidor gratis» del PDF de tu licencia. Necesitas una cuenta gratuita de Cloudflare y otra de GitHub. |
| Render | Cuota mensual de Render | Botón «Render» del PDF. Región Frankfurt (UE). |
| Servidor propio | El de tu servidor | Con tu informático: Docker (`Dockerfile`) o Node.js 22 (`node server.js`), detrás de HTTPS. Variables: `DATA_DIR`, `PORT`, `TRUST_PROXY=1`. |

Después, abre la dirección de tu servidor, entra en **Programa de la empresa** y pega tu clave de licencia.

Los datos de la empresa se guardan en su propio ordenador. Este servidor solo transporta mensajes cifrados de extremo a extremo entre ese ordenador, los móviles de la plantilla y las pantallas de fichaje: no puede leerlos.
