
# Breaking Bad Universe Database v. 1.0 ⚛️

![GitHub package.json version](https://img.shields.io/github/package-json/v/cloudluis22/br-bad-universe-react-app?color=success&logo=files&logoColor=white&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/cloudluis22/br-bad-universe-react-app?logo=GitHub&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/cloudluis22/br-bad-universe-react-app?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/cloudluis22/br-bad-universe-react-app?logo=javascript&style=flat-square)
![GitHub](https://img.shields.io/github/license/cloudluis22/br-bad-universe-react-app?style=flat-square)

Esta es la Breaking Bad Universe Database, una aplicación web hecha con React junto con SASS para el estilizado utilizando la **[Breaking Bad API](https://breakingbadapi.com)**.

Esta aplicación permite a los usuarios a buscar por su personaje favorito de Breaking Bad o de Better Call Saul y leer un pequeño resumen de ellos mostrado en tarjetas.

Actualmente, esta aplicación esta en su primer lanzamiento v. 1.0, por lo tanto, planeo [agregar más características](#futuros-cambios-y-mejoras-💫).

## Corre esta aplicación en tu máquina 💻

Aunque hay un despliegue de esta aplicación en GitHub pages, si deseas correrlo por cualquier motivo en tu ordenador, eres libre de hacerlo.

    # Clona este repositorio.
    $ git clone https://github.com/cloudluis22/br-bad-universe-react-app.git
    $ cd br-bad-universe-react-app

Después, deberás reinstalar los modulos de node y listo.

    # Reinstalando modulos.
    $ npm install
    # Corriendo el proyecto.
    $ npm start

Este proyecto esta hecho con [Create React App](https://create-react-app.dev), así que tienes acceso total a los scripts y todo lo demás que se incluye con la herramienta.

## Uso ⚙️

![Main Screen](https://user-images.githubusercontent.com/70856719/132925413-bf750340-9a93-4d36-bdf8-a9fec5276433.PNG)

La ruta por defecto de la aplicación es la pantalla principal, aquí puedes seleccionar entre las dos series.

El pie de página ubicado debajo siempre permanece ahí y puedes ver algunos enlaces que te llevarán a mi perfil de GitHub, este repositorio así como la página oficial de la API.

![Page Example](https://user-images.githubusercontent.com/70856719/132925714-8eebccc9-7891-4181-826e-a934e2341d7e.PNG)

En cualquiera de las dos series, obtendras una interfaz similar a esta, en la parte superior de la página verás el logo correspondiente al show y debajo una barra de búsqueda, con ella puedes buscar a cualquier personaje que haga una aparición en esa serie en particular *(Better Call Saul incluye reapariciones)*. Si realizas una búsqueda, puedes presionar el botón de reset que aparecerá a un lado de la barra para traer de vuelta a todos los personajes

<p align="center">
    <img src="https://user-images.githubusercontent.com/70856719/132926283-96a86f17-d03c-407a-8985-a2fc518ac1cc.PNG" >
</p>

Presionar en cualquiera de los personajes hará aparecer una pequeña ventana con algo de información sobre el personaje; desde el actor/actriz que lo interpretan, apodos, fecha de nacimiento entre otras cosas. Puedes salir de la ventana ya sea usando la cruz roja de la esquina derecha superior de la ventana o simplemente presionando fuera de esta.

Si quieres cambiar de serie, solo presiona la flecha localizada en la parte superior derecha de la página.

El diseño responsive de este proyecto, aunque aún no es el mejor, continuará mejorando su diseño conforme las próximas actualizaciones de esta aplicación.

<p align="center">
    <img src="https://user-images.githubusercontent.com/70856719/132927859-034eb61f-bfa4-4893-8ab1-3807508f9f21.png" width="350" height="350">
    <img src="https://user-images.githubusercontent.com/70856719/132927889-58dd1646-7522-4a40-9ed9-d32054308f89.png" width="200" height="250">
    <img src="https://user-images.githubusercontent.com/70856719/132928233-ec478c29-7645-4094-a8be-3cc9000f283a.png" width="100" height="150">
<p/>

## Futuros cambios y mejoras 💫

Empezando desde la versión 1.0, esta es la lista de otras características y arreglos que quiero hacer a la aplicación.

- [ ] Añadir un modo oscuro a las ventanas modales.
- [ ] Añadir una barra de navegación.
- [ ] Mejorar los estilos.
- [ ] Añadir una página de muertes aleatorias usando la funcionalidad de la API.
- [ ] Añadir una página de citas aleatorias usando la funcionalidad de la API.