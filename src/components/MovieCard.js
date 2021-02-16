import React from "react";
import Title from "./Title";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import GeneralButton from "./GeneralButton";
import styles from '../styles';


const MovieCard = (props) => {
    return(
        <div>
         <Jumbotron style = {{ margin : 10,padding : 20, borderWidth : 'thin' , backgroundColor : '#fff', borderStyle :"solid", borderColor: "#34495e"}}>    
         <Container>
             <Row style = {styles.marpad0}>
                <Col style = {styles.columnStyle} >
                <Image src = {`https://image.tmdb.org/t/p/original/${props.poster_path}`} 
                style ={{width : 300, height : 300}} rounded />
                <Col></Col>
                <Container >
                <Title title = {props.title} style = {{textAlign : "left"}}/>
                
                <p style={styles.pStyle}>
                         {props.overview}
                </p>
                <Row>
                    <Col></Col>      
                    <GeneralButton 
                    overview = {props.overview}
                    vote_count = {props.vote_count}
                    vote_average = {props.vote_average}
                    release_date = {props.release_date}
                    popularity = {props.popularity}
                     poster_path = {props.poster_path} 
                     title = {props.title}/>
                </Row>
                  </Container>
                </Col>    
            </Row>
        </Container>  
        </Jumbotron>
     
        
        </div>
    )
}

export default MovieCard;