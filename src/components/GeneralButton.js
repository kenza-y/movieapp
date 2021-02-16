import React, {useState} from "react";
import Modal from 'react-modal';
import Button from "react-bootstrap/Button";
import ModalContent from "./ModalContent";

const GeneralButton = (props) => {
    const [modalIsOpen,setModalIsOpen] = useState(false);

    return(
        <div>
            <Button variant="dark" onClick = {() => setModalIsOpen(true) }>Voir plus..</Button>
            <Modal isOpen = {modalIsOpen} onRequestClose = {() => setModalIsOpen(false)}>
            <ModalContent 
            overview = {props.overview}
            vote_count = {props.vote_count}
            vote_average = {props.vote_average}
            release_date = {props.release_date}
            popularity = {props.popularity}
            title = {props.title}
             poster_path = {props.poster_path}/>
            </Modal>        
        </div>
    );
}

export default GeneralButton;