import React from 'react'

const PersonalInfo = ({savePersonal, personal}) => {

    

    return (
        <div>
            <h3 className="sub-heading" >Personal Information</h3>
            <form className="input-form" >
                <label htmlFor="name">Name: 
                    <input id="name" type="text" />
                </label>
                <label htmlFor="surname">Surname: 
                    <input id="surname" type="text"/>
                </label>
                <label htmlFor="email">Email: 
                    <input id="email" type="email"/>
                </label>
                <label htmlFor="phone">Phone: 
                    <input id="phone" type="text"/>
                </label>
                <label htmlFor="summary">Career Summary: 
                    <textarea id="summary" cols="50" rows="5"></textarea>
                </label>
                {/* <label >
                    <input className="add-btn" onClick={savePersonal} type="button" value="Save" />
                </label> */}
            </form>
        </div>
    )
}

export default PersonalInfo
