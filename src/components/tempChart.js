import _ from "lodash";
import React from 'react'; 
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function averageF(data){
 return _.round(_.sum(data)/data.length*9/5 - 459.67);    
}
function averageC(data){
 return _.round(_.sum(data)/data.length - 273.15);    
}
export default(props) =>{
    return(
      <div >  
        <Sparklines height={120} widtht={180} data={props.data} >
            <SparklinesLine  color={props.color}/>
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
     
      <div>Average: {averageF(props.data)}&deg;F/{averageC(props.data)}&deg;C</div>
       </div>
        )
}