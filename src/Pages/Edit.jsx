import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const { id } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [record, setRecord] = useState('')
    const navigate = useNavigate()

    // edit record start 

    useEffect(() => {

        let oldData = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldData)

        let editData = oldData.find((val) => {
            return val.id == id

        })

        setName(editData.name)
        setEmail(editData.email)
        setPassword(editData.password)

        console.log(editData);

    }, [id])

    // edit record end

    // update edit record start 

    const handleSubmit = (e) => {
        e.preventDefault()

        let updateEdit = record.map((val) => {
            if (val.id == id) {
                return {
                    ...val,
                    name : name,
                    email : email,
                    password : password
                }
            }
            return val
        })

        setRecord(updateEdit)

        localStorage.setItem('user',JSON.stringify(updateEdit))

        navigate('/viewData')

    }

    // update edit record end

    // console.log(record);

    return (
        <>
            <div className="container">
                <h1> User Edit </h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-control">
                        {/* <input type="text" required /> */}
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Name' />
                    </div>
                    <div className="form-control">
                        {/* <input type="text" required /> */}
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' />
                    </div>
                    <div className="form-control">
                        {/* <input type="password" required /> */}
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
                    </div>
                    <button className="btn" type='submit'>Edit</button>
                </form>
            </div>

            <div className="viewPage">
                <Link to={'/viewData'}>View Page <i className="fa-solid fa-right-from-bracket"></i></Link>
            </div>

        </>
    )
}

export default Edit