import React from 'react'
import { Link } from 'react-router-dom';
import { User } from '../../Types/customTypes';

import cls from "./UserView.module.css";

const UserView = (user: User) => {
    return (
        <section className={cls.user_card}>
            <div className={cls.user_card_info}>
                <div className={cls.user_card_left}>
                    <p className={cls.username}>{user.username}</p>
                    <p>{user.name}</p>
                </div>
                <div className={cls.user_card_right}>
                    <p>{user.phone}</p>
                    <p>{user.email}</p>
                    <p>{user.website}</p>
                </div>
            </div>
            <div>

                <button className={cls.user_card_button}>
                    <Link className={cls.button_link} to={`/userpage`} state={user}>GoTo UserPage</Link>
                </button>
            </div>
        </section>
    )
}

export default UserView