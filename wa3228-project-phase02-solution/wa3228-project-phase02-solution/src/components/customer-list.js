
export function CustomerList(params) {
    const handleClick = function(item){
      if(params.selection === item.id){
        params.setSelection(-1);
      }else{
        params.setSelection(item.id);
      }
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
                className={ (item.id === params.selection )?'selected': ''}>
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