import React from 'react'
import "./Coursedescription.css"

function CourseDescription() {
  return (
    <>
    <div className='cd-main'>
    <div className='c-description shadow'>
        <div className='c-description-head justify-content-center align-items-center d-flex'><h2>DepartmentName</h2></div>
        <div className='cd-para' ><p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eum voluptate aut! Quo maxime pariatur, illo temporibus voluptate fugit aperiam nostrum officia, dolore voluptates quidem omnis delectus. Ut, non odit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem sed iure deserunt quae ex saepe quasi fuga voluptatibus! Vel officiis, fugit laboriosam consectetur modi harum eaque tempora nam tempore.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolorum debitis iusto nisi quia dolore veniam nihil rerum nulla explicabo. Ipsam, repellendus hic a architecto nemo accusantium possimus non dignissimos?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius nulla laborum consequuntur corrupti dolor tempora libero sed ducimus, repellat, dicta dolore inventore at non ratione eveniet alias, ea quod.
        </p>
        </div>
        <div className='batch-button'>
          <div><b></b></div>
          <div className='btech'><b>B.tech</b></div>
          <div className='mtech'><b>M.tech</b></div>
        </div>
    </div>
    </div>
    </>
  )
}

export default CourseDescription