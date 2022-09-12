import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export const navLinksItems = [
    {title: 'Main', icon: <FontAwesomeIcon icon={faHome}/>, link: 'main'},
    {title: 'About me', icon: <FontAwesomeIcon icon={faUser}/>, link: 'aboutMe'},
    {title: 'Skills', icon: <FontAwesomeIcon icon={faLaptopCode}/>, link: 'skills'},
    {title: 'Projects', icon: <FontAwesomeIcon icon={faFolderOpen}/>, link: 'projects'},
    {title: 'Contact', icon: <FontAwesomeIcon icon={faEnvelope}/> , link: 'contacts'}
    ];
    