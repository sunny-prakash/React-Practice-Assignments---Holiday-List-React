import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.cityList = [
            { name: "Goa", country: "India" },
            { name: "Amsterdam", country: "Netherlands" },
            { name: "New York", country: "USA" },
            { name: "Darjeeling", country: "India" },
            { name: "Tokyo", country: "Japan" },
            { name: "Lonavala", country: "India" },
            { name: "Brandenburg Gate", country: "Germany" },
            { name: "Reichstag Building", country: "Germany" },
            { name: "Museum Island", country: "Germany" },
            { name: "Munnar", country: "India" },
            { name: "Leh Ladakh", country: "India" },
            { name: "Goa", country: "India" },
            { name: "Agra", country: "India" },
            { name: "Dalhousie", country: "India" },
            { name: "Coorg", country: "India" },
            { name: "Rome", country: "Italy" },
            { name: "Milan", country: "Italy" },
            { name: "Venice", country: "Italy" },
            { name: "Varanasai", country: "India" },
            { name: "Jaipur", country: "India" },
            { name: "The Hofburg", country: "Austria" },
            { name: "Belvedere Palace", country: "Austria" },
            { name: "St. Stephen Cathedral", country: "Austria" },
            { name: "Kahna National Park", country: "India" },
            { name: "Amritsar", country: "India" },
            { name: "Mussoorie", country: "India" },
            { name: "Mount Abu", country: "India" },
            { name: "Tirupati", country: "India" },
        ];
    }

    render() {
        return (
            <div id="main">
                {/* Do not remove the main div */}
                <ol>
                    <li ke={"location1"}>Goa</li>
                    <li ke={"location2"}>Darjeeling</li>
                    <li ke={"location3"}>Lonavala</li>
                    <li ke={"location4"}>Munnar</li>
                    <li ke={"location5"}>Leh Ladakh</li>
                    <li ke={"location6"}>Goa</li>
                    <li ke={"location7"}>Agra</li>
                    <li ke={"location8"}>Dalhousie</li>
                    <li ke={"location9"}>Coorg</li>
                    <li ke={"location10"}>Varanasai</li>
                    <li ke={"location11"}>Jaipur</li>
                    <li ke={"location12"}>Kahna National Park</li>
                    <li ke={"location13"}>Amritsar</li>
                    <li ke={"location14"}>Mussoorie</li>
                    <li ke={"location15"}>Mount Abu</li>
                    <li ke={"location16"}>Tirupati</li>
                </ol>
            </div>
        );
    }
}

export default App;
