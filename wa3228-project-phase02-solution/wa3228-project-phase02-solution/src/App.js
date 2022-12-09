import React, { useState, useEffect } from 'react';
import './App.css';
import {CustomerList} from'./components/customer-list.js'
import {CustomerAddUpdate} from './components/customer-add-update.js'

export function App(params) {
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [selection, setSelection] = useState(-1);
  const [customers, setCustomers] = useState([]);

  const getCustomers = function () {
    fetch('http://localhost:4000/customers')
      .then(response => response.json())
      .then(data => {
        setCustomers(data)
      }
      );
  };

  useEffect(() => { getCustomers() }, [selection, refreshFlag]);

  const refresh = function (noChanges = false) {
    if (!noChanges) {
      setRefreshFlag(refreshFlag + 1);
    }
    setSelection(-1);
  }
  return (
    <div>
      <CustomerList
        customers={customers}
        selection={selection}
        setSelection={setSelection}
      />
      <CustomerAddUpdate
        refresh={refresh}
        selection={selection}
        setSelection={setSelection}
      />
    </div>
  );
}

export default App;
