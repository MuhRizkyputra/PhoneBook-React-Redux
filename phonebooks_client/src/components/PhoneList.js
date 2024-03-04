import { useDispatch, useSelector } from "react-redux";
import { selectPhonebooks } from "../reducers/phonebook"
import PhoneItem from "./PhoneItem";
import { useEffect } from "react";
import { loadPhonebooks } from "../reducers/API";
import { faSort } from "@fortawesome/free-solid-svg-icons";

export default function PhoneList({ keyword, sort }) {
    const dispatch = useDispatch()
    const { phonebook } = useSelector(selectPhonebooks)


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