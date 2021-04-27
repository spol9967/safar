import React from 'react'

function SectionHeading(props) {
    return (
        <div className={`section-heading-wrapper mb-3 ${props.align}`}>
            <h4 className="sub-heading" style={{color:props.subheadingColor}}>{props.subheading}</h4>
            <h2 className="section-heading" style={{color:props.sectionColor}}>{props.heading}</h2>
            <div className="section-heading-below-image">
                <img src={process.env.PUBLIC_URL + props.shape} alt="section below line"/>
            </div>
        </div>
    )
}

export default SectionHeading
