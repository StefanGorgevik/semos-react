import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className='container'>
            <h4 className="center">About</h4>
            <p>lorem Note that the development build is not optimized.Note that the development build is not optimized. To create a production build, use npm run build.  To create a production build, use npm run build. </p>
        </div>
    )
}

export default Rainbow(About)