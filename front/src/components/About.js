import React from 'react';
import Image from './Image';
import Intro from './Intro';

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <Intro text="회사 소개글을 입력하세요." />
      </div>
      <div className="right">
        <Image src="이미지 파일 경로를 입력하세요." />
      </div>
    </div>
  );
};

export default About;