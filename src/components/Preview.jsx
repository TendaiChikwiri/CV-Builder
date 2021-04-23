import React from 'react'

const Preview = ({personal, qualifications, experience }) => {



    return (
        <main id="preview-mode">
            <div className="personal-preview">
                <div id="top-personal">
                    <h1>{personal.first} {personal.surname}</h1>
                    <ul>
                        <li>{personal.email ? `Email: ${personal.email}`: "" }</li>
                        <li>{personal.phone ? `Phone: ${personal.phone}`: "" }</li>
                    </ul>
                </div>
                <p>{personal.summary}</p>
                    
            </div>
            <div>
                <h1>Experience</h1>
                <div>
                    { experience.map((job, index)=>(
                        <div key={index}>
                            <h3 className="position">{job.company}: {job.position}</h3>
                            <p className="duration">{job.start} - {job.end}</p>
                            <p>{job.responsibilites}</p>
                        </div>
                    )) }
                </div>
            </div>
        </main>
    )
}

export default Preview
