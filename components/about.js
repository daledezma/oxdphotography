import { Container, Stack, Flex, Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import NextLink from "next/link";

const About = () => {
    return (
        <Container maxW={'7xl'}>
        <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 10 }}
            direction={{ base: 'column', md: 'row' }}>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                <Text
                as={'span'}
                position={'relative'}
                _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'blue.600',
                    zIndex: -1,
                }}>
                I am,
                </Text>
                <br />
                <Text as={'span'} color={'blue.600'}>
                OXD Photography
                </Text>
            </Heading>
            <Text>
            Every picture has a story and I would like to share that story with everyone. I&apos;m available for hire/
            </Text>
            <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}>
                <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                color={'white'}
                px={6}
                colorScheme={'red'}
                bg={'blue.600'}
                _hover={{ bg: 'blue.500' }}>
                My Works
                </Button>
                <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                bg={'gray.300'}
                _hover={{ bg: 'gray.200' }}
                as={NextLink} 
                href="mailto:oxdphotography@gmail.com"
                leftIcon={<EmailIcon h={4} w={4} color={'gray.800'} />}>
                Get In Contact
                </Button>
            </Stack>
            </Stack>
            <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>

            <Box
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                    'images/headshot.jpeg'
                }
                />
            </Box>
            </Flex>
        </Stack>
        </Container>
    );
}

export default About;

