import React from 'react';
import "./hodAnnounce.css";
import pdf from '../assets/dummy1.pdf';

function HodAnnounce() {
    return (
        <>
            <div className='nh'>
                <h2>
                    <i className="fa-solid fa-volume-low size me-2" style={{ color: "green" }}></i>
                    <b>Announcement</b>
                </h2>
            </div>
            <div className='card-container'>
                {/* Card 1 */}
                <div className="card shadow">
                    <p className="card-text">Pay attention to continuity between shots. Each shot should logically follow the previous one in terms of action, position, and story progression.</p>
                    <h3 className="card-title">Match Action and Continuity</h3>
                    <a href={pdf} download className='form-control sm align-items-center w-50'>
                        <i
                            className="fa-solid fa-file-pdf me-3"
                            style={{ color: '#ee4917', fontSize: '10px' }}
                        >
                            <span className='ms-2'>Download</span>
                        </i>
                    </a>
                </div>

                {/* Card 2 */}
                <div className="card shadow ">
                    <p className="card-text">Trust your instincts to select one task each day, whether it's urgent, joyful, or satisfying. This empowers you to create your own reality instead of letting other people dictate your life.</p>
                    <h3 className="card-title">Daily Highlight Method</h3>
                    <a href={pdf} download className='form-control sm  w-50'>
                        <i
                            className="fa-solid fa-file-pdf me-3"
                            style={{ color: '#ee4917', fontSize: '10px' }}
                        >
                            <span className='ms-2'>Download</span>
                        </i>
                    </a>
                </div>

                {/* Card 3 */}
                <div className="card shadow">
                    <p className="card-text">When writing notes, write in your own words. You're not creating your own Wikipedia or Google, you already have those at your disposal. You’re writing and formulating your own ideas, arguments, and truths.</p>
                    <h3 className="card-title">Don't create your own Google</h3>
                    <a href={pdf} download className='form-control sm  w-50'>
                        <i
                            className="fa-solid fa-file-pdf me-3"
                            style={{ color: '#ee4917', fontSize: '10px' }}
                        >
                            <span className='ms-2'>Download</span>
                        </i>
                    </a>
                </div>

                {/* Card 4 */}
                <div className="card shadow">
                    <p className="card-text">When writing notes, write in your own words. You're not creating your own Wikipedia or Google, you already have those at your disposal. You’re writing and formulating your own ideas, arguments, and truths.</p>
                    <h3 className="card-title">Don't create your own Google</h3>
                    <a href={pdf} download className='form-control sm  w-50'>
                        <i
                            className="fa-solid fa-file-pdf me-3"
                            style={{ color: '#ee4917', fontSize: '10px' }}
                        >
                            <span className='ms-2'>Download</span>
                        </i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default HodAnnounce;
