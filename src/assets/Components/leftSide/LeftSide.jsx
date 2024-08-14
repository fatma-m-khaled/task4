import './LeftSide.css'
import profile from '../../images/profile.png'
function LeftSide (){
    return(
        <div id="LeftMain">
        <div id="OnCard">
            <img src={profile} id="profilImg"></img>
         <div id='defination'>  <p id="forwho">Report for</p>
            <h1 id="name">Jeremy Robson</h1>
            </div> 
        </div>
       <div className='labels'> 
        <label className='lab'>Daily </label>
        <label className='lab'>Weekly </label>
        <label className='lab'>Monthly </label>
        </div>
        </div>
    )
}
export default LeftSide