import React, { Component } from 'react';
import * as S from './styled'
import { connect } from 'react-redux';
import { openModal } from '../../redux/actions'
import { closeModal } from '../../redux/actions'
import { onAdd } from '../../redux/actions'


class Modal extends Component {
    render() {
        return (
            <S.Modal visible={isModalOpen}>
                {
                    isModalOpen
                }
                <S.Input placeholder='Name' type='text'></S.Input>
                <S.Input placeholder='Age' type='text'></S.Input>
            </S.Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    isModalOpen: state.isModalOpen
});

const mapDispatchToProps = {
    openModal,
    closeModal,
    onAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);