 <h1 align="center">MOVIE BROWSER 🎬 🆕 📱 💻<h1>

<p align="center">
<a  href="https://jaroslawogonowski.github.io/movie-browser/">
➡ Check out the DEMO ⬅
</a>
</p>

## The project was created in cooperation with:
<p><a href="https://github.com/JaroslawOgonowski"> Jarosław Ogonowski</a></p>
 <p>and <a href="https://github.com/saimoNN37">Szymon Młyński.</a></p>


## Used technologies, languages, libraries and features:
<div style="display:flex; flex-wrap: wrap;">
<img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png" alt="React" width="80px" style="margin: 10px">
<img src="https://www.styled-components.com/atom.png" alt="styled-components" width="80px" style="margin: 10px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JavaScript" height="80px" style="margin: 10px">
<img src="https://live.staticflickr.com/7306/16407404782_8b9c57eab3_w.jpg" alt="es6" width="80" style="margin: 10px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS3" width="80" style="margin: 10px">
<img src="https://reactrouter.com/twitterimage.jpg" alt="reactrouter" height="80px" style="margin: 10px">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/collections/github-pages-examples/github-pages-examples.png" alt="GitHub pages" height="80px" style="margin: 10px">
</br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCI1yTWEJhL2OoD4f-5JxhUcxPA-AVikenrA&usqp=CAU" alt="HTML" height="80px" style="margin: 10px">
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1626366102185/9lUF4ajJG.png" alt="Redux-toolkit" height="80px" style="margin: 10px">
<img src="https://user-images.githubusercontent.com/36799589/69492522-e6b41b80-0ec9-11ea-90d3-b37bacad7ca8.png" alt="Redux-saga" height="80px" style="margin: 10px">
</div>
  
- react-debounce-input,
- useEffect, useState,  custom hooks,
- useDispatch, useSelector,
- URLSearchParams, useHistory, useLocation
- fetch,
- async, await,
- redux-saga/effects,
- GlobalStyle, theme,
- Route, HashRouter, Redirect, Switch
- media queries

## API 
<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB" height="60px" >
</br>
</br>
<a href="https://www.themoviedb.org/"> API URL: https://www.themoviedb.org/</a>

The site was created using the TMDB open API. 

Extremely extensive documentation allows you to optimize queries in the scope
popular movies and people, searching for phrases, individual movie or person and the size of each image. 
We run queries asynchronously- they have separate states, statuses and sagas - thanks to the router, all fetched information is reflected in the current URL address. 

## How it works? 🔎✅
### Main index 🛠
We started, of course, by creating a foundation using the  [Create React App](https://github.com/facebook/create-react-app), and the main application (App.js) we wrapped the store-provider- which maintains the state of the entire application- the store includes all reducers extracted from individual slices.
### APP ⚙ 
App is wrapped with theme provider so that even on error page you can use GlobalStyle and theme.
The application is connected to ErrorBoundary, which catches any errors in the application and returns us a page prepared in accordance with the project with an appropriate message for the user, if everything goes as it should, we get the target content of the page. 

#### React-router 🔃
The next layer is react-router. It manages application paths and reflects them in the URL, making navigation on the site very convenient for users and developers.
#### Header ▶
Inside, we see our main header which is always visible on the page and is the main navigation - it has two main paths - movies and people that define the downloaded and rendered content and also affect the input which, depending on the selected path, searches for people or movies.
#### RootSaga 🔁
Of course, we use the root Saga, which is basically a set of all other Sagas that are responsible for the correct flow of information from the API.

#### Other 🤵🎬
individual paths fork and- depending on the needs- send queries to the api for specific phrases - using search, subsequent pages using pagination or individual people and movies by extracting their id.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
