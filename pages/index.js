import { Container, Box, Center, Text, Stack, Avatar, Heading, Image } from "@chakra-ui/react";
import Layout from "../components/layouts/layout";
import Hero from "../components/hero";
import Testimonials from "../components/testimonials";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';


const Page = () => {
    return (
        <Layout>
            <Hero />
            <Box h={630}/>
            <Container maxW="container.lg" >
                <Heading as="h3" variant="section-title" id="myworks">
                    Recent Photo Shoots
                </Heading>

                <Box>
                    <Splide hasTrack={false} aria-label="My Favorite Images" options={ {
                        maxHeight : 600,
                        height: 600,
                        perPage: 2,
                        padding: { left: 25, right: 25 },
                        margin: "auto",
                        gap   : '1rem',
                        type   : 'loop',
                        objectfit: "cover",
                        autoplay: true,
                        breakpoints: {
                            640: {
                              perPage: 1,
                              padding: { left: 0, right: 0 },
                              arrows: false
                            }
                        }
                        
                    } }
                    >
                        <SplideTrack>
                            <SplideSlide>
                                <Center py={6}>
                                    <Box
                                        maxW={'400px'}
                                        w={'full'}
                                        bg={'blue.900'}
                                        boxShadow={'2xl'}
                                        rounded={'md'}
                                        p={6}
                                        overflow={'hidden'}>
                                        <Box
                                        h={'230px'}
                                        bg={'blue.800'}
                                        mt={-6}
                                        mx={-6}
                                        mb={6}
                                        pos={'relative'}>
                                        <Image
                                            src={
                                            'images/allgoods2.jpeg'
                                            }
                                            alt="All Goods MKE Store"
                                            objectFit='cover'
                                            height="100%"
                                            width="100%"
                                        />
                                        </Box>
                                        <Stack>
                                        <Text
                                            color={'blue.300'}
                                            textTransform={'uppercase'}
                                            fontWeight={800}
                                            fontSize={'sm'}
                                            letterSpacing={1.1}>
                                            Street Photography
                                        </Text>
                                        <Heading
                                            color={'whiteAlpha.900'}
                                            fontSize={'2xl'}
                                            fontFamily={'body'}>
                                            All Goods MKE promotion
                                        </Heading>
                                        <Text color={'whiteAlpha.900'}>
                                            I conducted a photoshoot with the music duo &quot;Gego y Nony&quot; to promote the All Goods MKE brand opening a new store in
                                            West Allis, Wisconsin.
                                        </Text>
                                        </Stack>
                                        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                        <Avatar
                                            src={'./images/headshot.jpeg'}
                                            alt={'Author'}
                                        />
                                        <Stack direction={'column'} spacing={0} fontSize={'sm'} color={"whiteAlpha.900"}>
                                            <Text fontWeight={600}>OXDPhotography</Text>
                                            <Text >May 28, 2023 · 6min read</Text>
                                        </Stack>
                                        </Stack>
                                    </Box>
                                </Center>
                            </SplideSlide>
                            <SplideSlide>
                                <Center py={6}>
                                    <Box
                                        maxW={'400px'}
                                        w={'full'}
                                        bg={'blue.900'}
                                        boxShadow={'2xl'}
                                        rounded={'md'}
                                        p={6}
                                        overflow={'hidden'}>
                                        <Box
                                        h={'230px'}
                                        bg={'gray.100'}
                                        mt={-6}
                                        mx={-6}
                                        mb={6}
                                        pos={'relative'}>
                                        <Image
                                            src={
                                            './images/model/realrich.jpg'
                                            }
                                            alt="Real Rich Brand"
                                            objectFit='cover'
                                            height="100%"
                                            width="100%"
                                        />
                                        </Box>
                                        <Stack>
                                        <Text
                                            color={'blue.300'}
                                            textTransform={'uppercase'}
                                            fontWeight={800}
                                            fontSize={'sm'}
                                            letterSpacing={1.1}>
                                            Portrait Photography
                                        </Text>
                                        <Heading
                                            color={'whiteAlpha.900'}
                                            fontSize={'2xl'}
                                            fontFamily={'body'}>
                                            Real Rich Brand
                                        </Heading>
                                        <Text color={'whiteAlpha.900'}>
                                            I photographed a new line of streetwear pieces for Real Rich Brand and scheduled photoshoots with models
                                            to showcase the new line.
                                        </Text>
                                        </Stack>
                                        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                        <Avatar
                                            src={'./images/headshot.jpeg'}
                                            alt={'Author'}
                                        />
                                        <Stack direction={'column'} spacing={0} fontSize={'sm'} color={"whiteAlpha.900"}>
                                            <Text fontWeight={600}>OXDPhotography</Text>
                                            <Text >May 28, 2023 · 6min read</Text>
                                        </Stack>
                                        </Stack>
                                    </Box>
                                </Center>
                            </SplideSlide>
                            <SplideSlide>
                                <Center py={6}>
                                    <Box
                                        maxW={'400px'}
                                        w={'full'}
                                        bg={'blue.900'}
                                        boxShadow={'2xl'}
                                        rounded={'md'}
                                        p={6}
                                        overflow={'hidden'}>
                                        <Box
                                        h={'230px'}
                                        bg={'gray.100'}
                                        mt={-6}
                                        mx={-6}
                                        mb={6}
                                        pos={'relative'}>
                                        <Image
                                            src={
                                            './images/concerts/masflow.jpg'
                                            }
                                            alt="Mas Flow Concert"
                                            objectFit='cover'
                                            height="100%"
                                            width="100%"
                                        />
                                        </Box>
                                        <Stack>
                                        <Text
                                            color={'blue.300'}
                                            textTransform={'uppercase'}
                                            fontWeight={800}
                                            fontSize={'sm'}
                                            letterSpacing={1.1}>
                                            Concert Photography
                                        </Text>
                                        <Heading
                                            color={'whiteAlpha.900'}
                                            fontSize={'2xl'}
                                            fontFamily={'body'}>
                                            Mas Flow Reggaetón Fest
                                        </Heading>
                                        <Text color={'whiteAlpha.900'}>
                                            Mas Flow is the first reggaeton festival in the Midwest! They bring the hottest reggaeton artists of our generation and I worked along with &quot;Gego y Nony&quot;
                                            to photography their performance along with other artists.
                                        </Text>
                                        </Stack>
                                        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                        <Avatar
                                            src={'./images/headshot.jpeg'}
                                            alt={'Author'}
                                        />
                                        <Stack direction={'column'} spacing={0} fontSize={'sm'} color={"whiteAlpha.900"}>
                                            <Text fontWeight={600}>OXDPhotography</Text>
                                            <Text >May 28, 2023 · 6min read</Text>
                                        </Stack>
                                        </Stack>
                                    </Box>
                                </Center>
                            </SplideSlide>
                        </SplideTrack>

                    </Splide>
                </Box>
                <Testimonials />

            </Container>
        </Layout>
    ) 
}

export default Page