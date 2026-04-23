import styled from "styled-components";

export const SPopBrowse = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
    
    //:target {
    //    display: block;
    //}
    
    //@media screen and (max-width: 660px)
    //top: 70px;
`

export const SPopBrowseContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    
    //@media screen and (max-width: 660px)
    // padding: 0;
    //     justify-content: flex-start;
`

export const SPopBrowseBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
    
    //@media screen and (max-width: 660px)
    // border-radius: 0;
    
    //@media screen and (max-width: 495px)
    //padding: 20px 16px 32px;
`

export const SPopBrowseContent = styled.div`
    display: block;
    text-align: left;
`

export const SPopBrowseTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`

export const SPopBrowseTitle = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`