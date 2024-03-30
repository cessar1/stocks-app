# Stocks App

Stocks App es una interfaz web que te permite visualizar la cotización de acciones en tiempo real y de manera histórica.

## Instalación

1. Clona este repositorio en tu máquina local:

```bash

  git clone https://github.com/cessar1/stocks-app.git

```

2. Navega a la carpeta del proyecto.

```bash
  cd stocks-app

```

3. Instala las dependencias utilizando npm o yarn:

```bash
 npm install
```

## Uso

Asegurate de crear un archivo `.env` en la raíz del proyecto, con los siguientes valores:
VITE_API_KEY = 'tu api key' obtenla registrandote en htpps:https://www.twelvedata.com/

Luego puedes:

1. Inicia la aplicación en modo de desarrollo:

```bash
  npm run dev

```

2. Abre tu navegador web y visita http://localhost:5173 para ver la aplicación.

## Características

### Página de Lista de Acciones

- Tabla paginada con todas las acciones disponibles.
- Columnas: Símbolo, Nombre, Moneda y Tipo.
- Los símbolos de las acciones son enlaces a sus detalles.
- Filtros de búsqueda por nombre y por símbolo.
- Cabecera con los datos de la acción seleccionada.
- Parámetros para graficar la cotización de la acción.
  - Tiempo Real: Muestra la cotización actual con actualizaciones automáticas.
  - Histórico: Muestra la cotización en un rango de fechas y horas.
  - Intervalo: Define el intervalo de tiempo para el gráfico (1 minuto, 5 minutos o 15 minutos).

## Tecnologías Utilizadas

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Vite: Herramienta de compilación rápida para proyectos web modernos.
- Redux Toolkit: Biblioteca para manejar el estado de la aplicación de manera eficiente.
- React Router: Enrutador para aplicaciones de React.
- Highcharts: Biblioteca de gráficos interactivos para visualización de da
