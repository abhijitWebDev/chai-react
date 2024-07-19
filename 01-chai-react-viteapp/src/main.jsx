
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// function MyApp() {
//   return <h1>This is a app</h1>;
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click to visit google',
// }

// const ReactElement = React.createElement(
//   'p',
//   {href: 'https//google.com', target: '_blank'},
//   'click me to visit google' 
// )

// const anotherElement =  (<a href='https://google.com' target='_blank' rel='noopener noreferrer'>Visit google</a>)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />
 
);
