import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function House (props) {
    let { id } = useParams()
    const house = props.houses.find((house) => 
        house.id.toString() === id
    )
    const peopleArr = house.people.map((member, idx) => {
        return (
        <li key={`member${idx}`}>
            <Link to={`/houses/${house.id}/members/${member.id}`}>{member.name}</Link>
        </li>
        )
    })
    return (
    <div className="page">
        <div className="header">
            <h2>Members of a {house.name} House</h2>
        </div>
        <ul className="list">
            {peopleArr}
        </ul>
    </div>
    )
}