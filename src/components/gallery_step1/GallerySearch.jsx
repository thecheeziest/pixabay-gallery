import React, { useState } from 'react';
import { styled } from 'styled-components';

const GallerySearchForm = styled.form`
    padding:30px;
    text-align:center;
    margin: 30px 0 70px 0;
input {
    width:400px; height:50px;
    box-sizing:border-box; 
    outline:none;
    padding:0 20px;
    font-size:16px;
    border: 1px solid #a8ff3d;
} 
button {
    width:120px; height:50px; border:none;
    background:#a8ff3d; color:#000000; 
    vertical-align:top; 
}
`

const GallerySearch = ( { onSearch } ) => {
    const [text, setText] = useState('')
    const onSubmit = e => {
        e.preventDefault();
        if (!text) return;
        onSearch(text)
    }
    return (
        <GallerySearchForm onSubmit={onSubmit}>
            <input type="text" onChange={e => setText(e.target.value)}/>
            <button type='submit'>검색</button>
        </GallerySearchForm>
    );
};

export default GallerySearch;