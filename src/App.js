import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import styled from "styled-components";
import { useMemo } from "react";
import { useState } from "react";

const IMAGES = 12;
const Card = styled.div`
  width: 360px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: solid 8px #333;
`;
const CardBack = styled(Card)`
  transform: ${(props) => (props.isOpen ? "rotateY(180deg)" : "rotateY(0)")};
  background-image: linear-gradient(
    rgba(0, 0, 255, 0.5),
    rgba(255, 255, 0, 0.5)
  );
`;
const App = () => {
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
    <div className="app">
      <VStack justifyContent="center" spacing="6" my="6">
        <Heading
          size="xl"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          fontWeight="extrabold"
          bgClip="text"
        >
          なんじゃもんじゃゲーム
        </Heading>
        <VStack spacing="4">
          <Text>カードの名前を他の人より早く呼ぼう！</Text>
          <Text>初めてみるカードには名前をつけよう！</Text>
        </VStack>
      </VStack>
      <Flex justifyContent="center">
        <Box pos="relative" w="360px" onClick={() => onHandleNext()}>
          <CardFront isOpen={isOpen}>{image}</CardFront>
          <CardBack isOpen={isOpen}>
            <Image
              w="60%"
              src={`${process.env.PUBLIC_URL}/img/kids_chuunibyou_girl.png`}
              alt="読み込みエラーです、、、"
            />
          </CardBack>
        </Box>
      </Flex>
    </div>
  );
};
export default App;
