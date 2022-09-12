import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from '../Title/Title';
import react from './../../Assets/Icons/reac.svg';
import redux from './../../Assets/Icons/redux.svg';
import js from './../../Assets/Icons/js.svg';
import ts from './../../Assets/Icons/ts.svg'
import html from './../../Assets/Icons/html.svg';
import css from './../../Assets/Icons/css.svg';
import git from './../../Assets/Icons/git.svg';
import jest from './../../Assets/Icons/jest.svg';
import material from './../../Assets/Icons/material_ui.svg';
import storybook from './../../Assets/Icons/storybook.svg';
import sass from './../../Assets/Icons/sass.svg';
import figma from './../../Assets/Icons/figma.svg';
import Fade from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt';

export const Skills = () => {
    const skillItems = [{title:'JS', icon:js},
    {title:'TS', icon:ts},
    {title:'HTML', icon:html},
    {title:'React', icon:react}, 
    {title:'Redux', icon:redux}, 
    {title:'CSS', icon:css},
    {title:'SASS', icon:sass},
    {title:'Material UI', icon:material},
    {title:'FIGMA' , icon:figma},
    {title:'Git', icon:git},
    {title:'Storybook', icon: storybook},
    {title:'Jest', icon:jest}]

    return (
        <div>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}id={'skills'}>
                <Title title={'Skills'}/>
                <Fade bottom>
                    <div className={style.skills}>
                        {skillItems.map(item=><Tilt className="Tilt" options={{max: 25}}><Skill title={item.title} img={item.icon}/></Tilt>)}
                        
                    </div>
                </Fade>
            </div>
        </div>
    )
}
