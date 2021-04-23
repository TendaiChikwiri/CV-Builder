import React, {useState} from 'react';


import "./app.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Mode from "./components/Mode";
import Preview from "./components/Preview";



const App = () => {

    const [view, setView] = useState(false)

    const changeView = ()=>{
        
        // let edit = document.getElementById("edit-mode");
        // let preview = document.getElementById("preview-mode")

        // if (view){
        //     preview.style.display = "none"
        //     edit.style.display = "block"
        // }else{
        //     preview.style.display = "block"
        //     edit.style.display = "none"
        // }
        
        setView(!view)
    }


    const [personal, setPersonal] = useState(
        {
            first: "",
            surname: "",
            email: "",
            phone: "",
            summary: "",
        }
    );

    const savePersonal = ()=>{
        let first = document.getElementById("name").value
        let surname = document.getElementById("surname").value
        let email = document.getElementById("email").value
        let phone = document.getElementById("phone").value
        let summary = document.getElementById("summary").value


        console.log("saved Personal details")
        setPersonal(
                {
                    first: first,
                    surname: surname,
                    email: email,
                    phone: phone,
                    summary: summary                }
        )
        console.log(personal)
    }

    const [qualifications, setQualifications] = useState([
        {   
            id: 123,
            institution: "Harvard",
            start: "22/05/2015",
            end: "15/12/2019",
            title: "MBA"
            
        },
        {   
            id: 5476,
            institution: "Cambridge",
            start: "22/05/2015",
            end: "15/12/2019",
            title: "Computer Engineering"
            
        }
    ])

    const addQualification = ()=>{
        let id = Math.round(Math.random() * 10000+1);
        let institution = document.getElementById("institution").value;
        let start = document.getElementById("start").value;
        let end = document.getElementById("end").value;
        let title = document.getElementById("title").value;
        console.log(id, institution, start, end, title)

        setQualifications([...qualifications,
            {
                id: id,
                institution: institution,
                start: start,
                end: end,
                title: title
            }
        ]);

        document.getElementById("institution").value = ""
        document.getElementById("start").value = ""
        document.getElementById("end").value = ""
        document.getElementById("title").value = ""
        console.log(qualifications)
    }
    const deleteQualifications = (id)=>{
        console.log("deleted qualification", id)
        setQualifications(
            qualifications.filter((qualification) => qualification.id !== id)
        )
    }

    const [experience, setExperience] = useState([
        {
            id: 456,
            company: "World Bank",
            position: "Intern",
            responsibilites: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tempora",
            start: "2019/12/05",
            end: "2021/12/05"
        }
    ])

    const addExperience = ()=>{
        let id = Math.round(Math.random() * 10000+1);
        let company = document.getElementById("company").value;
        let position = document.getElementById("position").value;
        let responsibilites = document.getElementById("responsibilites").value;
        let start = document.getElementById("start").value;
        let end = document.getElementById("end").value;

        console.log("experience added")
        setExperience([...experience, 
            {   
                id: id,
                company: company,
                position: position,
                responsibilites: responsibilites,
                start: start,
                end: end
            }
        ])
    }

    const deleteExperience =(id)=>{
        setExperience(
            experience.filter((job)=> job.id !== id)
        )
    }
    
    return (
        <div>
            <Header/>
            <Mode  savePersonal={savePersonal} changeView={changeView} view={view} />
            { !view ? <Form  
                savePersonal={savePersonal}
                personal={personal}
                qualifications={qualifications}
                addQualification={addQualification}
                deleteQualifications={deleteQualifications}
                experience={experience}
                addExperience={addExperience}
                deleteExperience={deleteExperience}
                
            />:
            <Preview experience={experience} personal={personal} qualifications={qualifications} />}
        </div>
    )
}

export default App
