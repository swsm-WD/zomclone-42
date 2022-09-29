import React from 'react';


const MyBookingsDisply = (props)=>{

    const renderMyOrders = ({data})=>{
        if(data){
            return data.map((data)=>{
                return(
                    <tr key={data._id}>
                        <th scope="row">{data._id}</th>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phno}</td>
                        <td>{data.persons}</td>
                        <td>{data.date}</td>
                        <td>{data.time}</td>
                    </tr>
                )
            })
        }
        
    }
    return(
        <React.Fragment>
            <table className="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Restaurent Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Number of persons</th>
                    <th scope="col">Date of Order</th>
                    <th scope="col">Time of Order</th>
                    </tr>
                </thead>
                <tbody>
                   {renderMyOrders(props)}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default MyBookingsDisply