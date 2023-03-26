import React, { useState } from 'react';
import { Container, Input, Row, Col, FormGroup, Label } from 'reactstrap';
import styles from './Selection.module.css'

const SelectionFrom = () => {
  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('');
  const [select3, setSelect3] = useState('');
  const [select4, setSelect4] = useState('');
  const [select5, setSelect5] = useState('');
  const [select6, setSelect6] = useState('');
  const [select7, setSelect7] = useState('');
  const [description, setDescription] = useState('');


  const addNewOption = () => {
    // Add your logic for adding a new option
  };

  return (
    <div className={styles.selectForm}>
      <Row>
        <Col>
          <FormGroup>
            <Container fluid>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Label className={styles.drop}>Category</Label>
                </Col>
                {select1 === '' && (
                  <Col xs="auto" className="ml-auto"> {/* Add 'ml-auto' class to push the column to the right */}
                    <span
                      onClick={addNewOption}
                      style={{ marginRight: '5px', color: 'blue', fontSize: '12px' }} // Set the custom color here
                    >
                      Add New +
                    </span>
                  </Col>
                )}
                <Col>
                  <Input type="select" value={select1} onChange={(e) => setSelect1(e.target.value)}>
                    <option value="Option 1" className={styles.sub}>Safety</option>
                    <option value="Option 2" className={styles.sub}>Option 2</option>
                    <option value="Option 3" className={styles.sub}>Option 3</option>
                  </Input>
                </Col>
              </Row>
            </Container>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Container fluid>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Label className={styles.drop}>Topic</Label>
                </Col>
                {select1 === '' && (
                  <Col xs="auto" className="ml-auto"> {/* Add 'ml-auto' class to push the column to the right */}
                    <span
                      onClick={addNewOption}
                      style={{ marginRight: '10px', color: 'blue', fontSize: '12px' }} // Set the custom color here
                    >
                      Add New +
                    </span>
                  </Col>
                )}
                <Col>
                  <Input type="select" value={select2} onChange={(e) => setSelect2(e.target.value)}>
                    {/* <option value="" className={styles.sub}>Select Topic</option> */}
                    <option value="Option 1" className={styles.sub}>VCA</option>
                    <option value="Option 2" className={styles.sub}>Option 2</option>
                    <option value="Option 3" className={styles.sub}>Option 3</option>
                  </Input>
                </Col>
              </Row>
            </Container>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className={styles.valid} >
            <Label className={styles.drop}>Valid For</Label>
            <Input type="select" value={select3} onChange={(e) => setSelect3(e.target.value)}>
              <option value="Option 1" className={styles.sub}>1 Year</option>
              <option value="Option 2" className={styles.sub}>2 Years</option>
              <option value="Option 3" className={styles.sub}>3 Years</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup className={styles.valid2} >
            <Label className={styles.drop}>Trainig</Label>
            <Input type="select" value={select4} onChange={(e) => setSelect4(e.target.value)}>
              {/* <option value="">Select 4</option> */}
              <option value="Option 1" className={styles.sub}>Working at height</option>
              <option value="Option 2" className={styles.sub}>Option 2</option>
              <option value="Option 3" className={styles.sub}>Option 3</option>
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup className={styles.valid3} >
            <Label className={styles.drop}>Assign To</Label>
            <Input type="select" value={select5} onChange={(e) => setSelect5(e.target.value)}>
              {/* <option value="">Select 5</option> */}
              <option value="Option 1" className={styles.sub}>Internal workers</option>
              <option value="Option 2" className={styles.sub}>Option 2</option>
              <option value="Option 3" className={styles.sub}>Option 3</option>
            </Input>
          </FormGroup>
        </Col>
      </Row> 
      <Row>
        <Col sm={6}>
          <FormGroup className={styles.valid4}>
            <Label className={styles.drop}>Departements</Label>
            <Input type="select" value={select6} onChange={(e) => setSelect6(e.target.value)}>
              {/* <option value="">Select Departements </option> */}
              <option value="Select Departements" className={styles.sub_sub}>Select Departements</option>
              <option value="Option 2" className={styles.sub_sub}>Option 2</option>
              <option value="Option 3" className={styles.sub_sub}>Option 3</option>
            </Input>
          </FormGroup>
          <FormGroup className={styles.valid5}>
            <Label className={styles.drop}>Functions</Label>
            <Input type="select" value={select7} onChange={(e) => setSelect7(e.target.value)}>
              {/* <option value="">Select Functions</option> */}
              <option value="Option 1" className={styles.sub_sub}>Select Functions</option>
              <option value="Option 2" className={styles.sub_sub}>Option 2</option>
              <option value="Option 3" className={styles.sub_sub}>Option 3</option>
            </Input>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <Label className={styles.drop}>Description</Label>
            <Input type="textarea" rows="2" value={description} onChange={(e) => setDescription(e.target.value)} style={{ height: '120px' }} />
          </FormGroup>
        </Col>
      </Row>

    </div>
  );
}

export default SelectionFrom;