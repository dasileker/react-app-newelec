import React from 'react';
import { Container, Row } from 'reactstrap';
import QuestionTrainning from './questionTrainning/QuestionTrainning';
import styles from './questionTrainning/QuizTrainning.module.css';

const QuizTrainning = () => {
  return (
    <Container className={styles.container2}>
      <Row>
        <p className={styles.p2}>Training quiz</p>
        <p className={styles.p3}>Here you can manage the questions by clicking on the “Add Question” button and choose from the available types of question. You can add up to 100 questions</p>
        <hr className={styles.line} />
        <QuestionTrainning />
      </Row>
    </Container>
  )
}

export default QuizTrainning