import { Link, useLoaderData } from "react-router-dom"
 

 

function Players() {

    const data = useLoaderData()
    console.log(data);
    
    return (
        <div>
            <h2>every players are here</h2>
            {
                data.map(player =>  <li><Link key={player.id} to={`/player/${player.playerId}`}> {player.name}</Link></li>)
            }
        </div>
    )
}

export default Players
