import { ItemTypes } from "../utils/Constants";
import { useDrag } from "react-dnd";

function Knight() {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return (
        <div ref={drag}
        style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move'
        }}
        className='character'>
           ♘ 
        </div>
    )
}

export default Knight;