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
        w={["90vw", null, null, "60vw"]}
        h={["30vh", null, null, "25vh"]}
        boxShadow="2xl"
        borderRadius="xl"
        bgColor={"white"}
        marginBottom={"1%"}
        >
            <Center w={"30%"} h={"100%"}> {/* Image box */}
                    <AspectRatio w={["80%", null, null, "40%"]} ratio={1 / 1}>
                        <Image objectFit={"fill"} src={expImageFile} alt={`Image of ${expLocation} logo`}/>
                    </AspectRatio>
                    
            </Center> 

            <Divider orientation="vertical" w={"3%"}/>
        
            <Flex flexDir={"column"} padding={"2%"} w={"67%"}> {/* Text box */}
                <Link href={expLocationUrl} isExternal>
                    <Heading as='h3' size={['sm', null, null, 'md']}>
                        {expTitle} • {expLocation}→
                    </Heading>
                </Link>
                <Text fontSize={["xs", null, null, "sm"]} marginBottom={["6%", null, null, "3%"]} fontWeight={300}>
                    {expStartDate} - {expEndDate}
                </Text>
                <Text noOfLines={[7, null, null, 3]} fontWeight={300} fontSize={["sm", null, null, "md"]}>
                    {expDescription}
                </Text>
                
            </Flex>
    </Flex>
    )};

export default ExperienceCard;