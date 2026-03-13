import {
  Center,
  Flex,
  Image,
  Link,
  Heading,
  Text,
  AspectRatio,
} from '@chakra-ui/react';
import React from 'react';

function ExperienceCard({ expTitle, expLocation, expLocationUrl, expStartDate, expEndDate, expDescription, expImageFile }) {
  return (
    <Flex className="punk-card" w={["92vw", null, null, "52vw"]} minH={["34vh", null, null, "28vh"]} direction={["column", null, null, "row"]}>
      <Center w={["100%", null, null, "28%"]} p={[4, null, null, 5]}>
        <AspectRatio w="100%" maxW={["120px", null, null, "150px"]} ratio={1 / 1}>
          <Image
            objectFit="contain"
            src={expImageFile}
            alt={`Image of ${expLocation} logo`}
            border="2px solid"
            borderColor="white"
            p={2}
            bg="white"
            filter="grayscale(100%) contrast(110%)"
          />
        </AspectRatio>
      </Center>

      <Flex direction="column" p={[4, null, null, 6]} w={["100%", null, null, "72%"]} borderLeft={["none", null, null, "2px solid white"]} borderTop={["2px solid white", null, null, "none"]}>
        <Link href={expLocationUrl} isExternal _hover={{ textDecoration: 'none' }}>
          <Heading as="h3" fontSize={["lg", null, null, "2xl"]} fontFamily="'Bebas Neue', sans-serif" letterSpacing="0.05em" lineHeight={1}>
            {expTitle} / {expLocation}
          </Heading>
        </Link>
        <Text mt={2} mb={[4, null, null, 5]} fontSize={["xs", null, null, "sm"]} textTransform="uppercase" letterSpacing="0.12em" color="gray.300" fontFamily="'IBM Plex Mono', monospace">
          {expStartDate} - {expEndDate}
        </Text>
        <Text fontWeight={400} fontSize={["sm", null, null, "md"]} lineHeight={1.7} color="gray.100">
          {expDescription}
        </Text>
      </Flex>
    </Flex>
  );
}

export default ExperienceCard;