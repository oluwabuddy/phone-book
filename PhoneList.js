
const PhoneList = ({ lists, onDelete }) => {

    return ( 
        <div className="phone-list" > 
                <table >
                    <tr>
                        <th>Name</th>
                        <th>Phone</th> 
                        <th>Delete Number</th>             
                    </tr>
                        {lists.map((list) => (
                    <tr>
                        <td>{ list.name }</td>
                        <td>{ list.phone }</td>
                        <button onClick={()=>onDelete(list.id)}>Delete</button>
                    </tr>
                       ))}
                </table>
        </div>
    )
}
 
export default PhoneList;