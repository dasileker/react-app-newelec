import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import ImageUploader from '../../Criteria/ImageUploader/ImageUploader';
import ImagLoader from '../ImageLoader/ImageLoader';

const QuestionTrainning = () => {
  const [question1Image, setQuestion1Image] = useState(null);
  const [question2Image, setQuestion2Image] = useState(null);

  const handleQuestion1ImageUpload = (file) => {
    setQuestion1Image(file);
  };

  const handleQuestion2ImageUpload = (file) => {
    setQuestion2Image(file);
  };

  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: '',
      trueImage: '',
      falseImage: ''
    }
  ]);

  const addQuestion = () => {
    setQuestions(prevQuestions => [
      ...prevQuestions,
      {
        id: prevQuestions.length + 1,
        text: '',
        trueImage: '',
        falseImage: ''
      }
    ]);
  };

  return (
    <div>
      {questions.map((question) => (
        <Row key={question.id}>
          <Col xs="12" md="6">
            <Row>
              <Col xs="10">
                <p>Question {question.id}</p>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <input type="checkbox" id={`true${question.id}`} />
                <label htmlFor={`true${question.id}`}>True</label>
              </Col>
              <Col xs="2">
                <ImagLoader />
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <input type="checkbox" id={`false${question.id}`} />
                <label htmlFor={`false${question.id}`}>False</label>
              </Col>
              <Col xs="2">
                <ImagLoader />
              </Col>
            </Row>
          </Col>
          <Col xs="12" md="6">
            <ImageUploader onFileUpload={handleQuestion1ImageUpload} question={question.id} />
          </Col>
        </Row>
      ))}
      <button onClick={addQuestion} style={{ background: 'lightblue', color: 'white', width: '100%', padding: '10px', border: 'none', borderRadius: '5px', marginTop: '20px' }}>
        Add Question
        <span style={{ marginLeft: '5px' }}>+</span>
      </button>
    </div>
  );
};

export default QuestionTrainning;
