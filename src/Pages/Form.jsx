import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [record, setRecord] = useState([])
    const id = Math.floor(Math.random() * 10000)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const obj = {
            id, name, email, password
        }

        let allData = [...record, obj]

        setRecord(allData)

        localStorage.setItem('user', JSON.stringify(allData))

        setName("")
        setEmail("")
        setPassword("")

        console.log(allData);

        navigate('viewData', { state: allData })

    }

    useEffect(() => {
        let oldRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldRecord)
    }, [])

    return (
        <>
            <div class="container">
                <h1> User Login </h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="form-control">
                        {/* <input type="text" required /> */}
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                        <label> Name </label>
                    </div>
                    <div class="form-control">
                        {/* <input type="text" required /> */}
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <label> Email </label>
                    </div>
                    <div class="form-control">
                        {/* <input type="password" required /> */}
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <label> Password </label>
                    </div>
                    <button class="btn" type='submit'>Login</button>
                </form>
            </div>

            <div className="viewPage">
                <Link to={'viewData'}>View Page <i class="fa-solid fa-right-from-bracket"></i></Link>
            </div>


        </>
    )
}

export default Form