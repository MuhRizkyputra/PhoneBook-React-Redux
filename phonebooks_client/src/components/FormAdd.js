import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { addPhonebooks } from "../reducers/API"


export default function FormAdd() {
    const [user, setUser] = useState({ name: '', phone: '' })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const addData = (e) => {
        e.preventDefault()
        dispatch(addPhonebooks(user))
        navigate('/')
    }

    return (
        <form onSubmit={addData}>
            <div className="container-form-add">
                <div className="header-add">
                    <input type="text" placeholder="add your name" onChange={(e) => setUser({ ...user, name: e.target.value })} required />
                    <input type="text" placeholder="add your phone" onChange={(e) => setUser({ ...user, phone: e.target.value })} required />
                </div>
                <div className="btn-form-add">
                    <button className="btn-btnSave" type="submit"> Save </button>
                    <Link to={'/'}>Cancel</Link>
                </div>

            </div>
        </form >
    )
}