import React from 'react';
import { GalleryLogBox } from '../../styled/galleryStyle';

const GalleryLog = ({log, onDel}) => {
    return (
        <GalleryLogBox>
            {
                log.map(item => <div className="log">
                <p>{item.logword}</p>
                <i className='xi-close-circle' onClick={() => onDel(item.id)}></i>
            </div>)
            }
        </GalleryLogBox>
    );
};

export default GalleryLog;