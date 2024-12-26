import React from 'react';

function HodFaculty() {
  return (
    // <div className="container">
      <div className="row justify-content-center mt-5 ms-3">
        {/* Card 1 */}
        <div className="col-md-3 mb-4 mt-2">
          <div
            className="card"
            style={{
              width: '12rem',
              height: '12rem',
            }}
          >
            <img
              src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/mohanlal-1502-24-03-2017-12-30-59.jpg"
              className="card-img-top"
              alt="Card image 1"
              style={{
                objectFit: 'cover',
                height: '10rem',
              }}
            />
            <div className="card-body">
              <p
                className="card-text mt-2"
                style={{
                  fontSize: '0.9rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                1st year
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 mb-4 mt-2">
          <div
            className="card"
            style={{
              width: '12rem',
              height: '12rem',
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVOxJiwFuCtGfEXVPt6HzX9AYkV-U07evBA&s"
              className="card-img-top"
              alt="Card image 2"
              style={{
                objectFit: 'cover',
                height: '10rem',
              }}
            />
            <div className="card-body">
              <p
                className="card-text mt-2"
                style={{
                  fontSize: '0.9rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                2nd year
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 mb-4 mt-2">
          <div
            className="card"
            style={{
              width: '12rem',
              height: '12rem',
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aR7F6DY4hvzfA_Tsoc23_-j1UWxN72F_Tg&s"
              className="card-img-top"
              alt="Card image 3"
              style={{
                objectFit: 'cover',
                height: '10rem',
              }}
            />
            <div className="card-body">
              <p
                className="card-text mt-2"
                style={{
                  fontSize: '0.9rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                3rd year
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 mb-4">
          <div
            className="card"
            style={{
              width: '12rem',
              height: '12rem',
            }}
          >
            <img
              src="https://images.filmibeat.com/img/popcorn/profile_photos/mammootty-20231225114212-2447.jpg"
              className="card-img-top"
              alt="Card image 4"
              style={{
                objectFit: 'cover',
                height: '10rem',
              }}
            />
            <div className="card-body">
              <p
                className="card-text mt-2"
                style={{
                  fontSize: '0.9rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                4th year
              </p>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default HodFaculty;
