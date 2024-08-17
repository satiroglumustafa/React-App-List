
import './PeopleList.css'
const PeopleList = ({ peopleListItems }) => {
    return (
        <>

            {
                peopleListItems.map(person =>
                    <div className="person-item" key={person.id}>
                        <div className="person-image">
                            <img src={person.image} alt="" />
                        </div>
                        <div className="personDetail">
                            <div className="person-name">{person.name}</div>
                            <div className="personAge"><strong>Age:</strong> {person.age}</div>
                        </div>
                    </div>
                )
            }


        </>
    )
}

export default PeopleList


