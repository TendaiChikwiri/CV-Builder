import React, { useEffect } from 'react';

import Personal from "./Personal";
import Education from "./Education";
import Experience from './Experience';



const Form = ({deleteExperience, experience ,addExperience, savePersonal, qualifications, addQualification, deleteQualifications, personal}) => {

    const addinput = (personal)=>{
        console.log(personal)
        document.getElementById("name").value = personal.first;
        document.getElementById("surname").value = personal.surname
        document.getElementById("email").value = personal.email
        document.getElementById("phone").value = personal.phone
        document.getElementById("summary").value = personal.summary
    }

    useEffect(()=>{
        addinput(personal)
    }, [personal])


    return (
        <main id="edit-mode" >
            <Personal savePersonal={savePersonal} />
            <Experience experience={experience} addExperience={addExperience} deleteExperience={deleteExperience} /> 
            <Education qualifications={qualifications} addQualification={addQualification} deleteQualifications={deleteQualifications}/>
        </main>
    )
}

export default Form 
