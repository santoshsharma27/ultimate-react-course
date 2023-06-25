import React from "react";
import Day from "./Day";

class Weather extends React.Component {
  componentWillUnmount() {
    console.log("weather will unmount");
  }
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates.map((dates, i) => (
            <Day
              date={dates}
              max={max.at(i)}
              min={min.at(i)}
              code={codes.at(i)}
              key={dates}
              isToday={i === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Weather;
