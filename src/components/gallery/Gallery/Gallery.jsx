import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import { Container } from '../../styled/galleryStyle'
import GallerySearch from '../GallerySearch/GallerySearch'
import GalleryList from '../GalleryList/GalleryList'
import GalleryLog from '../GalleryLog/GalleryLog';

const Gallery = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const no = useRef(1);
    const [log, setLog] = useState([]);
    const [keyword, setKeyword] = useState({ word: ''});

    useEffect(() => {
        const API_KEY = '10451829-5bc4919a46bc9b5b0313d285f'
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
    },[keyword]);
    
    const onSearch = ( text ) => {
        setKeyword(text);
        setLog(item => [
            ...item,
            { id: no.current++, logword: text } ]);
        if (log.length > 4) {
            setLog(item => item.slice(1));

        }
    }
    const onDel = id => {
        setLog(log.filter(item => item.id !== id));
    }

    console.log(log)

    return (
        <>
        {
            data && loading ?
            <Container width="1400px">
            <GallerySearch onSearch={onSearch} />
            <GalleryLog log={log} onDel={onDel} />
            <GalleryList data={data} />
            </Container>
            : <h2>로딩 중..</h2>
        }
        <h3> {error ? error : null} </h3>
        </>
    );
};

export default Gallery;