import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box as="header" textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to SaaS Startup
          </Heading>
          <Text fontSize="xl">Revolutionizing the way you manage your business</Text>
        </Box>

        {/* Hero Section */}
        <Box as="section" textAlign="center" py={10}>
          <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNvZnR3YXJlfGVufDB8fHx8MTcxODg3NDY5OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Hero Image" borderRadius="md" mb={6} />
          <Heading as="h2" size="xl" mb={4}>
            All-in-One Business Management Software
          </Heading>
          <Text fontSize="lg" mb={6}>
            Streamline your operations, increase productivity, and grow your business with our comprehensive suite of tools.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        <Box as="section" py={10}>
          <Heading as="h2" size="lg" textAlign="center" mb={8}>
            Features
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack spacing={4} align="center">
              <Image src="https://images.unsplash.com/photo-1699910618950-ed0b871c7fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMXxlbnwwfHx8fDE3MTg4NzQ2OTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 1" boxSize="100px" borderRadius="full" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 1
              </Text>
              <Text textAlign="center">Description of feature 1 that highlights its benefits and uses.</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <Image src="https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMnxlbnwwfHx8fDE3MTg4NzQ3MDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 2" boxSize="100px" borderRadius="full" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 2
              </Text>
              <Text textAlign="center">Description of feature 2 that highlights its benefits and uses.</Text>
            </VStack>
            <VStack spacing={4} align="center">
              <Image src="https://images.unsplash.com/photo-1506544777-64cfbe1142df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwM3xlbnwwfHx8fDE3MTg4NzQ3MDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 3" boxSize="100px" borderRadius="full" />
              <Text fontSize="lg" fontWeight="bold">
                Feature 3
              </Text>
              <Text textAlign="center">Description of feature 3 that highlights its benefits and uses.</Text>
            </VStack>
          </HStack>
        </Box>

        {/* Call to Action Section */}
        <Box as="section" textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Ready to Transform Your Business?
          </Heading>
          <Text fontSize="lg" mb={6}>
            Join thousands of businesses that trust our software to manage their operations.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Sign Up Now
          </Button>
        </Box>

        {/* Footer Section */}
        <Box as="footer" textAlign="center" py={10}>
          <HStack spacing={4} justify="center" mb={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </HStack>
          <Text fontSize="sm">© 2023 SaaS Startup. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
