import React, { useState } from 'react';
import { styled } from 'styled-components';
import { GallerySearchForm } from '../../styled/galleryStyle';

const GallerySearch = ( { onSearch } ) => {
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (!text) return;
        onSearch(text);
        setText('');
    }

    return (
        <GallerySearchForm onSubmit={onSubmit}>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button type='submit'>검색</button>
        </GallerySearchForm>
    );
};

export default GallerySearch;