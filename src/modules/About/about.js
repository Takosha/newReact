import React from 'react';
import * as S from './styled.js'
import { connect } from 'react-redux';



const About = (props) => {
    console.log(props.user)

    return (
        <S.Title>Привет! {props.user.email}</S.Title>
    );
}
const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps)(About);