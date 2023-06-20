import React from 'react';
import { styled } from 'styled-components';
import { GalleryItemBox } from '../../styled/galleryStyle';

const GalleryItem = ( {item} ) => {
    const {webformatURL, user, views, downloads, likes, tags } = item
    const str = tags.split(", ")

    return (
        <GalleryItemBox>
            <img src={webformatURL} alt={user} width="476px" />
            <h2>{user}</h2>
            <ul>
                <li>조회수 : {views}</li>
                <li>다운로드 : {downloads}</li>
                <li>좋아요 : {likes}</li>
            </ul>
            <p>
                {
                    str.map(item => <span>#{item}</span>)
                }
            </p>
        </GalleryItemBox>
    );
};

export default GalleryItem;