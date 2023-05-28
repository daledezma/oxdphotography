import { Container } from "@chakra-ui/react";
import Layout from "../components/layouts/layout";
import About from "../components/about";

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