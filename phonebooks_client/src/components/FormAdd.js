import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


export default function FormAdd({ user, setUser, item, setItem, sort, setSort }) {
    let navigate = useNavigate()

    const addData = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/phonebooks', {
            ...user
        }).then((response) => {
            setItem((item) => {
                return [
                    ...item.filter(data => data.id !== response.data.id),
                    {
                        id: response.data.id,
                        name: response.data.name,
                        phone: response.data.phone
                    }
                ]
            })
            navigate('/')
        }).catch((err) => {
            console.log('ini err add data', err)
        })
    }
    return (
        <form onSubmit={addData}>
            <div className="container-form-add">
                <div className="header-add">
                    <input type="text" placeholder="add your name" onChange={(e) => setUser({ ...user, name: e.target.value })} required />
                    <input type="text" placeholder="add your phone" onChange={(e) => setUser({ ...user, phone: e.target.value })} required />
                </div>
                <div className="btn-form-add">
                    <button className='btn-btnSave' type='submit'> Save </button>
                    <Link to={'/'}>Cancel</Link>
                </div>

            </div>
        </form >
    )
}