import React, { useState } from 'react'
import axios from 'axios'

export default function Ajaxcurd() {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoding] = useState(false);
    const fetchemployee = async () => {
        const employees = await axios.get(" https://fakestoreapi.com/products");
        setEmployees(employees.data);
        console.log(employees);

    };

        return (
            <>

                <div className='text-center'>

                    <button onClick={fetchemployee}>fetch employee</button>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-8'>
                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>title</th>
                                            <th>price</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {employees.map((emp) => (
                                            <tr key={emp.id}>
                                                <td>{emp.id}</td>
                                                <td>{emp.title}</td>
                                                <td>{emp.price}</td>
                                                <td>{emp.description}</td>

                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                            <div className='col-sm-4'>
                                form
                            </div>
                        </div>
                    </div>

                </div>



            </>
        )
    }