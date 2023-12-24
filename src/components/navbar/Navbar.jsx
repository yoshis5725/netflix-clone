import React from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";


const Navbar = (props) => {
    const [isShowDropdown, setIsShowDropdown] = React.useState(false);
    const {username} = props;
    const router = useRouter();


    const handleToHomePageClick = () => {
        router.push('/');
    };


    const handleToMyListPageClick = () => {
        router.push('/browse/my-list');
    };


    const handleToggleDropdownClick = () => {
        setIsShowDropdown(!isShowDropdown);
    };



    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link href='/' className={styles.logoLink}>
                    <div className={styles.logoWrapper}>
                        <Image src='/static/netflix.svg' alt='netflix logo' width='112' height='32'/>
                    </div>
                </Link>
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleToHomePageClick}>Home</li>
                    <li className={styles.navItem2} onClick={handleToMyListPageClick}>My List</li>
                </ul>
                <nav className={styles.navContainer}>
                    <div>
                        <button className={styles.usernameBtn} onClick={handleToggleDropdownClick}>
                            <p className={styles.username}>{username}</p>
                            <Image src='/static/expandCarrot.svg' alt='expand carrot' width='32' height='32'/>
                        </button>

                        {/*logic to toggle the dropdown if the username button is clicked*/}
                        {
                            isShowDropdown && (
                                <div className={styles.navDropdown}>
                                    <Link href='/login' className={styles.linkName}>Sign Out</Link>
                                    <div className={styles.lineWrapper}></div>
                                </div>
                            )
                        }

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;