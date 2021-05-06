import React from "react";

const IndianCity = ({ cityList }) => {
    return (
        <ol>
            {cityList.map((city, i) => {
                if (city.country === "India") {
                    return (
                        <li id={`location${i + 1}`} key={`location${i + 1}`}>
                            {city.name}
                        </li>
                    );
                }
            })}
        </ol>
    );
};

export default IndianCity;
