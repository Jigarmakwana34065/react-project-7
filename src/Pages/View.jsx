import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const View = () => {

    const [record, setRecord] = useState([])

    useEffect(() => {
        let oldRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldRecord)
    }, [])

    const deleteData = (id) => {
        let deleteData = record.filter((val) => {
            return val.id != id
        })

        setRecord(deleteData)

        localStorage.setItem('user', JSON.stringify(deleteData))

        console.log(deleteData);
    }

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
                            <td>Action</td>
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
                                        <td>
                                            <button className='deleteData' onClick={() => deleteData(val.id)}>Delete</button>
                                            <button className='editData'>
                                                <Link to={`/editData/${val.id}`}>Edit</Link>
                                            </button>
                                        </td>
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