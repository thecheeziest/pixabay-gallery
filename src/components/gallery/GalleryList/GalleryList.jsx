import React from 'react';
import Masonry from 'react-masonry-css'
import GalleryItem from './GalleryItem'
import { styled } from 'styled-components';
import { GalleryListContainer } from '../../styled/galleryStyle';

const GalleryList = ({data}) => {
    return (
        <GalleryListContainer>
            <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {
            data.map(item => <GalleryItem key={item.id} item={item} />)
            }
            </Masonry>
        </GalleryListContainer>
    );
};

export default GalleryList;