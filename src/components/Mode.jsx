import React from 'react'

const Mode = ({changeView, view, savePersonal}) => {
    return (
        <div id="toggle-view">
            <button onClick={()=>{
                if (!view) {
                    savePersonal()
                }
                changeView()
                }} >Switch To {view ? "Edit": "Preview"} Mode</button>
        </div>
    )
}

export default Mode
