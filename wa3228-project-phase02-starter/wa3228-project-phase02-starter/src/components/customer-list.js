
export function CustomerList(params) {
    const handleClick = function(item){
      // add code here to set-unset selection
    }

    const getClass = function(item){
      // add code to the next line that sets the returns 'selected' 
      // only if 'item' is the selected item
      return 'selected';
    }

    return (
      <div className="boxed" >
        <h4>Customer List</h4>
        <table id="customer-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Pass</th>
            </tr>
          </thead>
          <tbody>
            {params.customers.map(
              (item, index) => {
                return (<tr key={item.id} 
                onClick={()=>handleClick(item)} 
                className={ getClass(item) }>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>);
              }
            )}
          </tbody>
        </table>
      </div>
    );
  }