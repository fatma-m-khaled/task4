import './Card.css'

function Card(props){
return(
    <div className='CardItem' style={{backgroundColor:props.BackgroundColor}}>
   <img src={props.BackgroundImage}></img>
    <div className="Oncard">
       <div className='field'>
        <p>{props.fieldName}</p>
       <p className='dots'>...</p>
       </div> 
        <h3 className="time">{props.time}</h3>
        <p className='AllTime'>{props.allTime} </p>
    </div>
    </div>
)
}
export default Card
