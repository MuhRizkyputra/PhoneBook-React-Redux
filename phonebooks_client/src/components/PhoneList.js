// import { useDispatch, useSelector } from "react-redux";
// import { selectPhonebooks } from "../reducers/phonebook"
// import PhoneItem from "./PhoneItem";
// import { useEffect } from "react";
// import { loadPhonebooks } from "../reducers/API";

// export default function PhoneList() {
//     const dispatch = useDispatch()
//     const { phonebook } = useSelector(selectPhonebooks)


//     useEffect(() => {
//         const readData = async () => {
//             try {
//                 dispatch(loadPhonebooks())
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         readData()
//     }, [dispatch])

//     return (
//         <div className="mainList" id="main-data">
//             {!!phonebook && phonebook.length > 0 && phonebook.map((user) => (
//                 <PhoneItem key={user.id} user={user} />
//             ))}
//         </div>

//     )
// }