import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
