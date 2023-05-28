import Logo from './logo';
import NextLink from 'next/link';
import { forwardRef } from 'react'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, 
    IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const LinkItem=({ href, path, target, children, ...props}) => {
    const active = path === href

    return(
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            position="static"
            p={2}
            bg={active ? 'blue.800' : undefined}
            color={'blue.300'}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))
  
const Navbar = props => {
    const {path} = props
    return(
        <Box position="fixed" as="nav" w="100%" background="blue.800" zIndex={1} {...props} style={{backdropFilter:'blur(10px)'}}>
            <Container display="flex" p={2} maxW="container.lg" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'loose'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack direction={{ base: 'column', md:'row'}} display={{base: 'none', md:'flex'}} width={{base: 'full', md:'auto'}} alignItems="center" flexGrow={1} mt={{base: 4, nmd: 0}}>
                    <LinkItem href="/about" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="/gallery" path={path}>
                        Gallery
                    </LinkItem>
                    <LinkItem href="mailto:oxdphotography.com" path={path}>
                        Contact Me
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Navigation Button"></MenuButton>
                            <MenuList>
                                <MenuItem as={MenuLink} href="/">Home</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar