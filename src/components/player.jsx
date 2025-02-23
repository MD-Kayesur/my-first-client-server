import { useLoaderData } from "react-router-dom"

 

function Player( ) {

    const player = useLoaderData()
    console.log(player);
    
    return (
        <div>
             
            <img className="w-30 h-30" src={player.image} alt="" />
        </div>
    )
}

export default Player
