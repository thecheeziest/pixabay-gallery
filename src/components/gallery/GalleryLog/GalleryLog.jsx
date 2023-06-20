import React from 'react';
import { GalleryLogBox } from '../../styled/galleryStyle';

const GalleryLog = ({log}) => {
    return (
        <GalleryLogBox>
            {
                log.map(item => <div className="log">
                <p>{item}</p>
                <i className='xi-close-circle'></i>
            </div>)
            }
        </GalleryLogBox>
    );
};

export default GalleryLog;