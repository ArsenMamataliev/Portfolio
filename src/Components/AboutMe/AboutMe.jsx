import React from 'react';

import {Title} from '../Title/Title';
import style from './AboutMe.module.scss';
import ava from './../../Assets/img/avatar.png';

import {faBook, faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {linksDataItems} from './../../Constants/constants';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import Fade from 'react-awesome-reveal';

export const AboutMe = () => {
 const contactsDataItems = [
   {icon: faMapMarkerAlt, data: 'Bishkek, Kyrgyzstan'},
   {icon: faPhoneAlt, data: '+996772294925'},
   {icon: faEnvelope, data: 'a.mamataliev93@gmail.com'},
   {icon: faBook, data: 'English level:B1'}
 ];

 

    return (<div className={style.container} id={'aboutMe'}>
            <div><Title title={'About me'}/></div>
            <div className={style.wrapper}>
                <Fade left>
                    <div className={style.containerPhoto}>
                        <img src={ava} className={style.myPhoto} alt={'avatar'}/>
                    </div>
                </Fade>
                <Fade right>
                    <div className={style.containerContact}>
                        {contactsDataItems.map(item=>
                            <p className={style.text}>
                                <FontAwesomeIcon className={style.contactIcon} icon={item.icon}/> 
                                {item.data}
                            </p>
                        )}
                    </div>
                </Fade>
            </div>
            <Fade bottom>
                <div className={style.containerLink}>
                    {linksDataItems.map(item=> 
                        <a href={item.link}>
                            <img src={item.icon} alt={'icon'} width={40}className={style.linkIcon}/>
                        </a>
                    )}
                </div>
                <div className={style.text}>
                    <p>
                        I have experience with creating SPA using React, Redux, TypeScript, HTML,
                        CSS.
                        I am currently focused on improving my skills by using new technologies and tools.
                        My hobbies are solving puzzles on Codewars, reading books about coding, and watching
                        educational videos. I keep polishing up my English by using apps, reading articles and
                        watching TV shows and series. I really enjoy learning something new.
                    </p>
                </div>
            </Fade>
        </div>
    )
}