import React, { Component } from 'react';
import * as S from './styled.js'
import { connect } from 'react-redux';
import { openModal } from '../../redux/actions'
import { closeModal } from '../../redux/actions'



class About extends Component {
    state = {
        petName: '',
        age: '',

    }
    handleInput = (event) => {
        const update = {};
        update[event.target.id] = event.target.value
        this.setState(update)
        console.log(event.target.value)
    }
    handleAddPets = () => {
        const { petName, age } = this.state;
        this.props.onAdd({ petName, age })
    }

    render() {
        const {
            user,
            isModalOpen
        } = this.props

        return (
            <S.Container>
                <S.Title>Привет! {user.email || ''}</S.Title>
                <S.Button onClick={this.props.openModal}>Add Pets</S.Button>
                <S.ModalShadow> onClick={this.props.closeModal}</S.ModalShadow>
                <S.Modal visible={isModalOpen} >
                    {
                        isModalOpen
                    }
                    <S.Input
                        id='petName'
                        placeholder='Pet Name'
                        type='text'
                        value={this.state.petName}
                        onChange={this.handleInput}
                    >

                    </S.Input>

                    <S.Input
                        id='age'
                        placeholder='Age'
                        type='text'
                        value={this.state.age}
                        onChange={this.handleInput}
                    >

                    </S.Input>
                    <S.Button onClick={this.handleAddPets}>Add Pet</S.Button>
                    <S.Button onClick={this.props.closeModal}>Close</S.Button>
                </S.Modal>





            </S.Container >

        );
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    isModalOpen: state.isModalOpen,
});

const mapDispatchToProps = {
    openModal,
    closeModal,
}





export default connect(mapStateToProps, mapDispatchToProps)(About);