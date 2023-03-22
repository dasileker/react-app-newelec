import React, { useState } from 'react';
import { Container, Row, Col, Button, Input } from 'reactstrap';
import { AiOutlineClose } from 'react-icons/ai';
import ImageUploader from '../../Criteria/ImageUploader/ImageUploader';
import ImagLoader from '../ImageLoader/ImageLoader';
import styles from './QuizTrainning.module.css';

const QuestionTrainning = () => {
  // eslint-disable-next-line
  const [question1Image, setQuestion1Image] = useState(null);
  // eslint-disable-next-line
  const [question2Image, setQuestion2Image] = useState(null);
  // eslint-disable-next-line
  const handleQuestion1ImageUpload = (file) => {
    setQuestion1Image(file);
  };
  // eslint-disable-next-line
  const handleQuestion2ImageUpload = (file) => {
    setQuestion2Image(file);
  };

  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: '',
      trueImage: '',
      falseImage: '',
      trueChecked: false,
      falseChecked: false,
    }
  ]);

  const addQuestion = () => {
    setQuestions(prevQuestions => [
      ...prevQuestions,
      {
        id: prevQuestions.length + 1,
        text: '',
        trueImage: '',
        falseImage: '',
        trueChecked: false,
        falseChecked: false,
      }
    ]);
  };

  const removeQuestion = (id) => {
    setQuestions(prevQuestions => prevQuestions.filter(question => question.id !== id))
  };


  const handleTrueChange = (event, questionId) => {
    const checked = event.target.checked;
    setQuestions(prevQuestions => {
      const newQuestions = [...prevQuestions];
      const questionIndex = newQuestions.findIndex(question => question.id === questionId);
      newQuestions[questionIndex].trueChecked = checked;
      return newQuestions;
    });
  };

  const handleFalseChange = (event, questionId) => {
    const checked = event.target.checked;
    setQuestions(prevQuestions => {
      const newQuestions = [...prevQuestions];
      const questionIndex = newQuestions.findIndex(question => question.id === questionId);
      newQuestions[questionIndex].falseChecked = checked;
      return newQuestions;
    });
  };

  return (
    <Container className={styles.container1}>
      <div className={styles.div}>
        {questions.map((question) => (
          <Row key={question.id} className={styles.questionWrapper}>
            <Col xs="12" md="6">
              <Row>
                <Col xs="10">
                  <p className={styles.p}>Question {question.id}</p>
                </Col>
                <Col xs="2" className="text-right">
                  <Button color="link" className="p-0" onClick={() => removeQuestion(question.id)}>
                    <AiOutlineClose />
                  </Button>
                </Col>
              </Row>
              <Row className={styles.questionContainer}>
                <Col xs="8">
                  <text className={styles.text}></text>
                </Col>
              </Row>
              <Row className={styles.questionContainer}>
                <Col xs="8">
                  <label htmlFor={`true${question.id}`} className={styles.label}>True</label>
                </Col>
                <Col xs="2">
                  <div className="checkbox-wrapper">
                    <Input type="checkbox" id={`true${question.id}`} className={styles.customCheckbox} checked={question.trueChecked} onChange={(e) => handleTrueChange(e, question.id)} />
                    <span className={`${styles.customCheckbox} ${question.trueChecked ? styles.greenCheckbox : ''}`}></span>
                  </div>
                </Col>
                <Col xs="2">
                  <div className="image-wrapper">
                    <ImagLoader />
                  </div>
                </Col>
              </Row>
              <Row className={styles.questionContainer}>
                <Col xs="8">
                  <label htmlFor={`false${question.id}`} className={styles.label}>False</label>
                </Col>
                <Col xs="2">
                  <div className="checkbox-wrapper">
                    <Input type="checkbox" id={`false${question.id}`} className={styles.customCheckbox} checked={question.falseChecked} onChange={(e) => handleFalseChange(e, question.id)} />
                    <span className={`${styles.customCheckbox} ${question.falseChecked ? styles.greenCheckbox : ''}`}></span>
                  </div>
                </Col>
                <Col xs="2">
                  <div className="image-wrapper">
                    <ImagLoader />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs="12" md="6">
              <h6 className={styles.h6}>Question Image</h6>
              <ImageUploader onFileUpload={handleQuestion1ImageUpload} question={question.id} />
            </Col>
          </Row>

        ))}
        <button onClick={addQuestion} className={styles.button}>
          Add Question
          <span style={{ marginLeft: '5px' }}>+</span>
        </button>
      </div>

    </Container>

  );
};

export default QuestionTrainning;
