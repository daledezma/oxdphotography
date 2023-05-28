import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Container } from '@chakra-ui/react';
import NextLink from "next/link";
import { EmailIcon } from '@chakra-ui/icons';

const Hero = () => {
    return (
        <Flex
        w={'100vw'}
        h={'100vh'}
        maxHeight="665px"
        position="absolute"
        left={0}
        top={0}
        backgroundImage={
            '/images/gegoynony.jpeg'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
            w={'full'}
            justify={'center'}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
            <Container maxW={'container.lg'} align={'flex-start'} spacing={6}>
            <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                Every picture has a story and I would like to share that story with everyone. Get in contact with me
                so we can share your story.
            </Text>
            <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
                pt={5}>
                <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                color={'white'}
                px={6}
                colorScheme={'red'}
                bg={'blue.600'}
                as={NextLink} 
                href="./gallery"
                _hover={{ bg: 'blue.500' }}>
                Photo Gallery
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
            </Container>
        </VStack>
        </Flex>
    );
}

export default Hero;