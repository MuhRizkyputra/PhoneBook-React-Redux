export default function PhoneItem({ user }) {
    return (
        <div className="container-item">
            <div className="container-images">
            </div>
            <div className="list">
                <p>{user.name}</p>
                <p>{user.phone}</p>
                <div className="btn-list">
                </div>
            </div>
        </div>
    )
}