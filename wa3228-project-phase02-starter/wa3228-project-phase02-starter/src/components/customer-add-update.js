import React, { useState, useEffect } from 'react';

export function CustomerAddUpdate(params) {
    let blankCustomer = { "name": "", "email": "", "password": "" };
    const[formObject, setFormObject] = useState(blankCustomer)

    /* after 'selection' is implemented and is being passed in on params
     replace 'false' with 'params.selection >= 0)' */
    let mode = (false)?'Update':'Add';

    const handleChange = function (event) {
      const name = event.target.name;
      const value = event.target.value;
      formObject[name] = value;
      setFormObject({ ...formObject }); 
    }

    /* Uncomment the following sections only after 'selection'
       is passed in on params as params.selection */ 
        
    // useEffect(() => { 
    //   const getCustomers = function (id) {
    //     let blankCustomer = { "name": "", "email": "", "password": "" };
    //     if( id < 0){ setFormObject(blankCustomer); return;}
    //     fetch('http://localhost:4000/customers?id=' + id)
    //       .then(response => response.json())
    //       .then(data => {
    //         setFormObject(data[0])
    //       });
    //   };    
    //   getCustomers(params.selection) 
    // }, [ params.selection]);

    let onCancelClick = function(){
      if (mode === 'Add') {
        // let newSelection = params.selection -1;
        // params.setSelection(newSelection);
      }
      if (mode === 'Update') {
        // params.setSelection(-1);
      }    
    }

    let onDeleteClick = function(){
    /* uncomment next lines once 'refresh' function has been created 
       and is being passed in on params */
      // let promise = deleteSelectedCustomer();
      // promise.then(function (text) {
      //   console.log('onDeleteClick.add');
      //   params.refresh();
      // });
    }

    let onSaveClick = function () {
      if (mode === 'Add') {
        /* call saveFormObjectAsCustomer() here
           and then call params.refresh() when promise has completed 
        */
      }
      if (mode === 'Update') {
        /* call updateCustomerFromFormObject() here
           and then call params.refresh() when promise has completed 
        */
      }
    }
  
/* The following functions are provided below in complete form.
     deleteSelectedCustomer()
     saveFormObjectAsCustomer()
     updateCustomerFromFormObject()

   They each return promise objects that can be used to tell when
   their operation has been completed.  
   Like this:

      let promise = deleteSelectedCustomer();
      promise.then(function (text) {
        console.log('delete operation has been completed');
      });

*/

    let deleteSelectedCustomer = function(){
      if( params.selection < 0){ return;}
      let url = "http://localhost:4000/customers/" + params.selection;
      let myHeaders = new Headers({ "Content-Type": "application/json" });
      var myInit = { method: 'DELETE', headers: myHeaders, mode: 'cors' };
      let promise = fetch(url , myInit);
      return promise.then((response) => {
        return response.text();
      });    
    }
  
    let saveFormObjectAsCustomer = function(){
      let url = "http://localhost:4000/customers";
      let myHeaders = new Headers({ "Content-Type": "application/json" });
      delete formObject.id;
      let body = JSON.stringify(formObject);
      var myInit = {
        method: 'POST',
        body: body,
        headers: myHeaders,
        mode: 'cors'
      };
      let promise = fetch(url, myInit);
      return promise.then((response) => {
        return response.text();
      });    
    }
  
    let updateCustomerFromFormObject = function() {
      if( params.selection < 0){ return;}
      let url = "http://localhost:4000/customers/" + params.selection;
      let myHeaders = new Headers({ "Content-Type": "application/json" });
      delete formObject.id;
      let body = JSON.stringify(formObject);
      var myInit = {
        method: 'PUT',
        body: body,
        headers: myHeaders,
        mode: 'cors'
      };
      let promise = fetch(url, myInit);
      return promise.then((response) => {
        return response.text();
      });
    }
    

    return (
          <div className="boxed">
          <div>
              <h4>{mode}</h4>
          </div>
          <form >
              <table id="customer-add-update" >
                  <tbody>
                      <tr>
                          <td className={'label'} >Name:</td>
                          <td><input 
                          type="text" 
                          name="name" 
                          onChange={(e)=>handleChange(e)} 
                          value={formObject.name} 
                          placeholder="Customer Name" 
                          required /></td>
                      </tr>
                      <tr>
                          <td className={'label'} >Email:</td>
                          <td><input 
                          type="email" 
                          name="email" 
                          onChange={(e)=>handleChange(e)}
                          value={formObject.email}  
                          placeholder="name@company.com" /></td>
                      </tr>
                      <tr>
                          <td className={'label'} >Pass:</td>
                          <td><input 
                          type="text" 
                          name="password" 
                          onChange={(e)=>handleChange(e)}
                          value={formObject.password} 
                          placeholder="password" /></td>
                      </tr>
                      <tr className="button-bar">
                          <td colSpan="2">
                              <input type="button" value="Delete" onClick={onDeleteClick} />
                              <input type="button" value="Save" onClick={onSaveClick} />
                              <input type="button" value="Cancel" onClick={onCancelClick} />
                          </td>
                      </tr>
                  </tbody>
              </table>
          </form>
      </div>
    );
  }