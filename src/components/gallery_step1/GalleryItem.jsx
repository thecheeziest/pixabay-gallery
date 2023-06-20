import React from 'react';
import { styled } from 'styled-components';

const GalleryItemBox = styled.article`
    margin-bottom:40px;
    box-shadow:5px 5px 10px #efefef;
    padding:15px 15px 35px; 
    border:1px solid #efefef;
img { width:100% }
h2 { font-size:25px;  color:hotpink; margin-bottom:15px; text-transform:uppercase; }
ul { margin-bottom:20px;
    li { margin-bottom:5px }
}
p {
    span {
        display:inline-block; padding:3px 20px; border-radius:15px; 
        background:#efefef; margin-right:5px; 
    }
}
`

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