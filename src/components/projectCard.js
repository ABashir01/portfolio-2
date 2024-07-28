import { 
    Center, 
    Flex, 
    Image, 
    Link, 
    Heading,
    Text,
    Divider,
    Box,
    AspectRatio,
} from "@chakra-ui/react";
import React from "react";

function ProjectCard({projectTitle, projectURL, technologiesUsed, projectDescription, projectImage}) {
    return (
        <Flex
        w={"60vw"}
        h={"30vh"}
        boxShadow="2xl"
        borderRadius="xl"
        bgColor={"white"}
        marginBottom={"1%"}
        >
            <Center w={"30%"} h={"100%"}> {/* Image box */}
                <AspectRatio w={"65%"} ratio={16 / 10}>
                    <Image   objectFit={"fill"} src={projectImage} alt={`Image of ${projectTitle}`} borderRadius={"5%"} boxShadow={"xl"}/>
                </AspectRatio>
                    
            </Center> 

            <Divider orientation="vertical" w={"3%"}/>
        
            <Flex flexDir={"column"} padding={"2%"} w={"67%"} objectFit={"contain"}> {/* Text box */}
                <Link href={projectURL} isExternal>
                    <Heading as='h3' size={'md'}>
                        {projectTitle}→
                    </Heading>
                </Link>
                <Text fontSize={"sm"} marginBottom={"3%"} fontWeight={300}>
                    {technologiesUsed}
                </Text>
                <Text noOfLines={4} fontWeight={300}>
                    {projectDescription}
                </Text>
                
            </Flex>
    </Flex>
    )};

export default ProjectCard;