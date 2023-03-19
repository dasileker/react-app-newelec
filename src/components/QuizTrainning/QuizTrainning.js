import React from 'react';
import { Container, Row } from 'reactstrap';
import QuestionTrainning from './questionTrainning/QuestionTrainning';
import style from './QuizTraining.module.css';

const QuizTrainning = () => {
  return (
    <Container className={style.container}>
      <Row>
        <QuestionTrainning />
      </Row>
    </Container>
  )
}

export default QuizTrainning