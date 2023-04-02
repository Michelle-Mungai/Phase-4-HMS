import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/navbar',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Patients',
        path: '/patientappointment',
        icon: <BsIcons.BsFillPeopleFill />,
        cName: 'nav-text'
    },
    {
        title: 'Doctors',
        path: '/doctorappointment',
        icon: <GiIcons.GiDoctorFace />,
        cName: 'nav-text'
    },
    
]
