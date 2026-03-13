import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Link as ChakraLink,
  Center,
  HStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  VStack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link as RouterLink, NavLink, Route, Routes } from 'react-router-dom';

const projectList = [
  {
    projectTitle: 'Covid Hospitalization Predictive Model',
    projectURL: 'https://github.com/ABashir01/covid-hospitalization-predictions',
    technologiesUsed: 'R',
    projectDescription:
      "Built a model comparison pipeline to evaluate multiple time-series approaches for two-week-ahead COVID-19 hospitalization forecasting in Georgia using wastewater viral activity data; identified an ARX model as best-performing",
  },
  {
    projectTitle: 'CVRP Solver',
    projectURL: 'https://github.com/ABashir01/cs2951o-final',
    technologiesUsed: 'Rust',
    projectDescription:
      "Implemented Capacitated Vehicle Routing Problem (CVRP) solver using bin-packing heuristics, 2-opt local search, simulated annealing, and randomized restarts to efficiently solve constrained routing problems",
  },
  {
    projectTitle: 'RAG Chatbot for PartSelect',
    projectURL: 'https://github.com/ABashir01/rag-chatbot-partselect',
    technologiesUsed: 'OpenAI API, Qdrant (vector DB), Flask, React',
    projectDescription:
      "Built retrieval-augmented generation (RAG) chatbot to answer product support questions from documentation sources",
  },
  {
    projectTitle: 'Article Bias Checker',
    projectURL: 'https://github.com/ABashir01/article-bias-checker',
    technologiesUsed: 'Pytorch (Transformers), Flask, React',
    projectDescription:
      "Fine-tuned Google's BERT transformer model for NLP-based political bias classification; deployed inference through a web application",
  },
];

const experienceList = [
  {
    expTitle: 'Software Engineer',
    expLocation: 'Uncountable',
    expLocationUrl: 'https://www.uncountable.com',
    expStartDate: 'Aug 2025',
    expEndDate: 'Present',
    expDescription:
      'Building backend and data-platform features at Uncountable, so far including asynchronous LLM streaming, automated unit standardization, data validation safeguards, experiment filtering, and analysis pipeline enhancements, while improving platform reliability through production debugging and regression testing. Using React, Flask, and Postgres.',
  },
  {
    expTitle: 'Student Researcher',
    expLocation: 'Brown University',
    expLocationUrl: 'https://vivo.brown.edu/display/rbalestr',
    expStartDate: 'Sep 2024',
    expEndDate: 'May 2025',
    expDescription:
      'Evaluated LLM fairness across different levels of language ability and jargon-use with Professor Randall Balestriero. Used Pytorch and Huggingface.',
  },
  {
    expTitle: 'Developer',
    expLocation: '24Cast',
    expLocationUrl: 'https://24cast.org/',
    expStartDate: 'Sep 2024',
    expEndDate: 'Nov 2024',
    expDescription:
      'Created web app for 2024 Election Night live map coverage for over 1000+ viewers in attendance. Used Next.js and AWS.',
  },
  {
    expTitle: 'Data Science Intern',
    expLocation: 'UC Berkeley',
    expLocationUrl: 'https://scriptencodinginitiative.github.io/',
    expStartDate: 'Jun 2024',
    expEndDate: 'Aug 2025',
    expDescription:
      'Worked with the Script Encoding Initiative to analyze script datasets and present at the Unicode Technology Workshop. Used Python.',
  },
  {
    expTitle: 'Full Stack Engineer',
    expLocation: 'URI',
    expLocationUrl: 'https://web.uri.edu/bytelab/',
    expStartDate: 'May 2024',
    expEndDate: 'Aug 2024',
    expDescription:
      'Built an online implementation of a smart cart study for one of the largest online shopping platforms. Used Next.js, Express.js, Python, and MySQL.',
  },
  {
    expTitle: 'Research Assistant',
    expLocation: 'Brown University',
    expLocationUrl: 'https://aarushirita.github.io/papers/',
    expStartDate: 'Feb 2024',
    expEndDate: 'Present',
    expDescription:
      'Studied sentiment analysis data for different social media algorithm treatments in India. Using Python, Google Cloud, and BigQuery.',
  },
  {
    expTitle: 'Data Analyst Intern',
    expLocation: 'UAB',
    expLocationUrl: 'https://www.uab.edu/soph/home/biostatistics',
    expStartDate: 'Aug 2023',
    expEndDate: 'Jan 2024',
    expDescription:
      'Worked with Professor Gary Cutter to clean and analyze large datasets for biostatistical research. Used Python and SAS.',
  },
  {
    expTitle: 'Cyber Security Intern',
    expLocation: 'UAB',
    expLocationUrl: 'https://www.uab.edu/it/home/security',
    expStartDate: 'Jun 2023',
    expEndDate: 'Aug 2023',
    expDescription:
      'Built a tool to sort and respond to reported spam emails and organized application workflows. Used Python.',
  },
  {
    expTitle: 'Web Developer',
    expLocation: 'BIS',
    expLocationUrl: 'https://www.bisweb.org/',
    expStartDate: 'Jun 2023',
    expEndDate: 'Aug 2023',
    expDescription:
      'Worked on internal systems for managing bank transactions and resolving form workflow issues. Used Salesforce Apex and JavaScript.',
  },
  {
    expTitle: 'Research Assistant',
    expLocation: 'CHRHS',
    expLocationUrl: 'https://watson.brown.edu/chrhs/research/civil-military-policy-coordination-COVID',
    expStartDate: 'Dec 2021',
    expEndDate: 'May 2023',
    expDescription:
      'Contributed to public health research on civil-military coordination during COVID-19. Used NVivo.',
  },
  {
    expTitle: 'Intern',
    expLocation: 'Nonviolence International',
    expLocationUrl: 'https://www.nonviolenceinternational.net/',
    expStartDate: 'Jun 2022',
    expEndDate: 'Dec 2022',
    expDescription:
      'Contributed to the Nonviolent Tactics Database and solved website maintenance issues. Used MySQL and HTML/CSS.',
  },
];

const navItems = [
  { to: '/', label: 'about / now' },
  { to: '/projects', label: 'projects' },
  { to: '/experience', label: 'experience' },
];

function SiteHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoSrc = `${process.env.PUBLIC_URL}/favicon.ico`;

  return (
    <>
      <Flex className="topbar" as="header" position="sticky" top={0} zIndex={1000}>
        <Center className="content-shell" h="100%" justifyContent="space-between">
          <HStack spacing={3}>
            <Image src={logoSrc} alt="AB logo" className="brand-logo" />
            <ChakraLink as={RouterLink} to="/" className="brand" _hover={{ textDecoration: 'none' }}>
              AHAD BASHIR
            </ChakraLink>
          </HStack>

          <HStack spacing={6} display={["none", null, null, "flex"]} className="menu-row">
            {navItems.map((item) => (
              <ChakraLink
                key={item.to}
                as={NavLink}
                to={item.to}
                className={({ isActive }) => `menu-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </ChakraLink>
            ))}
          </HStack>

          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={["flex", null, null, "none"]}
            onClick={onOpen}
            bg="black"
            color="white"
            border="2px solid"
            borderColor="white"
            borderRadius="none"
          />
        </Center>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white" color="black" borderLeft="2px solid black">
          <DrawerCloseButton mt={2} />
          <DrawerBody h="100vh" pt={20}>
            <VStack align="start" spacing={8}>
              {navItems.map((item) => (
                <ChakraLink key={item.to} as={RouterLink} to={item.to} onClick={onClose} className="menu-link mobile">
                  {item.label}
                </ChakraLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Flex className="hero" w="100%" justifyContent="center">
        <Flex className="content-shell" direction="column" py={[10, null, null, 16]}>
          <Heading className="hero-title">
            <br />
            I'M AHAD.
          </Heading>
          <Text className="hero-copy">
            I'm interested in using my technical skills to further research and help people. I also love writing and playing music - I play guitar and bass and am always down to collaborate. In my free time, I love playing board games, reading, and have started painting.
          </Text>
        </Flex>
      </Flex>

      <Flex className="section paper" w="100%" justifyContent="center">
        <Flex className="content-shell" direction="column" py={[10, null, null, 14]}>
          <Heading className="section-title dark">Now</Heading>
          <Text className="section-note dark">currently in rotation</Text>

          <SimpleGrid columns={[1, null, null, 2]} spacing={[4, null, null, 6]} mt={6}>
            <Box w="100%">
              <Box className="ink-card zine-card-left" w="100%">
                <Text className="card-head">Working On</Text>
                <Text className="desc light">Using LLMs to reliably extract data from semi-structured sources like recipe books and EMRs.</Text>
                <Text className="desc light">Figuring out deterministic contracts for LLM calls so systems are dependable.</Text>
              </Box>
            </Box>

            <Box w="100%">
              <Box className="paper-card zine-card-right" w="100%">
                <Text className="card-head dark">Other Stuff</Text>
                <Text className="desc">
                  Listening to:
                  <br />
                  <ChakraLink className="text-link dark" href="https://open.spotify.com/track/3c1HWTrM2HaPvOwIPDIa8z?si=b7e8aba4179d44c6" isExternal>
                    Tenchio
                  </ChakraLink>
                  ,{' '}
                  <ChakraLink className="text-link dark" href="https://open.spotify.com/track/0WaaPFt4Qy8sVfxKz43bCD?si=e0f318236cc34a33" isExternal>
                    Asian Kung-Fu Generation
                  </ChakraLink>
                  , and{' '}
                  <ChakraLink className="text-link dark" href="https://open.spotify.com/track/3iZmntAKfKaL1WLNEOFqb8?si=3b229b81c9214ff9" isExternal>
                    Ling Tosite Sigure
                  </ChakraLink>
                </Text>
                <Text className="desc">
                  Playing:
                  <br />
                  <ChakraLink className="text-link dark" href="https://boardgamegeek.com/boardgame/291572/oath" isExternal>
                    Oath
                  </ChakraLink>
                  {' '}and{' '}
                  <ChakraLink className="text-link dark" href="https://boardgamegeek.com/boardgame/359871/arcs" isExternal>
                    Arcs
                  </ChakraLink>
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}

function ProjectsPage() {
  return (
    <Flex className="section paper" w="100%" justifyContent="center">
      <Flex className="content-shell" direction="column" py={[10, null, null, 14]}>
        <Heading className="section-title dark">Projects</Heading>
        <Text className="section-note dark">selected projects and experiments</Text>

        <SimpleGrid columns={[1, null, null, 2]} spacing={[4, null, null, 6]} mt={6}>
          {projectList.map((project, idx) => (
            <ChakraLink key={idx} href={project.projectURL} isExternal className="card-link zine-link" w="100%">
              <Box className="paper-card zine-card project-card" w="100%">
                <Text className="project-link">{project.projectTitle}</Text>
                <Text className="meta">{project.technologiesUsed}</Text>
                <Text className="desc">{project.projectDescription}</Text>
                <Text className="link-cue">Open project -&gt;</Text>
              </Box>
            </ChakraLink>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

function ExperiencePage() {
  return (
    <Flex className="section paper" w="100%" justifyContent="center">
      <Flex className="content-shell" direction="column" py={[10, null, null, 14]}>
        <Heading className="section-title dark">Experience</Heading>
        <Text className="section-note dark">where i've worked and researched</Text>

        <SimpleGrid columns={[1, null, null, 2]} spacing={[4, null, null, 6]} mt={6}>
          {experienceList.map((exp, idx) => (
            <ChakraLink key={idx} href={exp.expLocationUrl} isExternal className="card-link zine-link">
              <Box className="paper-card exp-card">
                <Text className="meta dark">{exp.expStartDate} - {exp.expEndDate}</Text>
                <Text className="project-link dark-link">{exp.expTitle} / {exp.expLocation}</Text>
                <Text className="desc">{exp.expDescription}</Text>
                <Text className="link-cue">Open role -&gt;</Text>
              </Box>
            </ChakraLink>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

function SiteFooter() {
  return (
    <Flex className="footer" w="100%" justifyContent="center" as="footer">
      <Flex className="content-shell" py={8}>
        <Text className="contact-row">
          <ChakraLink className="text-link light" href="mailto:ahad_bashir@brown.edu" isExternal>
            Email
          </ChakraLink>{' '}
          /{' '}
          <ChakraLink className="text-link light" href="https://www.linkedin.com/in/ahad-bashir-b5382b1b7/" isExternal>
            LinkedIn
          </ChakraLink>{' '}
          /{' '}
          <ChakraLink className="text-link light" href="https://github.com/ABashir01" isExternal>
            Github
          </ChakraLink>
        </Text>
      </Flex>
    </Flex>
  );
}

function App() {
  return (
    <Flex className="site-root" maxWidth="100vw" flexDirection="column" minH="100vh">
      <SiteHeader />

      <Flex className="page-content" flex="1" direction="column" alignItems="stretch">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Flex>

      <SiteFooter />
    </Flex>
  );
}

export default App;
