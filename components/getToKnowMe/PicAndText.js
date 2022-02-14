import React from "react";
import styled from "styled-components";
import Image from "next/Image";

const PictureAndText = styled.div`
   {
    text-align: center;
    letter-spacing: 0.05em;
    width: 100%;
    color: var(--h1-hero);
    margin-top: 200px;
  }

  p {
    padding: 70px;
    width: 100%;
    line-height: 1.5em;
  }

  .textWrapper {
    width: 70%;
    margin: auto;
  }
`;

function PicAndText() {
  return (
    <PictureAndText>
      <Image
        src="/images/me.png"
        alt="PicOfMe"
        height={600}
        width={400}
      ></Image>
      <div className="textWrapper">
        <p>
          28 years old, born and raised in a beautiful town in Norway, named
          Stavern. I've lived in Oslo since 2014, selling cars, purchasing
          consultant, customerservice, and finally started studying Front-End
          Developing at Noroff in Oslo in year 2020, and Im proud to say that Im
          freshly educated in 2022. I love to build, and find this course very
          interesting. When I have some free time, I like to hang out or play
          some videogames with my friends, going to the gym, have some time with
          my cool girlfriend, and I also love playing guitar/ listening to
          music!
        </p>
      </div>
    </PictureAndText>
  );
}

export default PicAndText;
