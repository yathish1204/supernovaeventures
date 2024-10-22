"use client"

import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.esm.jsx';
// import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';

const HeroBg = () => {
  return (
    <div className='container'>
        <ScrollyVideo src="https://res.cloudinary.com/dhdjylvwo/video/upload/v1729404842/clip1_tya6lf.mp4" full='true'  useWebCodecs='true'  sticky='true' trackScroll='true' />{/*full='true'*/}
    </div>
  )
}

export default HeroBg