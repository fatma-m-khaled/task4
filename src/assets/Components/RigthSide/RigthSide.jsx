import Card from '../Card/Card'
import './RigthSide.css'
import work from '../../images/icon-social.svg'
import play from '../../images/icon-play.svg'
import study from '../../images/icon-study.svg'
import exercise from '../../images/icon-exercise.svg'
import social from '../../images/icon-social.svg'
import selfCare from '../../images/icon-self-care.svg'
function RightSide (){
    const arrayOfObject=[
        {
            uniqid:"1",
            fieldName:"work",
            time:"32hr",
            allTime:"Last week - 36hrs",
            BackgroundImage:work,
            BackgroundColor:"hsl(15, 100%, 70%)"
        },
        {
            uniqid:"2",
            fieldName:"play",
            time:"10hrs",
            allTime:"Last week - 8hrs",
            BackgroundImage:play,
            BackgroundColor:"hsl(195, 74%, 62%)"
        }, 
        {
            uniqid:"3",
            fieldName:"Study",
            time:"4hrs",
            allTime:"Last week - 7hrs",
            BackgroundImage:study,
             BackgroundColor:"hsl(348, 100%, 68%)"
        },
        {
            uniqid:"4",
            fieldName:"Exercise",
            time:"4hrs",
            allTime:"Last week - 5hrs",
            BackgroundImage:exercise,
             BackgroundColor:"hsl(145, 58%, 55%)"
        },
        {
            uniqid:"5",
            fieldName:"Social",
            time:"5hrs",
            allTime:"Last week - 10hrs",
            BackgroundImage:social,
             BackgroundColor:"hsl(264, 64%, 52%)"
        },
        {
            uniqid:"6",
            fieldName:"Self Care",
            time:"2hrs",
            allTime:"Last week - 2hrs",
            BackgroundImage:selfCare,
            BackgroundColor:"hsl(43, 84%, 65%)"
        }
    ]
    return(
        <div id="right"> 
        
       { arrayOfObject.map((item)=>{
      return(
            <Card 
            key={item.uniqid}
            fieldName={item.fieldName}
            time={item.time}
            allTime={item.allTime}
            BackgroundColor={item.BackgroundColor}
            BackgroundImage={item.BackgroundImage}
            ></Card>
        )
       }
       )}
        </div>
    )
}
export default RightSide