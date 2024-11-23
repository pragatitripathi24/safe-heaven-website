
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function LostChildren() {
    const [children, setChildren] = useState([]);

    useEffect(() => {
        loadChildren();
    }, []);

    const loadChildren = async () => {
        const result = await axios.get("http://localhost:8080/children");
        console.log("result",result.data)
        setChildren(result.data);
    }

    return (
        <div className="bg-white">
         <div className="d-flex justify-content-center  bg-white ">
    <form className="d-flex"  role="search" style={{ backgroundColor: 'black', padding: '8px',margin:'15px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        {/* <input className="form-control me-2 my-2 col-md-6 "id="search" type="search" placeholder="Search child by name" aria-label="Search" style={{ background: 'none', border: 'none', outline: 'none', flex: '1', marginRight: '5px' }} /> */}
        <Link className="btn btn-outline-success" for="search" type="submit" to="/searchbyname" style={{ backgroundColor:'white',background: 'white',color:'black', border: 'none', borderRadius: '5px', padding: '8px 15px' }}>Click here to Search</Link>
        <Link className="btn btn-primary.mx-2 " to="/adduser"style={{ marginLeft: '2px',backgroundColor:'white',background: 'white',color:'black', border: 'none', borderRadius: '5px', padding: '8px 15px' }} >Add Children Detail</Link>
    </form>
</div>

            <table className="table table-light table-striped my-2 bg-white">
            
                <thead>
                <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Location</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Found by</th>
                        <th scope="col">founder's-PhoneNumber</th>
                        <th scope="col">Status</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Edit</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {children.map((children, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{children.location}</td>
                            <td>{children.name}</td>
                            <td>{children.age}</td>
                            <td>{children.gender}</td>
                            <td>{children.foundBy}</td>
                            <td>{children.hisPhoneNumber}</td>
                            <td>{children.status}</td>
                            <td>
                              <Link className="btn btn-dark mx-2" to={`/viewchilddetail/${children.name}`}>View Details</Link>
                            </td>
                            <td>
                            <Link className="btn btn-primary mx-2"
                            to={`/editchildren/${children.id}`} >Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
