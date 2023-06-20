import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import GallerySearch from './GallerySearch'
import GalleryList from './GalleryList'

const Container = styled.div`
    width: ${props => props.width};
    margin: auto;
`

const Gallery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState('dog');

    useEffect(() => {
        const API_KEY = '10451829-5bc4919a46bc9b5b0313d285f'
        // const url = `https://pixabay.com/api/?key=${API_KEY}&q=&image_type=photo`
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo`
        axios.get(url)
            .then(res => {
                setData(res.data.hits)
                setLoading(true)
                setError(null)
            })
            .catch( error => {
                setData([])
                setLoading(false)
                setError('API 주소를 확인하세요')
            })
    },[data]);
    
    const onSearch = ( text ) => {
        setKeyword(text);
    }

    return (
        <Container width="1400px">
            <GallerySearch onSearch={onSearch} />
            <GalleryList data={data} />
        </Container>
    );
};

export default Gallery;