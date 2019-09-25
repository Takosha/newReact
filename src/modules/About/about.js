import React, { Component } from 'react';
import * as S from './styled.js'
import { connect } from 'react-redux';
import { openModal } from '../../redux/actions'
import { closeModal } from '../../redux/actions'



class About extends Component {

    onOpenModal = () => {
        this.setState(this.state.openModal)

        console.log(this.props)
    }

    onCloseModal = () => {
        this.setState(this.props.closeModal)
        console.log(2)
    }

    onButtonClick = () => {

    }

    render() {
        return (
            <S.Container>
                <S.Title>Привет! {this.props.user.email || ''}</S.Title>
                <S.Button onClick={this.onOpenModal}>Add Pets</S.Button>

                <S.Modal >
                    <S.Button onClick={this.onCloseModal}>Close</S.Button>
                </S.Modal>
            </S.Container>

        );
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    isModalOpen: false,
});

const mapDispatchToProps = {
    openModal,
    closeModal,
}





export default connect(mapStateToProps, mapDispatchToProps)(About);