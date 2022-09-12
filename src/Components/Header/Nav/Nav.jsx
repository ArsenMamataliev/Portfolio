import React from 'react';

import style from './Nav.module.scss';
import {navLinksItems} from "./../constants"

import { Fade } from "react-awesome-reveal";
import {Link, animateScroll as scroll} from "react-scroll";

export const Nav = () => {
    
    return (
        <div className={style.nav}>
            <Fade top>
            { navLinksItems.map(item=> <div className={style.linkContainer}><Link
            activeClass={style.link}
            to={item.link}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >{item.icon} {item.title}</Link>
        </div>)
        }
            </Fade>
        </div>
    )
}