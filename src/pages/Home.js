import React from 'react';
import Header from "../components/Header";
import Criteria from '../components/Criteria/Criteria';
import QuizTrainning from '../components/QuizTrainning/QuizTrainning';
import QuizSetting from '../components/QuizSetting/QuizSetting';

const Home = () => {
  return (
    <div>
      <Header />
      <Criteria />
      <QuizTrainning />
      < QuizSetting />
    </div>
  )
}

export default Home