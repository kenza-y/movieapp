import React from "react";
import styles from '../styles';

const Title = (props) => {
    return(
        <h1 style={styles.titleStyle}>
            {props.title}
        </h1>
    );
}

export default Title;