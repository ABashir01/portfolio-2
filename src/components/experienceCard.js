import { 
    Center, 
    Flex, 
    Image, 
    Link, 
    Heading,
    Text,
    Divider,
    Box,
    AspectRatio
} from "@chakra-ui/react";
import React from "react";


function ExperienceCard({expTitle, expLocation, expLocationUrl, expStartDate, expEndDate, expDescription, expImageFile}) {
    return (
        <Flex
        w={"60vw"}
        h={"25vh"}
        boxShadow="2xl"
        borderRadius="xl"
        bgColor={"white"}
        marginBottom={"1%"}
        >
            <Center w={"30%"} h={"100%"}> {/* Image box */}
                    <AspectRatio w={"40%"} ratio={1 / 1}>
                        <Image objectFit={"fill"} src={expImageFile} alt={`Image of ${expLocation} logo`}/>
                    </AspectRatio>
                    
            </Center> 

            <Divider orientation="vertical" w={"3%"}/>
        
            <Flex flexDir={"column"} padding={"2%"} w={"67%"}> {/* Text box */}
                <Link href={expLocationUrl} isExternal>
                    <Heading as='h3' size={'md'}>
                        {expTitle} • {expLocation}→
                    </Heading>
                </Link>
                <Text fontSize={"sm"} marginBottom={"3%"} fontWeight={300}>
                    {expStartDate} - {expEndDate}
                </Text>
                <Text noOfLines={3} fontWeight={300}>
                    {expDescription}
                </Text>
                
            </Flex>
    </Flex>
    )};

export default ExperienceCard;