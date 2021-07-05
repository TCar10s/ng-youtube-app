# YouTubeApp

<div align="center">
  <h3>
    <a href="https://ng-youtube-app.netlify.app/" target="_blank">
      Demo
    </a>
  </h3>
</div>

## Overview

![screenshot](https://raw.githubusercontent.com/TCar10s/ng-youtube-app/main/src/assets/img/screenshot-desktop.jpeg)

## Notas

Para poder visualizar los videos no olvides proporcionar tu API Key de Google cloud platform,
para ello debes crear un nuevo proyecto y habilitar las APIS y servicios de YouTube Data API
v3.
<a href="https://www.pluginsxbmc.com/2020/09/como-crear-una-api-para-youtube.html" target="_blank">
    Post con los pasos para crear la API.
</a>

Uan vez creado el proyecto y tengas el API key, podrás generar el playlistId desde el apartado
de playlistItems que se encuentra
<a href="https://developers.google.com/youtube/v3/docs">
    en la documentacion de la API de YouTube.
</a>
Luego proporcionas tus credenciasles a las varibles que se encuentran en el archivo youtube.service.ts:
```
 this.youtubeUrl = 'https://www.googleapis.com/youtube/v3/';
 this.apiKey = 'your-api-key';
 this.playlistId = 'your-playlistId';
```

Recuerden reconstruir los módulos de Node.

```
npm install
```

Ejecute `ng serve` para un servidor de desarrollo. Vaya a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

```
ng serve
```

## Contact

- Website [www.tutoscarlos.xyz](https://www.tutoscarlos.xyz)
- GitHub [@TCar10s](https://https://github.com/TCar10s)
- Twitter [@Tutos_Carlos11](https://twitter.com/Tutos_Carlos11)
