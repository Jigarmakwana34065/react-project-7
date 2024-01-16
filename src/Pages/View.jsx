import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const View = () => {

    const [record, setRecord] = useState([])

    useEffect(() => {
        let oldRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
        
        setRecord(oldRecord)
    }, [])

    console.log(record);

    return (
        <>
            <div className="container">
                <h1> View Page </h1>

                <table className="rwd-table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Password</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record.map((val) => {
                                return (
                                    <tr key={val.id}>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

            <div className="viewPage">
                <Link to={'/'}>Form<i className="fa-solid fa-angles-left"></i></Link>
            </div>

        </>
    )
}

export default View