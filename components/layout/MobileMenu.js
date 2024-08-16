import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,

            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    const [isSubActive, setSubIsActive] = useState({
        status: false,
        key: "",
    });

    const handleSubClick = (key) => {
        if (isSubActive.key === key) {
            setSubIsActive({
                status: false,

            });
        } else {
            setSubIsActive({
                status: true,
                key,
            });
        }
    };



    return (
        <>
            <ul className="navigation clearfix">

                <li class="current dropdown"><Link href="">Home</Link>
                    <ul className={isActive.key === 1 ? "d-block" : "d-none"}>
                        <li><Link href="/">Home Layout 1</Link></li>
                        <li><Link href="/index-2">Home Layout 2</Link></li>
                        <li class="dropdown"><Link href="/#">Header Styles</Link>
                            <ul className={isSubActive.key === 17 ? "d-block" : "d-none"}>
                                <li><Link href="">Header Style 1</Link></li>
                                <li><Link href="/index-2">Header Style 2</Link></li>
                            </ul>
                            <div className={isSubActive.key === 17 ? "dropdown-btn active" : "dropdown-btn"}
                                onClick={() => handleSubClick(17)}><i class="fa fa-angle-down"></i></div></li>
                    </ul>
                    <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}><i class="fa fa-angle-down"></i></div>
                </li>
                <li><Link href="/page-about">About</Link></li>
                <li class="dropdown"><Link href="/#">Pages</Link>
                    <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
                        
                        <li class="dropdown"><Link href="/#">Team</Link>
                            <ul>
                                <li><Link href="/page-team">Team List</Link></li>
                                <li><Link href="/page-team-details">Team Details</Link></li>
                            </ul>
                            <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"}><i class="fa fa-angle-down"></i></div></li>
                        <li><Link href="/page-testimonial">Testimonial</Link></li>
                        <li><Link href="/page-pricing">Pricing</Link></li>
                        <li><Link href="/page-faq">FAQ</Link></li>
                        <li><Link href="/page-404">Page 404</Link></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i class="fa fa-angle-down"></i></div></li>
                <li class="dropdown"><Link href="/#">Courses</Link>
                    <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
                        <li><Link href="/page-services">Courses List</Link></li>
                        <li><Link href="/page-service-details">Cours Details</Link></li>
                    </ul>
                    <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}><i class="fa fa-angle-down"></i></div></li>
                <li class="dropdown"><Link href="/#">News</Link>
                    <ul className={isActive.key === 5 ? "d-block" : "d-none"}>
                        <li><Link href="/news-grid">News Grid</Link></li>
                        <li><Link href="/news-details">News Details</Link></li>
                    </ul>
                    <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)}><i class="fa fa-angle-down"></i></div></li>
                <li><Link href="/page-contact">Contact</Link></li>
            </ul>


        </>
    );
};

export default MobileMenu;