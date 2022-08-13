import styled from "styled-components"
import {ReactComponent as file} from "./file.svg"

export const Box = styled.div`
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 0 30px;
    padding-bottom: 2rem;
    margin-bottom: 1.5rem;
    input{
        border-bottom: 2px solid #E6E9EC;
    }
`

export const InputsGroup = styled.div`
    display: flex;
    column-gap: 20px;
    margin-bottom: ${({mb})=>mb?mb:"2rem"};
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 90px;
    border: 0;
    border-bottom: 2px solid #E6E9EC;
    transition-duration: 0.15s;
    &:focus{
        outline: 0;
        border-bottom: 2px solid #24808f;
    }
`

export const UploadArea = styled.div`
    margin: 44px 0;
    >span{
        color: #696969;
    }
`

export const FeaturedImage = styled.div`
    width: 150px;
    height: 150px;
    background: #C4C4C4;
    border-radius: 3px;
`

export const FileIcon = styled(file)`
    margin-right: 14px;
`

export const File = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
`

export const CheckboxList = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    >div{
        width: 25%;
        >label{
            padding-left: 12px;
        }
    }
`

export const SubmitBox = styled.div`
    display: flex;
    justify-content: end;
    margin: 2rem 0;
    >button{
        padding: 12px 40px;
        border: 0;
        border-radius: 2px;
        background: #0061DF;
        color: #fff;
        cursor: pointer;
    }
`

export const Button = styled.button`
    padding: 12px 40px;
    margin: 1rem 0;
    border: 1px solid #0061DF;
    border-radius: 2px;
    background: #fff;
    color: #0061DF;
    cursor: pointer;
    transition-duration: 0.15s;
    :hover{
        background: #0061DF;
        color: #fff;
    }
`