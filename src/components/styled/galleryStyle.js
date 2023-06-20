import styled from 'styled-components'

// Gallery
export const Container = styled.div`
width: ${props => props.width};
margin: auto;
`

// GalleryList
export const GalleryListContainer = styled.div`
.my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 30px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  background: grey;
  margin-bottom: 30px;
}
`

// GalleryItemBox
export const GalleryItemBox = styled.article`
    margin-bottom:40px;
    box-shadow:5px 5px 10px #efefef;
    padding:15px 15px 35px; 
    border:1px solid #efefef;
img { width:100% }
h2 { font-size:25px; color: #759700; margin-bottom:15px;
    text-transform:uppercase; font-weight: 800; }
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

// GallerySearchForm
export const GallerySearchForm = styled.form`
    padding:30px;
    text-align:center;
    margin: 30px 0 0 0;
input {
    width:400px; height:50px;
    box-sizing:border-box; 
    outline:none;
    padding:0 20px;
    font-size:16px;
    border: 1px solid #c4fd00;
} 
button {
    width:120px; height:50px; border:none; 
    background: #c4fd00; color: #759700;
    vertical-align:top; 
    font-size: 20px; font-weight: 700;
    cursor: pointer;
    &:hover {
        background: #759700; color: #FFF;
    }
}
`

// GallerySearchLogBox
export const GalleryLogBox = styled.div`
    display: flex;
    width: 1200px;
    margin: 0 auto 40px;
    justify-content: center;
    div {
        width: auto;
        height: 50px;
        background: #759700;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 25px;
        margin-right: 20px;
        padding: 0 20px;
        box-sizing: border-box;
        font-size: 18px;
        color: #FFF;
        p {
            margin-right: 15px;
        }
    }
`