import React from 'react';

function Banner() {
  return (
    <section className="banner">

<img width="100px" src={`${process.env.PUBLIC_URL}/mache_logo.png`} />
      {/* 웹사이트 제목 */}
      <h1>Mache</h1>
      {/* 소개 문구 */}
      <p>Mache - One Team , One Dream</p>
      {/* 더 알아보기 버튼 */}
      <button>Learn More</button>
    </section>
  );
}

export default Banner;