import React from "react";
import styled from "styled-components";

const PictureAndText = styled.div`
  text-align: center;
  letter-spacing: 0.05em;
  width: 100%;
  color: var(--h1-hero);
  margin-top: 200px;

  p {
    width: 100%;
    line-height: 1.5em;
  }

  .textWrapper {
    width: 70%;
    margin: auto;
  }

  @media (max-width: 400px) {
    .picme {
      width: 70%;
      height: 70%;
    }
  }
`;

function PicAndText() {
  return (
    <PictureAndText id="about">
      <img
        className="picme"
        src="/images/me.png"
        alt="PicOfMe"
        height={600}
        width={400}
      />
      <div className="textWrapper">
        <p>
          28 years old, born and raised in a beautiful town in Norway, named
          Stavern. I lived in Oslo since 2014, selling cars, purchasing
          consultant, customerservice, and finally started studying Front-End
          Developing at Noroff in Oslo in year 2020, and Im proud to say that I
          am now fully educated. I love to build stuff. From lego, to computers,
          to minimalistic and easy understanding websites. When I have some free
          time, I like to hang out or play some videogames with my friends,
          going to the gym, have some time with my cool girlfriend, and I also
          love playing guitar/ listening to music!
        </p>
      </div>
    </PictureAndText>
  );
}

export default PicAndText;
