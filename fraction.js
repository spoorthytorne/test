// all fraction code will go here
E html>
<html>
   <head>
   <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
     <script>
       class App extends React.Component {
         render(){
           let h1Element = 
             React.createElement('h1',{},
                                 'Hello world!');
           return h1Element;
         }
       }
       function load(){
         let appElement = React.createElement(App);
         let rootElement = document.getElementById('root');
         ReactDOM.render(appElement,rootElement);
       }
     </script>
   </head>

  <body onload="load();">
    <div id="root"></div>
  </body>
  </html>
