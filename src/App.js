import './App.css';
import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// Layout stuff
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';

// Modal stuff
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

// App level state
import store from './store';
import { Provider } from 'react-redux';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
    // es-lint-disable-next-line
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
