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

function ProjectCard({ projectTitle, projectURL, technologiesUsed, projectDescription, projectImage }) {
  return (
    <Flex className="punk-card" w={["92vw", null, null, "52vw"]} minH={["34vh", null, null, "31vh"]} direction={["column", null, null, "row"]}>
      <Center w={["100%", null, null, "34%"]} p={[4, null, null, 5]}>
        <AspectRatio w="100%" maxW={["100%", null, null, "240px"]} ratio={16 / 10}>
          <Image
            objectFit="cover"
            src={projectImage}
            alt={`Image of ${projectTitle}`}
            border="2px solid"
            borderColor="white"
            filter="grayscale(100%) contrast(120%)"
          />
        </AspectRatio>
      </Center>

      <Flex direction="column" p={[4, null, null, 6]} w={["100%", null, null, "66%"]} borderLeft={["none", null, null, "2px solid white"]} borderTop={["2px solid white", null, null, "none"]}>
        <Link href={projectURL} isExternal _hover={{ textDecoration: 'none' }}>
          <Heading as="h3" fontSize={["lg", null, null, "2xl"]} fontFamily="'Bebas Neue', sans-serif" letterSpacing="0.05em" lineHeight={1}>
            {projectTitle} /
          </Heading>
        </Link>
        <Text mt={2} mb={[4, null, null, 5]} fontSize={["xs", null, null, "sm"]} textTransform="uppercase" letterSpacing="0.12em" color="gray.300" fontFamily="'IBM Plex Mono', monospace">
          {technologiesUsed}
        </Text>
        <Text fontWeight={400} fontSize={["sm", null, null, "md"]} lineHeight={1.7} color="gray.100">
          {projectDescription}
        </Text>
      </Flex>
    </Flex>
  );
}

export default ProjectCard;