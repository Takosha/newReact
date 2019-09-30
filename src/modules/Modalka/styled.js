import styled from 'styled-components'

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