import React from 'react';

import style from './Title.module.scss';

import { Fade } from "react-awesome-reveal";

export let Title=(props)=>{

    return(
        <div className={style.title}>
            <Fade top>
              {props.title}
            </Fade>
        </div>)
}
