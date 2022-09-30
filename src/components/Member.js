import { useParams } from 'react-router-dom'

export default function Member (props) {
    let { houseId, memberId } = useParams()
    const house = props.houses.find((house) => 
        house.id.toString() === houseId
    )
    const member = house.people.find((member) => 
        member.id.toString() === memberId
    )

    return (
    <div className="page">
        <div className="header">
            <h2>{member.name} from {house.name}</h2>
        </div>
        <div className="desc">
            {member.description}
        </div>
        <div className="wikiSuffix">
            <a target='_blank' href={`https://awoiaf.westeros.org/index.php/${member.wikiSuffix}`}>More details...</a>
        </div>
    </div>
    )
}