import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


//CSS
// import "./UserCard.css";


function UserCard(props) {
    const { user } = props;

    return (
        <>
            <div className="user-card">
                <Link to={`/users/${user.id}`}>
                <div className="user-profile-picture-container">
                    <img src={user.profile_picture} />
                </div>
                </Link>
                <div className="user-card-text">
                    <h3>{user.username}</h3>
                </div>
            </div>

        </>
    );
    }

    export default UserCard;
