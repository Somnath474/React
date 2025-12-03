import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
    return (
        <div className="relative w-80 h-120 shrink-0  overflow-hidden rounded-4xl">
            
            {/* Image */}
            <img
                className="absolute inset-1 w-full h-full object-cover rounded-3xl"
                src={props.img}
                alt=""
            />
            <RightCardContent color={props.color} id={props.id} tag={props.tag}/>
        </div>
    );
};

export default RightCard;