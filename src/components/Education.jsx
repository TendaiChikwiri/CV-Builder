import React from 'react'

const Education = ({ addQualification, qualifications, deleteQualifications }) => {
    return (
        <div>
            <h3 className="sub-heading" >Education</h3>

            <form className="input-form">
                <label htmlFor="institution">Institution: <input id="institution" type="text"/></label>
                <label htmlFor="start">Start Date: <input id="start" type="date"/></label>
                <label htmlFor="end">End Date: <input id="end" type="date"/></label>
                <label htmlFor="title">Qualification Title: <input id="title" type="text"/></label>
                <label><button className="add-btn" type="button" onClick={addQualification} >Add Qualifications</button></label>
            </form>
            <h3 className="sub-heading" >Saved Qualifications</h3>
                <ul className="saved-items">
                    {qualifications.map((qualification, index)=>(
                        <li key={index}>
                            {qualification.title}
                            <button onClick={()=>deleteQualifications(qualification.id)} className="delete-btn">Delete</button>
                        </li>
                    ) )}
                </ul>
        </div>
    )
}

export default Education
