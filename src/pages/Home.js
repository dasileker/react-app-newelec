import React from 'react';
import Header from "../components/Header";
import Criteria from '../components/Criteria/Criteria';
import QuizTrainning from '../components/QuizTrainning/QuizTrainning';

const Home = () => {
  return (
    <div>
      <Header />
      <Criteria />
      <QuizTrainning/>
    </div>
  )
}

export default Home