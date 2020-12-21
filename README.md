
### `Developement Mode`

 #### `npm install --save`
 #### `npm start`
After that Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Docker Images Production`
 #### `docker build -t frontend:latest .` then after image creation
 #### `docker run -d -p 3000:80 frontend:latest` then point it to  [http://localhost:3000](http://localhost:3000)
