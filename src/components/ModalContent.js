import React, {useState} from "react";
import Image from "react-bootstrap/Image";
import Title from "./Title";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../styles';

const ModalContent = (props) => {
    return(
        <div>
        <Container>
         
         <Row>
             <Col> 
             <Title title = {props.title}/>
             <p> <span  style={styles.cStyle}>Popularity : </span> {props.popularity}</p>
             <p> <span style={styles.cStyle}>Release date : </span> {props.release_date}</p>
             <p> <span style={styles.cStyle}> Average vote : </span> {props.vote_average}</p>
             <p> <span style={styles.cStyle}> Vote count :</span> {props.vote_count}</p>
             <p><span style={styles.cStyle}>Overview : </span> <br style ={{padding : 5}}/> {props.overview}</p>
             </Col>
        <Col>
        <Image src = {`https://image.tmdb.org/t/p/original/${props.poster_path}`} 
                style ={{width : 300, height : 400, marginLeft : 200, marginTop : 10}} rounded />
        </Col>
         </Row>
        
    
        </Container>
        
        </div>
       
    )
}

export default ModalContent;