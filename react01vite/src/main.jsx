import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://www.google.com/",
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// function MyApp(){
//     return(<>
//     <h1>Custom React App</h1>
//     </>)
// }

// const AnotherElement = (
//     <a href='https://www.google.com' target='_blank'>Visit Google</a>
// )



const Button1 = React.createElement('button','','Like');


ReactDOM.createRoot(document.getElementById('root')).render(Button1);
