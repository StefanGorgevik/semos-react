# semos-react
 Semos react


file .babelrc --> 


{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
 
to run --> npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

changes in webconfig --> add module: rules:

npm i react-dom

in react wrap elements <React.Fragment>
            <div>Hello World</div>
            <p>Hello</p>
        </React.Fragment>

every component in separate file --. export default User
import User from './User' <-- in main file

add a loader -->
https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a


--------------------------------------------------------------------------------
4

https://www.npmjs.com/package/source-map-loader

https://www.npmjs.com/package/react-router-dom

import { BrowserRouter as Router, Route, Link } from "react-router-dom"
--------------------------------------------------------------------------------

5

-------------------------------------

constructor() {}


LIFECYCLE METHODS

componentWillMount() {} xxxxx

render() {}

componentDidMount() {}  



se povikuva posle promena vo state
componentDidUpdate() {}   xxxxx 

se povikuva posle promena vo props 
componentWillReceiveProps() {} 

componentWillUnmount() {} 
componentDidUnmount() {} 



https://www.npmjs.com/package/axios