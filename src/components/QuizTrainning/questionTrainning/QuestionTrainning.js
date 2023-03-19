import { useState } from 'react';
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

  return (
    <div>
      <Row>
        <Col xs="12" md="6">
          <Row>
            <Col xs="10">
              <p>Question 1</p>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <input type="checkbox" id="true1" />
              <label htmlFor="true1">True</label>
            </Col>
            <Col xs="2">
              <ImagLoader />
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <input type="checkbox" id="false1" />
              <label htmlFor="false1">False</label>
            </Col>
            <Col xs="2">
              <ImagLoader />
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="6">
          <ImageUploader onFileUpload={handleQuestion1ImageUpload} question="1" />
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="6">
          <Row>
            <Col xs="10">
              <p>Question 2</p>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <input type="checkbox" id="true2" />
              <label htmlFor="true2">True</label>
            </Col>
            <Col xs="2">
              <ImagLoader />
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <input type="checkbox" id="false2" />
              <label htmlFor="false2">False</label>
            </Col>
            <Col xs="2">
              <ImagLoader />
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="6">
          <ImageUploader onFileUpload={handleQuestion2ImageUpload} question="2" />
        </Col>
      </Row>
    </div>
  );
};

export default QuestionTrainning;