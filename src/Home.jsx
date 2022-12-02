import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import styled from "styled-components";
import { useMemo } from "react";
import { useState } from "react";

const IMAGES = 12;
const Card = styled.div`
  width: 320px;
  height: 320px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 16px;
  overflow: hidden;
  background-color: #fff;
  backface-visibility: hidden;
  transition: all 0.6s ease;
  position: absolute;
  top: 0;
  left: 0;
`;
const CardFront = styled(Card)`
  transform: ${(props) => (props.isOpen ? "rotateY(0)" : "rotateY(-180deg)")};
`;
const CardBack = styled(Card)`
  transform: ${(props) => (props.isOpen ? "rotateY(180deg)" : "rotateY(0)")};
`;
const Home = () => {
  const [imageNumber, setImageNumber] = useState(
    Math.ceil(Math.random() * IMAGES)
  );
  const [isOpen, setIsOpen] = useState(false);

  const onHandleNext = () => {
    if (!isOpen) {
      const random = Math.ceil(Math.random() * IMAGES);
      setImageNumber(random);
    }
    setIsOpen(!isOpen);
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
        <Box
          pos="relative"
          w="320px"
          onClick={() => onHandleNext()}
        >
          <CardFront isOpen={isOpen}>{image}</CardFront>
          <CardBack isOpen={isOpen}>
            <Flex justifyContent="center" alignItems="center">
              <Image
                w="60%"
                src={`${process.env.PUBLIC_URL}/img/kids_chuunibyou_girl.png`}
                alt="読み込みエラーです、、、"
              />
            </Flex>
          </CardBack>
        </Box>
      </Flex>
    </div>
  );
};
export default Home;
