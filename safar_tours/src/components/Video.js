import React from 'react'
import SectionHeading from './SectionHeading';

const Video = () => {
    return (
        <section className="video-section">
            <div className="container">
                <SectionHeading heading="What Our Video Tour" shape="/images/ShapeWhite.png" subheadingColor="#FFFFFF" subheading="DISCOVER" sectionColor="#fff" align="text-center"/>
                <div className="row">
                    <div className="embed-responsive embed-responsive-21by9">
                        <iframe className="embed-responsive-item" src="/video/safar.mp4" title="Video"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video
