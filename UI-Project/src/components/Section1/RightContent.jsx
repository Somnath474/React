import RightCard from "./RightCard";

const RightContent= (props)=>{
    return(
        <div id="right" className="h-full overflow-x-auto p-5 w-3/4 flex flex-nowrap gap-10">
        {props.users.map(function(elem,idx){

          return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
        })}
        
        </div>
    )
}
export default RightContent;