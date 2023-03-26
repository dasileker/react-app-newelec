import React from 'react';
import {  Row, Col } from 'reactstrap';
import SelectionFrom from './SelectionForm/SelectionFrom';
import ImageUploader from './ImageUploader/ImageUploader';
import FileUploader from './FileUpload/FileUploader';
import styles from './Criteria.module.css';

const Criteria = () => {
  return (
    <section className={styles.section}>
      {/* <Container className={styles.container}> */}
        <Row className=''>
          <Col className={styles.first_column}>
            < SelectionFrom />
          </Col>
          <Col className={styles.border2}>
            <p>Image</p> 
             < ImageUploader />
          </Col>
          <Col className={styles.border3}>
            <p>Trainning File</p>
            < FileUploader />
          </Col>
        </Row>
      {/* </Container> */}
    </section>

  )
}

export default Criteria