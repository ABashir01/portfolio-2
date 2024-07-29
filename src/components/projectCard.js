import { 
    Center, 
    Flex, 
    Image, 
    Link, 
    Heading,
    Text,
    Divider,
    AspectRatio,
} from "@chakra-ui/react";
import React from "react";

function ProjectCard({projectTitle, projectURL, technologiesUsed, projectDescription, projectImage}) {
    return (
        <Flex
        w={["90vw", 0, 0, "60vw"]}
        h={["30vh", null, null, "30vh"]}
        boxShadow="2xl"
        borderRadius="xl"
        bgColor={"white"}
        marginBottom={"1%"}
        >
            <Center w={"30%"} h={"100%"}> {/* Image box */}
                <AspectRatio w={["90%", 0, 0, "65%"]} ratio={16 / 10}>
                    <Image   objectFit={"fill"} src={projectImage} alt={`Image of ${projectTitle}`} borderRadius={"5%"} boxShadow={"xl"}/>
                </AspectRatio>
                    
            </Center> 

            <Divider orientation="vertical" w={"3%"}/>
        
            <Flex flexDir={"column"} padding={["3%", null, null, "2%"]} w={"67%"} objectFit={"contain"}> {/* Text box */}
                <Link href={projectURL} isExternal>
                    <Heading as='h3' size={['sm', null, null, 'md']}>
                        {projectTitle}→
                    </Heading>
                </Link>
                <Text fontSize={["xs", null, null, "sm"]} marginBottom={["6%", null, null, "3%"]} fontWeight={300}>
                    {technologiesUsed}
                </Text>
                <Text noOfLines={[7, null, null, 4]} fontWeight={300} fontSize={["sm", null, null, "md"]}>
                    {projectDescription}
                </Text>
                
            </Flex>
    </Flex>
    )};

export default ProjectCard;