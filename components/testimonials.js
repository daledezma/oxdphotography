import React, { useState } from 'react';
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
  } from '@chakra-ui/react';

import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';


const Testimonials = () => {
  return (
    <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>You're in good hands</Heading>
          <Text>See why over 100+ people have trusted me to photograph their stories!</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Box>
          <Stack
            bg={'blue.500'}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: 'blue.500',
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
              <Heading as={'h3'} fontSize={'xl'} color={'white'}>Fast Turn Around</Heading>
              <Text
                textAlign={'center'}
                color={'white'}
                fontSize={'sm'}>
                I hired OXDPhotography to host a photoshoot for my business and I was able to get the edited photos from him in under a week allowing me to post and
                advertise my buisness really quick!
              </Text>
            </Stack>
            <Flex align={'center'} mt={8} direction={'column'}>
                <Avatar src={'images/headshot.jpeg'} alt={'Oscar Delgado'} mb={2} />
                <Stack spacing={-1} align={'center'}>
                    <Text fontWeight={600}>Oscar</Text>
                    <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    CEO
                    </Text>
                </Stack>
            </Flex>
          </Box>
          <Box>
          <Stack
            bg={'blue.500'}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: 'blue.500',
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
             <Heading as={'h3'} fontSize={'xl'} color={'white'}>A True Professional</Heading>
             <Text
                textAlign={'center'}
                color={'white'}
                fontSize={'sm'}>
                I've hired OXD Photography for various events and I have full faith in his ability to capture
                amazing photographys to market my brand on social media! He's a true professional!
              </Text>
            </Stack>
            <Flex align={'center'} mt={8} direction={'column'}>
                <Avatar src={'images/headshot.jpeg'} alt={'Oscar Delgado'} mb={2} />
                <Stack spacing={-1} align={'center'}>
                    <Text fontWeight={600}>Oscar</Text>
                    <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    CEO
                    </Text>
                </Stack>
            </Flex>
          </Box>
          <Box>
          <Stack
            bg={'blue.500'}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: 'blue.500',
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
              <Heading as={'h3'} fontSize={'xl'} color={'white'}>Favorite Photo</Heading>
              <Text
                textAlign={'center'}
                color={'white'}
                fontSize={'sm'}>
                I took my headshots with OXDPhotography and now I have a professional headshot to share that's my favorite photo!
              </Text>
            </Stack>
            <Flex align={'center'} mt={8} direction={'column'}>
                <Avatar src={'images/headshot.jpeg'} alt={'Oscar Delgado'} mb={2} />
                <Stack spacing={-1} align={'center'}>
                    <Text fontWeight={600}>Oscar</Text>
                    <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    CEO
                    </Text>
                </Stack>
            </Flex>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Testimonials;
