import { 
  Box, 
  Flex,
  Heading,
  Text,
  Divider,
  Wrap,
  WrapItem,
  Link,
  Center,
  HStack,
} from '@chakra-ui/react';
import { color } from 'framer-motion';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import ExperienceCard from './components/experienceCard';
import ProjectCard from './components/projectCard';


function App() {

  const experienceList = [
    {
      "expTitle": "Data Science Intern", 
      "expLocation": "UC Berkeley", 
      "expLocationUrl": "https://scriptencodinginitiative.github.io/", 
      "expStartDate": "Jun 2024", 
      "expEndDate": "Present", 
      "expDescription": "Working with the Script Encoding Initiative to perform data analysis on previously added scripts, currently preparing a presentation for Unicode Technology Workshop. Using Python.", 
      "expImageFile": "experience-images/UCB-Logo-transformed.jpeg"
    },
    {
      "expTitle": "Full Stack Engineer", 
      "expLocation": "University of Rhode Island", 
      "expLocationUrl": "https://web.uri.edu/bytelab/", 
      "expStartDate": "May 2024", 
      "expEndDate": "Present", 
      "expDescription": "Creating an online web app implementation of the smart cart study for use with one of the largest online shopping platforms. Using Next.js, Express.js, Python, and MySQL.", 
      "expImageFile": "experience-images/URI-Logo-transformed.jpeg"
    },
    {
      "expTitle": "Research Assistant", 
      "expLocation": "Brown University", 
      "expLocationUrl": "https://aarushirita.github.io/papers/", 
      "expStartDate": "Feb 2024", 
      "expEndDate": "Present", 
      "expDescription": "Studying sentiment analysis data regarding different social media algorithm treatments in India. Using Python (Pandas), Google Cloud, and BigQuery.", 
      "expImageFile": "experience-images/brown-logo-transformed.jpeg"
    },
    {
      "expTitle": "Data Analyst Intern", 
      "expLocation": "University of Alabama at Birmingham", 
      "expLocationUrl": "https://www.uab.edu/soph/home/biostatistics", 
      "expStartDate": "Aug 2023", 
      "expEndDate": "Jan 2024", 
      "expDescription": "Worked with Professor Gary Cutter in order to clean up + analyze large datasets for biostatistical research. Used Python and SAS.", 
      "expImageFile": "experience-images/UAB-Logo-transformed.jpeg"
    },
    {
      "expTitle": "Cyber Security Intern", 
      "expLocation": "University of Alabama at Birmingham", 
      "expLocationUrl": "https://www.uab.edu/it/home/security", 
      "expStartDate": "Jun 2023", 
      "expEndDate": "Aug 2023", 
      "expDescription": "Worked with Professor Gary Cutter in order to clean up + analyze large datasets for biostatistical research. Used Python and SAS.", 
      "expImageFile": "experience-images/UAB-Logo-transformed.jpeg"
    },
    {
      "expTitle": "Web Developer", 
      "expLocation": "Birmingham Islamic Society", 
      "expLocationUrl": "https://www.uab.edu/it/home/security", 
      "expStartDate": "Jun 2023", 
      "expEndDate": "Aug 2023", 
      "expDescription": "Worked on internal website - creating a system for managing bank transactions and resolving application form issues. Used Salesforce Apex and Javascript.", 
      "expImageFile": "experience-images/bis-logo-transformed.png"
    },
    {
      "expTitle": "Research Assistant", 
      "expLocation": "Watson Institute - CHRHS", 
      "expLocationUrl": "https://watson.brown.edu/chrhs/research/civil-military-policy-coordination-COVID", 
      "expStartDate": "Dec 2021", 
      "expEndDate": "May 2023", 
      "expDescription": "Worked on public health research paper regarding civil-military coordination during COVID-19 for entire duration of project. Used NVivo.", 
      "expImageFile": "experience-images/brown-logo-transformed.jpeg"
    },
    {
      "expTitle": "Intern", 
      "expLocation": "Nonviolence International", 
      "expLocationUrl": "https://www.nonviolenceinternational.net/", 
      "expStartDate": "Jun 2022", 
      "expEndDate": "Dec 2022", 
      "expDescription": "Worked on Nonviolent Tactics Database and on solving website issues + updating parts of website. Used MySQL and HTML/CSS.", 
      "expImageFile": "experience-images/NVI-Logo-transformed.jpeg"
    },
  ]

  const projectList = [
    {
      "projectTitle": "AcademicDict (in progress)",
      "projectURL": "https://github.com/ABashir01/academic-dict",
      "technologiesUsed": "Next.js, Node.js, Express.js, PostgreSQL, Chakra UI",
      "projectDescription": "A single central location for academic terms + jargon sorted by academic field. Motivated by reading papers in unfamiliar fields where it would have been useful to have a central repository of terms.",
      "projectImage": "project-images/academicdict-img.png",
    },
    {
      "projectTitle": "Two Houses and a Plague",
      "projectURL": "https://github.com/ABashir01/2-houses-and-a-plague",
      "technologiesUsed": "MERN Stack (MongoDB, Express.js, React, Node.js), Bootstrap",
      "projectDescription": `Online implementation of Two Rooms and a Boom where you can use your phone instead of a card. I made this to play with my friends.`,
      "projectImage": "project-images/twohouses-img.png",
    },
    {
      "projectTitle": "Artist Similarity Calculator",
      "projectURL": "https://github.com/ABashir01/artist-similarity-calculator",
      "technologiesUsed": "React, Spotify API",
      "projectDescription": "Simple web app that calculates a similarity percentage between 2 artists based on genres + similar artists. I made this to help with matching members of my club, Music Connect.",
      "projectImage": "project-images/artistsimilaritycalc-img.png",
    },
    {
      "projectTitle": "Dota 2 Abilityle",
      "projectURL": "https://github.com/ABashir01/dota-abilityle",
      "technologiesUsed": "React, Python (Django), PostgreSQL",
      "projectDescription": "Wordle inspired game based around trying to guess the name of a hero's ability in Dota 2. I made this for my friends who I play Dota 2 with.",
      "projectImage": "project-images/dota2ability-img.png",
    },
    {
      "projectTitle": "Simpl News",
      "projectURL": "https://github.com/ABashir01/simpl-news",
      "technologiesUsed": "Python (Flask)",
      "projectDescription": `A stripped down text and HTML only website with a design based on Brutalist Web Design principles. I made this this to increase news accessibility in areas with slow internet (not currently published due to legality).`,
      "projectImage": "project-images/simplnews-img.png",
    },
  ]


  return (
    <Flex w={"100vw"} flexDirection={"column"} alignItems={"center"} bgColor={"gray.100"} overflowX={"hidden"}>

      <Flex w={"100%"} h={"10vh"} bgColor={"white"} justifyContent={"center"} as={'header'} position={"sticky"} top={0} zIndex={1000} borderBottom={"1px solid"} borderColor={"black"}>
        <Center w={"60%"} h={"10vh"} justifyContent={"space-between"}>
            <Box>
              <Text fontSize={"2xl"} fontWeight={700}>Ahad Bashir</Text>
            </Box>
            <HStack spacing={5}>
              <AnchorLink href='#about'><Link fontSize={"xl"} fontWeight={300}>About</Link></AnchorLink>
              <AnchorLink href='#experience'><Link fontSize={"xl"} fontWeight={300}>Experience</Link></AnchorLink>
              <AnchorLink href='#projects'><Link fontSize={"xl"} fontWeight={300}>Projects</Link></AnchorLink>
              <AnchorLink href='#contact'><Link fontSize={"xl"} fontWeight={300}>Contact</Link></AnchorLink>
            </HStack>
        </Center>
      </Flex>
      
      <Flex w={"100vw"} h={"40vh"} justifyContent={"center"} bgGradient={'linear(to-br, gray.500, gray.700)'} borderBottom={"1px solid"} borderColor={"black"} id='about'>
        <Flex w={"60%"} flexDirection={"column"} color={"white"} justifyContent={"center"} fontSize={"lg"}> {/* Intro section */}
          <Heading as='h1' size={'xl'} marginBottom={"2%"}>
            Hey, I'm Ahad Bashir
          </Heading>
          <Text w={"100%"} noOfLines={5} fontWeight={300} >
            I'm a Masters in Computer Science student at Brown. I love writing music (I'm really into Japanese Rock bands like <Link fontWeight={700} href='https://open.spotify.com/track/0WaaPFt4Qy8sVfxKz43bCD?si=e0f318236cc34a33' isExternal>Asian Kung-Fu Generation→</Link> and <Link fontWeight={700} href='https://open.spotify.com/track/3iZmntAKfKaL1WLNEOFqb8?si=3b229b81c9214ff9' isExternal>Ling Tosite Sigure→</Link>), playing board games (my favorite right now is <Link fontWeight={700} href='https://boardgamegeek.com/boardgame/291572/oath' isExternal>Oath→</Link>), and learning. I'm particularly interested in the application of my technical skills to further research and love working with people advancing human knowledge. 
          </Text>
        </Flex>
      </Flex>
      

      <Divider w={"60%"} m={"1%"} borderColor={"gray.100"}/>

      <Flex w={"100%"} justifyContent={"center"} id='experience'>
        <Flex w={"60%"} flexDirection={"column"}>
          <Heading as='h2' size={'lg'} marginBottom={"2%"}>
            Experience
          </Heading>

          <Wrap>
            {experienceList.map((experience, idx) => (
              <WrapItem key={idx}>
                <ExperienceCard 
                  expTitle={experience["expTitle"]} 
                  expLocation={experience["expLocation"]} 
                  expLocationUrl={experience["expLocationUrl"]} 
                  expStartDate={experience["expStartDate"]} 
                  expEndDate={experience["expEndDate"]}
                  expDescription={experience["expDescription"]}
                  expImageFile={experience["expImageFile"]}
                />
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Flex>

      <Divider w={"60%"} m={"2%"} borderColor={"black"}/>

      <Flex w={"100%"} justifyContent={"center"} id='projects'>
        <Flex w={"60%"} flexDirection={"column"}>
          <Heading as='h2' size={'lg'} marginBottom={"2%"}>
            Personal Projects
          </Heading>

          <Wrap>
            {projectList.map((project, idx) => (
              <WrapItem key={idx}>
                <ProjectCard 
                  projectTitle={project["projectTitle"]} 
                  projectURL={project["projectURL"]} 
                  technologiesUsed={project["technologiesUsed"]} 
                  projectDescription={project["projectDescription"]}
                  projectImage={project["projectImage"]}
                />
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Flex>
      

      <Flex 
        w={"100%"} 
        justifyContent={"center"} 
        id='contact'
        bgColor={"white"}
        borderTop={"1px solid"}
        borderColor={"black"}
        marginTop={"2%"}
        paddingTop={"1%"}
        paddingBottom={"1%"}
      >
        <Flex 
          w={"60%"} 
          flexDirection={"column"} 
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading as='h2' size={'lg'} marginBottom={"2%"}>
            Contact
          </Heading>

            <Text fontSize={"2xl"} w={"100%"} textAlign={"center"}>
              <Link >Email</Link> | <Link>LinkedIn</Link> | <Link>Github</Link>
            </Text>
            
        </Flex>
      </Flex>



    
    </Flex>
  );
}

export default App;
