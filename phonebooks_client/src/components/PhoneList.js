import { useDispatch, useSelector } from "react-redux";
import { selectPhonebooks } from "../reducers/phonebook"
import PhoneItem from "./PhoneItem";
import { useEffect, useState } from "react";
import { loadPage, loadPhonebooks } from "../reducers/API";

export default function PhoneList({ keyword, sort }) {
    const dispatch = useDispatch()
    const { phonebook, page, pages } = useSelector(selectPhonebooks)
    const [isLoading, setIsLoading] = useState(false)

    const handelScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !isLoading) {
            try {
                if (page < pages) {
                    setIsLoading(true)
                    const newPage = page + 1
                    dispatch(loadPage({ page: newPage, keyword, sort }))
                }
                else {
                    setIsLoading(false)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handelScroll)
        return () => {
            window.removeEventListener('scroll', handelScroll)
        }
    }, [dispatch, pages, page, keyword, sort])

    useEffect(() => {
        dispatch(loadPhonebooks({ keyword, sort }))
    }, [dispatch, keyword, sort])

    return (
        <div className="phonelist" id="main-data">
            {phonebook.map((user) => (
                <PhoneItem key={user.id} user={user} />
            ))}
        </div>

    )
}