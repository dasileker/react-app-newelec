import React from 'react';
// import Dropzone from 'react-dropzone';
import { Container, Row, Col } from 'reactstrap';
import SelectionFrom from './SelectionForm/SelectionFrom';
import ImageUploader from './ImageUploader/ImageUploader';
import FileUploader from './FileUpload/FileUploader';


const Criteria = () => {
  return (
    <section>
        <Container>
            <Row className=''>
          <Col xs="6" className='border rounded mt-4 pr-3'>
            < SelectionFrom />
          </Col>
          <Col xs="3" className='border rounded mt-4 pr-3 pl-3'>
            <p>Image</p>
            < ImageUploader />
          </Col>
          <Col xs="3" className='border rounded mt-4 pl-3'>
            <p>Trainning File</p>
            < FileUploader />
          </Col>
            </Row>
      </Container>
    </section>

  )
}

export default Criteria