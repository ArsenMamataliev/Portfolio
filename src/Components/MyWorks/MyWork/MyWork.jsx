/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import style from './MyWork.module.scss';
import Fade from 'react-awesome-reveal';

export const MyWork = (props) => {
    return (
        <Fade top>
            <div className={style.preview} style={props.style}>
                <img src={props.imgLink} alt="Photo" />
                <div className={style.description}>
                    <h3 className={style.title}>{props.title}</h3>
                    <div className={style.stack}>
                        {props.text.map((stack)=>
                            <p className={style.text}>{stack}</p>
                        )}
                    </div>
                    <div className={style.linkContainer}>
                        <div>
                            <a href={props.codeLink} className={style.link}>Code</a>
                        </div>
                        <div>
                            <a href={props.demoLink} className={style.link}>Demo</a>
                        </div>
                    </div>     
                </div>       
            </div> 
        </Fade>
    )
}
