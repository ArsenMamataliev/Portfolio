import React from 'react';

import style from './MainInformation.module.scss';
import ReactTypingEffect from 'react-typing-effect';

export const MainInformation = () => {
    return (
        <div id={'main'} className={style.mainInf}>
            <div className={style.content}>
                <h1>ARSEN MAMATALIEV</h1>
            </div>
            <div className={style.content}>
                <ReactTypingEffect
                     text={['Hello.', 'I am a front-end developer.']}
                />
            </div>
        </div>
    )
}