import styled from 'styled-components'


export const Title = styled.span`
    font-size:40px;
    font-weight:800;
    color: green;
`
export const Container = styled.div`
`
export const Label = styled.label`
    
`

export const FormContainer = styled.div`
    display: inline-grid;
`

export const Input = styled.input`
display:block
    outline: ${input => input.error ? '1.5px solid red' : 'none'};
    :focus {
        background: #ffe;
    }
`

export const Button = styled.button`
    margin-top: 5px;

`
export const ButtonClose = styled.button`

`

export const InputError = styled.span`
    color: red;
    font-size: 12px;
    font-weight: 600;
`
export const Modal = styled.div`
position: absolute;
    top: 10%;
    left: 33%;
    width: 400px;
    height: 350px;
    background-color: pink;
    border: 2px solid black;
    box-shadow: 1px 1px 1px 1px grey;
    visibility: ${ModalWindow => ModalWindow.visible ? 'visible' : 'hidden'};
`
export const ModalShadow = styled.div`
 position: absolute;
    width: 100%;
    height: 100%;
    background-color: grey;
    opacity: 0.7;
    visibility: ${ModalWindow => ModalWindow.visible ? 'visible' : 'hidden'};
`