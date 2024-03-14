import { faArrowDownZA, faArrowUpZA, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


function ButtonSortAsc ({sort , setSort}) {
    return (
        <button className='btnSortAsc' onClick={() => {
            setSort('desc')
           
        }}>
            <FontAwesomeIcon icon={faArrowDownZA} id='center' />
        </button>
    )
}

function ButtonSortDesc ({sort , setSort} ){
    return (
        <button className='btnSortDesc' onClick={() => {
            setSort('asc')
        }}>
            <FontAwesomeIcon icon={faArrowUpZA} id='center' />
        </button>
    )
}

export default function SearchBar({ sort, setSort, keyword, setKeyword }) {
    const handelSearch = (event) => {
        const { value } = event.target
        setKeyword(value)
    }
    return (
        <div className="container-seachbar">
            <div className="container-form">
                {sort === 'asc' || sort.sort === 'asc' ? <ButtonSortAsc sort={sort} setSort={setSort} /> : <ButtonSortDesc sort={sort
                } setSort={setSort} />}
                <input className="input-form" value={keyword} placeholder='search your name' onInput={handelSearch} />
                <Link to='/add'>
                    <button className='btnAdd'>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                </Link>
            </div>
        </div>
    )
}