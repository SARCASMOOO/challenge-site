import React from "react";
import MovieModel from "../../../../models/Movie";
import styles from './Results.module.css';
import {Container} from "@material-ui/core";

interface Props {
    movies: MovieModel[];
}

const tempHeight = '150px';
const tempWidth = '30%';

const Results = ({movies}: Props) => (
    <Container className={styles.Results}>
        <div style={{width: tempWidth, height: tempHeight, backgroundColor: 'cyan', marginBottom: '10px'}}>test</div>
        <div style={{width: tempWidth, height: tempHeight, backgroundColor: 'cyan', marginBottom: '10px'}}>test</div>
        <div style={{width: tempWidth, height: tempHeight, backgroundColor: 'cyan', marginBottom: '10px'}}>test</div>
        <div style={{width: tempWidth, height: tempHeight, backgroundColor: 'cyan', marginBottom: '10px'}}>test</div>
        <div style={{width: tempWidth, height: tempHeight, backgroundColor: 'cyan', marginBottom: '10px'}}>test</div>
        <div style={{width: tempWidth, height: tempHeight, backgroundColor: 'cyan', marginBottom: '10px'}}>test</div>
        <div style={{width: tempWidth, height: tempHeight, backgroundColor: 'cyan', marginBottom: '10px'}}>test</div>
        <div style={{width: tempWidth, height: tempHeight, backgroundColor: 'cyan', marginBottom: '10px'}}>test</div>
        <div style={{width: tempWidth, height: tempHeight, backgroundColor: 'cyan', marginBottom: '10px'}}>test</div>
        <div style={{width: tempWidth, height: tempHeight, backgroundColor: 'cyan', marginBottom: '10px'}}>test</div>
    </Container>
);

export default Results;
