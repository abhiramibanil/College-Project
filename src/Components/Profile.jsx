import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <>
      <h1 className='d-flex justify-content-center mt-3'>My <span className='text-success ms-2'>Profile</span> </h1><br />
      <div className='d-flex justify-content-start' style={{ marginLeft: "70px" }}>
        <Link to={'/'} style={{ textDecoration: "none", color: "green" }}><i class="fa-solid fa-arrow-left"></i> Home</Link>
      </div>
      <div className="container mt-2">
        <div className="w-50 mx-auto shadow rounded-50 p-5 ">
          <div className="text-center">
            <img
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt="User Avatar"
              width="100"
              className="rounded-circle"
            />
            <h3 className="mt-2" style={{ fontFamily: "arial" }}>
              Aswanth
            </h3>
            <span className="d-block">paswanthvtk@gmail.com</span>
            <span className="d-block">9876543210</span>
            {/* <Divider className="my-3" />
            <Row className='d-flex justify-content-between'>
              <Col md={4} xs={12} className="text-center">
                <h5>Digital Collectibles</h5>
                <span>{nfts.length}</span>
              </Col>
              <Col md={4} xs={12} className="text-center">
                <h5>User Name</h5>
                <span>{user.username}</span>
              </Col>
            </Row> */}
            {/* <hr />
            <div>
              <h5>Digital Collection:</h5>
              {nfts.length > 0 ? (
                <Carousel>
                  {nfts.map((nft) => (
                    <Carousel.Item key={nft.id}>
                      <Link
                        to={{
                          pathname: '/NFTDetails',
                        }}
                        state={{
                          token_id: nft.token_id,
                          product_id: nft.product_id,
                          acc_address: nft.acc_address,
                          expiry_date: nft.expiry_date,
                          diff: nft.diff,
                          redeem: nft.redeem,
                        }}
                      >
                        <img
                          className="d-block w-100"
                          src={`http://127.0.0.1:8000${nft.image}`}
                          alt={nft.name}
                        />
                      </Link>
                      <Carousel.Caption>
                        <h3>{nft.name}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <p>No NFTs available.</p>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  
  )
}

export default Profile