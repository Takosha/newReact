import styled from 'styled-components'

export const Container = styled.div`
    display: inline-grid;
    position: absolute;
    top: 20%;
    left: 42%;  
`

export const Title = styled.span`
    font-size: 40px;
    font-weight: 600;
`

export const Label = styled.label`
    color: ${label => label.error ? 'red' : 'black'};
    font-size: 15px;
    font-weight: 350;
`

export const FormContainer = styled.div`
    display: inline-grid;
`

export const Input = styled.input`
    outline: ${input => input.error ? '1.5px solid red' : 'none'};
    :focus {
        background: #ffe;
    }
`

export const Button = styled.button`
    margin-top: 5px;
    
`

export const InputError = styled.span`
    color: red;
    font-size: 12px;
    font-weight: 600;
`
export const Modal = styled.div`
opacity: 0.7;
`
