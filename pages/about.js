import { Container, Box, Heading, Image, Link, Tooltip, Button, useColorModeValue, List, ListItem } from "@chakra-ui/react";
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/layout";
import About from "../components/about";

import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const Page = () => {
    return (
        <Layout>
            <Container maxW="container.lg">
                <About />

            </Container>
        </Layout>
    ) 
}

export default Page