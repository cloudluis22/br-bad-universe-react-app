
# Breaking Bad Universe Database v. 1.0 ⚛️

![GitHub package.json version](https://img.shields.io/github/package-json/v/cloudluis22/br-bad-universe-react-app?color=success&logo=files&logoColor=white&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/cloudluis22/br-bad-universe-react-app?logo=GitHub&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/cloudluis22/br-bad-universe-react-app?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/cloudluis22/br-bad-universe-react-app?logo=javascript&style=flat-square)
![GitHub](https://img.shields.io/github/license/cloudluis22/br-bad-universe-react-app?style=flat-square)

**NOTA: Para ver una versión de este archivo en español, por favor mira el archivo README-es.**

This is the Breaking Bad Universe Database, a webapp made with React alongside SASS for sheet styling using **[The Breaking Bad API](https://breakingbadapi.com)**.

This application allows users to search for their favorite Breaking Bad and Better Call Saul characters and read a small
summary about them displayed in cards.

Currently, this application is in it's first release v. 1.0, and therefore, I'm looking forward to [adding more features](#future-changes-and-improvements-to-the-application-💫).

## Running this project in your machine 💻

Although there is the GitHub pages deploy of this application, if you wish to run it locally on your machine for whatever purpose you want, you can do it.

    # Clone this repository.
    $ git clone https://github.com/cloudluis22/br-bad-universe-react-app.git
    $ cd br-bad-universe-react-app

Afterwards, you should reinstall all the node modules and you will be ready to go.

    # Reinstalling modules.
    $ npm install
    # Running the project.
    $ npm start

This project is made with [Create React App](https://create-react-app.dev), so you have full access to all the scripts and everything it includes with it.

## Usage ⚙️

![Main Screen](https://user-images.githubusercontent.com/70856719/132925413-bf750340-9a93-4d36-bdf8-a9fec5276433.PNG)

The default route of the application is the main screen, here you can choose between the two shows.

The footer displayed below always remains there and you can see some links for my GitHub profile, this repo as well as a link for the API webpage.

![Page Example](https://user-images.githubusercontent.com/70856719/132925714-8eebccc9-7891-4181-826e-a934e2341d7e.PNG)

In any of the both shows you will get an interface like this one, on the top of the page is the logo of the selected show and below it the search bar, you can look up for any character
that makes an apparition on that particular series *(Better Call Saul includes re-apparitions)*. If you make a search, you can press the reset button that will appear beside the bar to
bring back all characters again.

<p align="center">
    <img src="https://user-images.githubusercontent.com/70856719/132926283-96a86f17-d03c-407a-8985-a2fc518ac1cc.PNG" >
</p>

Pressing on any characters card will pop-up a little window with some information about it, such as the actor/actress who portrays that role, birthday, nicknames and other stuff. You can exit
the window by using the cross in the top-right corner of the window or just pressing outside of it.

If you want to switch to the other show, just use the arrow at the top-right of the page.

The responsive design for this project is currently not the best yet, but will continue to improve within the next releases of this application.

<p align="center">
    <img src="https://user-images.githubusercontent.com/70856719/132927859-034eb61f-bfa4-4893-8ab1-3807508f9f21.png" width="350" height="350">
    <img src="https://user-images.githubusercontent.com/70856719/132927889-58dd1646-7522-4a40-9ed9-d32054308f89.png" width="200" height="250">
    <img src="https://user-images.githubusercontent.com/70856719/132928233-ec478c29-7645-4094-a8be-3cc9000f283a.png" width="100" height="150">
<p/>

## Future changes and improvements to the application 💫

Starting from version 1.0, this is a list of other features and fixes I want to do to the application.

- [ ] Add a dark mode to the modals.
- [ ] Adding a navigation bar.
- [ ] Improved styling.
- [ ] Add Random Deaths screen from the API functionality.
- [ ] Add Random Quotes screen from the API functionality.