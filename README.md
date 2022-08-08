# React Wordle

Boardle is a basic implementation of Wordle using React. There is no limit to the number of games you can play on any given day and you can restart your game at any time.

![Demo Preview](./demo-preview.gif?raw=true)

## Features

- [x] React 18
- [x] TypeScript
- [x] Theming using Styled Components
- [x] Dark mode
- [x] Recoil for state management
- [X] Progressive Web App
- [ ] History of winning and losing streaks 

## Demo

You can see the application in action at https://iamgbsmith.github.io/react-wordle

## Getting started

Clone the repo:

```shell
git clone https://github.com/iamgbsmith/react-wordle
```

Build the app:

```shell
cd react-wordle
yarn install
```

Star the app:

```shell
yarn start
```

Browse to the application at http://localhost:3000

## Other details

Favicon generated using https://favicon.io/favicon-generator/ and the Lobster font.

### Creating a PWA

A production build will allow you to install Boardle as a Progressive Web App (PWA) for offline play.

You can create a production build for a React application using:

```shell
yarn run build
``` 

The output of this will be static content generated in the `/build` directory with CSS, JavaScript, and media files contained in `/build/static`.

Deploy the content in `/build` to a web server or run locally using `serve` as follows:

```shell
serve -s build
```

Browse to the application at http://localhost:3000 using Chrome, Edge, or Brave on a desktop device.

Click on the "Install Boardle" icon in the address bar.
