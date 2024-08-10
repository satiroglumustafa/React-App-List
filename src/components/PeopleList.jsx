
import './PeopleList.css'
const peopleList = ({personImage,personName,personAge})=>{
    return(
        <>
            <div className="person-item">
                <div className="person-image">
                    <img src={personImage} alt="" />
                </div>
                <div className="personDetail">
                    <div className="person-name">{personName}</div>
                    <div className="personAge"><strong>Age:</strong> {personAge}</div>
                </div>
            </div>
        </>
    )
}

export default peopleList