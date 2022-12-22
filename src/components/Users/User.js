import React from 'react';
import './User.css'

const User = ({ user }) => {

    console.log(user)

    const { email, avatar, first_name, last_name } = user;
    return (
        <div className='user_card'>
            <div className="card card-compact w-96 shadow-lg shadow-blue-500/50">
                <img src={avatar} alt="Shoes" />
                <div className="card-body">
                    <div className='flex gap-2'>
                        <h2 className="card-title">Name: {first_name}</h2>
                        <h2 className="card-title">{last_name}</h2>
                    </div>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default User;