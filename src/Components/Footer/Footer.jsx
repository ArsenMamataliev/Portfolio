import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import { Fade } from "react-awesome-reveal";
import { linksDataItems } from '../../Constants/constants';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <Fade top>
                <div className={styleContainer.container}>
                    <div className={style.container}>
                        <div className={style.links}>
                            {linksDataItems.map(item=> <a href={item.link} className={style.link}>
                                <img src={item.icon} alt={'icon'} width={40}/>
                            </a>
                            )
                            }
                        </div>
                        <p className={style.text}>©2022</p>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
