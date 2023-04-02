import React from 'react';
import * as AiIcons from 'react-icons/ai';
// import * as BsPrescription from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
// import DoctorAppointment from "../Appointments/DoctorAppointment";
// import PatientAppointment from '../Appointments/PatientAppointment';
// import Prescription from './components/Prescription/Prescription';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Patients',
        path: '/patients',
        icon: <BsIcons.BsFillPeopleFill />,
        cName: 'nav-text'
    },
    {
        title: 'Doctors',
        path: '/doctors',
        icon: <GiIcons.GiDoctorFace />,
        cName: 'nav-text'
    }
]
//     {
//         title: 'Prescriptions',
//         path: '/prescriptions',
//         icon: <IoIcons.IoMdHelpCircle />,
//         cName: 'nav-text'
//     },
// ]