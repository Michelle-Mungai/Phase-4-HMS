# HOSPITAL MANAGEMENT PROJECT


## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technology Used](#technology-used)
- [Setup Instructions](#setup-instructions)
- [Copyright and license information](#copyright-and-license-information)

### Project Description
This project is a simple react front-end project that uses a ruby on rails REST API to fecth doctors, patients and their appointments. 

The REACT Application allows doctors to login and view the patients that have booked appointments with them. They can also choose to take up the appointment, reschedule the appointment or even cancel the entire appointment. The doctor can also have a view of the patients medical records.

The application also allows patients to sign up and login in to be able to access the application. Here the patient can see a list of doctors and book an appointment. They can concurrently make changes to their appointment or even cancel their appointment all together.

The API allows managementof the doctors, patients, appointments and their medical records. The application has 4 models, patient, doctor, appointment, medical records. 

The API has a many to many relationship where many patients can belong to many doctors and vice versa.
It also has a has one relationship where a patient only has one medical record. 
It has a one to many relationship where a patient can have many appointments.
The API provides several RESTful routes that allow users to view, create, update and delete appointments, medical records, patients and doctors.

### Features 

### Setup Instructions
To run this application on your local machine, you need to have Ruby on Rails and Postgesql installed. Follow these steps:

- Open your terminal.
- Clone the repository `https://github.com/Michelle-Mungai/Phase-4-HMS`
## Front-end setup
- `npm install`
- Then run `npm start` to view the site
## Back-end setup
- `Bundle install`
- Run rails server using the command: `rails s`
- Use Postman to access the endpoints.

Our Backend API can be accessed using this link `https://fnf-s1ab.onrender.com`
### Copyright and license information

#### Authors

 - Michelle Mungai
 - Hilary Kariuki
 - Amina Hagi
 - Jacob Muchori

#### License

This project is licensed under the MIT License - see the LICENSE.md file for details