import { faArrowRotateLeft, faFloppyDisk, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { deletePhonebooks, updateAvatar, updatePhonebooks } from "../reducers/API";
import { useDispatch } from "react-redux";

export default function PhoneItem({ user }) {

    const [edit, setEdit] = useState(false)
    const [newData, setNewData] = useState({ name: user.name, phone: user.phone })
    const [selectImages, setSelectImages] = useState({})
    const dispatch = useDispatch()
    const inputFile = useRef(null)

    const imageSet = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectImages(e.target.files[0])
        }
    };
    const showFileUpload = () => {
        inputFile.current.click()
    }
    useEffect(() => {
        if (selectImages) {
            const dataNew = new FormData();
            dataNew.append("avatar", selectImages);
            dispatch(updateAvatar({ id: user.id, formData: dataNew }))
        }
    }, [selectImages])


    const updateData = (id, contact) => {
        dispatch(updatePhonebooks({ id, contact }))
        setEdit(false)
    }

    const submit = (user) => {
        confirmAlert({
            title: `Konfirmasi`,
            message: `Apakah anda yakin ingin menghapus data ${user.name} ?`,
            buttons: [
                {
                    label: 'Ya',
                    onClick: () => dispatch(deletePhonebooks({ id: user.id }))
                },
                {
                    label: 'Tidak'
                }
            ]

        })
    }
    if (edit) {
        return (
            <div className="container-item">
                <div className="container-item-content">
                    <div className="header-item">
                        <div className="btn-item-img">
                            <button className="btn-img-content" onClick={showFileUpload}>
                                <img src={"http://localhost:3001/images/" + (user.avatar == null ? 'Defaultavatar.png' : `${user.avatar}`)} />
                            </button>
                            <input type="file" accept='image/*' name="avatar" id="file" ref={inputFile} style={{ display: "none" }} onChange={imageSet}  />
                        </div>
                    </div>
                    <div className="body-item-edit">
                        <div className="edit-item-identity">
                            <input type="text" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
                            <input type="text" value={newData.phone} onChange={(e) => setNewData({ ...newData, phone: e.target.value })} />
                        </div>
                        <div className="btn-item">
                            <button onClick={() => { updateData(user.id, { name: newData.name, phone: newData.phone }); }}>
                                <FontAwesomeIcon icon={faFloppyDisk} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faArrowRotateLeft} onClick={() => { setEdit(false) }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )

    } else {
        return (
            <div className="container-item">
                <div className="container-item-content">
                    <div className="header-item">
                        <div className="btn-item-img">
                            <button className="btn-img-content" onClick={showFileUpload}>
                                <img src={"http://localhost:3001/images/" + (user.avatar == null ? 'Defaultavatar.png' : `${user.avatar}`)} />
                            </button>
                            <input type="file" accept='image/*' name="avatar" id="file" ref={inputFile} style={{ display: "none" }} onChange={imageSet} />
                        </div>
                    </div>
                    <div className="body-item">
                        <div className="item-identity">
                            <p>{user.name}</p>
                            <p>{user.phone}</p>
                        </div>
                        <div className="btn-item">
                            <button  >
                                <FontAwesomeIcon icon={faPenToSquare} onClick={() => { setEdit(true) }} />
                            </button>
                            <button onClick={() => submit(user)}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}