import React from 'react'

function SectionHeading(props) {
    return (
        <div className="section-heading-wrapper text-center mb-5">
            <h4 className="sub-heading" style={{color:props.sectionColor}}>{props.subheading}</h4>
            <h2 className="section-heading" style={{color:props.sectionColor}}>{props.heading}</h2>
            <div className="section-heading-below-image">
                <img src={process.env.PUBLIC_URL + '/images/Shape1.png'} alt="section below line"/>
            </div>
        </div>
    )
}

export default SectionHeading
