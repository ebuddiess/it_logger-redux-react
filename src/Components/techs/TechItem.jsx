import React  from 'react'



const TechItem = ({tech}) => {
    return (
        <li className="collection-item"> {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content"><i className="material-icons grey-text">delete</i></a>
        </li> 
           )
}

export default TechItem