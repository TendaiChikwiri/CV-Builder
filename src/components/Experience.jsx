import React from 'react'

const Experience = ({experience,addExperience, deleteExperience}) => {
    return (
        <div>
            <h3 className="sub-heading" >Experience</h3>
            <form className="input-form">
                <label >Company Name
                    <input id="company" type="text"/>
                </label>
                <label >Position Title
                    <input id="position" type="text"/>
                </label>
                <label >Tasks &amp; Responsibilities
                    <textarea name="" id="responsibilites" cols="50" rows="5"></textarea>
                </label>
                <label >Start date
                    <input id="start" type="date"/>
                </label>
                <label >End (Leave blank if current)
                    <input id="end" type="date"/>
                </label>
                <label >
                    <input className="add-btn" onClick={addExperience} type="button" value="Add Working Experience" />
                </label>
            </form>
            <h3 className="sub-heading" >Saved Experience</h3>
            <ul className="saved-items">
                {experience.map((job, index)=>(
                    <li key={index}>
                        {job.company}: {job.position}
                        <button onClick={()=> deleteExperience(job.id)} className="delete-btn">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience
