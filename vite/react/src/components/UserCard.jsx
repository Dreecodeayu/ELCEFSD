function UserCard({ name, age, id }) {
    return (
        <div>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <p>Age: {age}</p>
        </div>
    );
}

export default UserCard;