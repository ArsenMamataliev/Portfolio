import React from 'react';

import style from './MyWorks.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import {MyWork} from './MyWork/MyWork';
import {Title} from '../Title/Title';
import onlinePlatform from './../../Assets/img/on-platform.png';
import todoList from './../../Assets/img/todo-app.jpg';
import brainTrain from './../../Assets/img/smart.png';
import tinyTrello from './../../Assets/img/tiny-trello.png';
import crypappy from './../../Assets/img/crypappy.png';
import consctractor from './../../Assets/img/constractor-x.png';

export const MyWorks = () => {
    const networksData=[
        { 
            title: 'Online course selling platform', 
            text: ['React', 'Redux', 'MaterialUI', 'CSS'],
            imgLink: onlinePlatform,
            codeLink: 'https://github.com/ArsenMamataliev/Online-course-selling-platform',
            demoLink: 'https://ama-zone.netlify.app/'
        }, 
        {
            title: 'Todo list',
            text: ['React', 'ReactHooks', 'CSS'],
            imgLink: todoList,
            codeLink: 'https://github.com/ArsenMamataliev/Movie-todo-app',
            demoLink: 'https://arsenmamataliev.github.io/Movie-todo-app/'
        },
        {
            title: 'Game brain train', 
            text: ['HTML', 'CSS', 'JS'],
            imgLink: brainTrain,
            codeLink:'https://github.com/ArsenMamataliev/Smart',
            demoLink: 'https://arsenmamataliev.github.io/Smart/'
        },
        {
            title: 'Tiny trello',
            text:  ['React', 'Redux', 'MaterialUI', 'CSS'],
            imgLink: tinyTrello,
            codeLink: 'https://github.com/ArsenMamataliev/tiny_trello',
            demoLink: 'https://tiny-trello.netlify.app'
        },
        {
            title: 'CrypAppy', 
            text: ['HTML', 'CSS', 'JS'],
            imgLink: crypappy,
            codeLink: 'https://github.com/ArsenMamataliev/crypappy',
            demoLink: 'https://crypappysite.netlify.app/'
        },
        {
            title: 'Constractor X',
            text:  ['HTML', 'SCSS', 'JS'],
            imgLink: consctractor,
            codeLink: 'https://github.com/ArsenMamataliev/ConstractorX',
            demoLink: 'https://constractor-x.netlify.app/'
        }
      ]
    
    return (
        <div className={style.myWorks} id={'projects'}>
            <div className={styleContainer.container}>
                <div className={style.worksContainer}>
                    <Title title={'My projects'}/>
                    <div className={style.links}>
                        {networksData.map(data=>
                         <MyWork title={data.title}
                            imgLink={data.imgLink}
                            text={data.text}
                            codeLink={data.codeLink}
                            demoLink={data.demoLink}
                        />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}