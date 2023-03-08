import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from 'components/App/App';
// import { Media } from 'components/Media/Media';
import { persistor, store } from 'redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          {/* <Media> */}
          <App />
          {/* </Media> */}
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
