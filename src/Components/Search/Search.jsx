import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'; 

const TabbedSearchForm = () => {
    const [activeTab, setActiveTab] = useState('destination');

    // Handles tab switching
    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container mt-5 mb-5 search">
            {/* Tab Navigation */}
            <div className="d-flex align-items-center ">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'destination' ? 'active' : ''}`}
                            onClick={() => handleTabSwitch('destination')}
                        >
                            Destination
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'hotel' ? 'active' : ''}`}
                            onClick={() => handleTabSwitch('hotel')}
                        >
                            Hotel
                        </button>
                    </li>
                </ul>
            </div>

            {/* Tab Content */}
            <div className="tab-content p-4 border border-top-0 shadow-sm ">
                {activeTab === 'destination' && (
                    <form className="row g-3 align-items-end bg-white">
                        <div className="col-md-4">
                            <label htmlFor="destination" className="form-label fw-bold text-uppercase">Destination</label>
                            <input type="text" className="form-control" id="destination" placeholder="Search place" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="checkInDate" className="form-label fw-bold text-uppercase">Check-In Date</label>
                            <input type="date" className="form-control" id="checkInDate" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="checkOutDate" className="form-label fw-bold text-uppercase">Check-Out Date</label>
                            <input type="date" className="form-control" id="checkOutDate" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="priceLimit" className="form-label fw-bold text-uppercase">Price Limit</label>
                            <input type="number" className="form-control" id="priceLimit" placeholder="$100" />
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-danger w-100">Search</button>
                        </div>
                    </form>
                )}
                {activeTab === 'hotel' && (
                    <form className="row g-3 align-items-end bg-white">
                        <div className="col-md-4">
                            <label htmlFor="hotelDestination" className="form-label fw-bold text-uppercase">Hotel Name</label>
                            <input type="text" className="form-control" id="hotelDestination" placeholder="Name of the Hotel" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="hotelCheckInDate" className="form-label fw-bold text-uppercase">Check-In Date</label>
                            <input type="date" className="form-control" id="hotelCheckInDate" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="hotelCheckOutDate" className="form-label fw-bold text-uppercase">Check-Out Date</label>
                            <input type="date" className="form-control" id="hotelCheckOutDate" />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="hotelPriceLimit" className="form-label fw-bold text-uppercase">Price Limit</label>
                            <input type="number" className="form-control" id="hotelPriceLimit" placeholder="$100" />
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-danger w-100">Search</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default TabbedSearchForm;