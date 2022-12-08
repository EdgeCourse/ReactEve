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
      .then(data => { setCustomers(data) }
      );
  };

  useEffect(() => { getCustomers() }, []);
  // Change the above to the following line after implementing selection and refreshFlag
  // useEffect(() => { getCustomers() }, [selection, refreshFlag]);

  return (
    <div>
      <CustomerList
        customers={customers}
      />
      <CustomerAddUpdate
      />
    </div>
  );
}

export default App;
