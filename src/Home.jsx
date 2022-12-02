import { Flex, Heading, Image } from "@chakra-ui/react";
import styled from "styled-components";
import { useMemo } from "react";
import { useState } from "react";

const IMAGES = 12;
const Home = () => {
  const Card = styled.div`
    width: 90%;
  `;
  const [imageNumber, setImageNumber] = useState(
    Math.ceil(Math.random() * IMAGES)
  );
  const onHandleNext = () => {
    const random = Math.ceil(Math.random() * IMAGES);
    setImageNumber(random);
    console.log(random);
  };

  const image = useMemo(() => {
    const src = `${process.env.PUBLIC_URL}/img/image${imageNumber}.jpg`;
    return <Image w="full" src={src} alt="読み込みエラーです、、、" />;
  }, [imageNumber]);

  return (
    <div className="App">
      <Heading>カードの名前を他の人より早く呼ぼう！</Heading>
      <Heading>初めてみるカードには名前をつけよう！</Heading>
      <Flex justifyContent="center">
        <Card onClick={() => onHandleNext()}>{image}</Card>
      </Flex>
    </div>
  );
};
export default Home;
