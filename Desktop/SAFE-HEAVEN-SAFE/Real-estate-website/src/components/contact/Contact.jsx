import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Contact() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        loadMembers(); // Call the function with parentheses
    }, []);

    const loadMembers = async () => {
        const result = await axios.get("http://localhost:8080/members");
        setMembers(result.data);
    }

    return (
        <div>
            {/* <div className="d-flex justify-content-center my-2">
                <form className="d-flex" role="search" style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <input className="form-control me-2 my-2" type="search" placeholder="Search for location" aria-label="Search" style={{ background: 'none', border: 'none', outline: 'none', flex: '1', marginRight: '5px' }} />
                    <button className="btn btn-outline-success" type="submit" style={{ background: '#5cb85c', border: 'none', borderRadius: '5px', padding: '8px 15px' }}>Search</button>
                </form>
            </div> */}

            <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', margin: '20px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>S.No</th>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>Location</th>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>FirstName</th>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>LastName</th>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>Email</th>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>PhoneNumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0' }}>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{index + 1}</td>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{member.location}</td>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{member.firstName}</td>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{member.lastName}</td>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{member.phoneNumber}</td>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{member.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
