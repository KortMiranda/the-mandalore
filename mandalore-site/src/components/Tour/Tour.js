import React from 'react';
import './Tour.css'


function Tour(props) { 
    return (
        <div>
            <div className="tour-container">
            <h2>Tour</h2>
                <table>
                    <tr className="row">
                        <td>
                            <p>Date</p>
                            <p>Venue</p>
                            <p>Tour Title</p>
                        </td>
                        <td>
                            <p>Location</p>
                        </td>
                        <td>
                            <button>Tickets</button>
                        </td>
                    </tr>
                    <tr className="row">
                        <td>
                            <p>Date</p>
                            <p>Venue</p>
                            <p>Tour Title</p>
                        </td>
                        <td>
                            <p>Location</p>
                        </td>
                        <td>
                            <button>Tickets</button>
                        </td>
                    </tr>
                    <tr className="row">
                        <td>
                            <p>Date</p>
                            <p>Venue</p>
                            <p>Tour Title</p>
                        </td>
                        <td>
                            <p>Location</p>
                        </td>
                        <td>
                            <button>Tickets</button>
                        </td>
                    </tr>
                    <tr className="row">
                        <td>
                            <p>Date</p>
                            <p>Venue</p>
                            <p>Tour Title</p>
                        </td>
                        <td>
                            <p>Location</p>
                        </td>
                        <td>
                            <button>Tickets</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Tour;