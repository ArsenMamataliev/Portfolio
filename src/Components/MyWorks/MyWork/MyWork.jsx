import React from 'react';

import style from './MyWork.module.scss';

export const MyWork = (props) => {
    return (
        <div>
            <div>
                <div className={style.preview} style={props.style}>
                    <div>
                        <h3 className={style.title}>{props.title}</h3>
                    </div>
                    <div>
                        <p className={style.text}>{props.text}</p>
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
        </div>
    )
}
