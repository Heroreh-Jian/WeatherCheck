import React, {Component} from 'react'; 
import {connect} from "react-redux";
import TempChart from "../components/tempChart";
import "./style.css";
import Map from "../components/map";
import _ from "lodash";


class List extends Component{
  renderWeather(data){
    const temperature = data.list.map(temps => temps.main.temp);
    var icon = data.list[0].weather[0].icon +".png";
    var url = `https://openweathermap.org/img/w/${icon}` ;
    var tempF = _.round(data.list[0].main.temp*9/5 - 459.67);
    var tempC = _.round(data.list[0].main.temp - 273.15);
    
    
    const {lat, lon} = data.city.coord;
    
    return (
      <tr key={data.city.id}>
        <td><Map lat={lat} lon={lon}/></td>
         <td> 
         <strong><p >{tempF}&deg;F/{tempC}&deg;C</p></strong>
         <p id="desc">{data.list[0].weather[0].description}</p>
         <img src={url} alt=""/>
         </td>
        <td><TempChart data={temperature} color="blue" /></td>
        
        
      </tr>
        )  
  }
  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Current Weather</th>
            <th>
            Temperature Trend
            <p> 5-Day Weather Forecast Every 3 Hours</p>
            </th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}
// function mapStateToProps(state){
//   return {weather: state.weather};
// }
function mapStateToProps({weather}){
 return {weather};
}



export default connect(mapStateToProps)(List)

