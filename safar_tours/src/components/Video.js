import React from 'react'
import SectionHeading from './SectionHeading';

const Video = () => {
    return (
        <section className="video-section">
            <div className="container">
                <SectionHeading heading="What Our Video Tour" subheading="DISCOVER" sectionColor="#fff" />
                <div className="row">
                    <div class="embed-responsive embed-responsive-21by9">
                        <iframe class="embed-responsive-item" src="/video/safar.mp4"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video
