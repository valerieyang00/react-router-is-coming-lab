import { Link } from 'react-router-dom'

export default function Houses (props) {
    const houseArr = props.houses.map((house, idx) => {
        return (
            <li key={`house-${idx}`}>
                <Link to={`/houses/${house.id}`}>{house.name}</Link>
            </li>
        )
    })
    return (
    <div>
        <div className="header">
            <h2>Game of Thrones Houses</h2>
        </div>
        <ul className="list">
            {houseArr}
        </ul>
    </div>
  )
}