import Link from "next/link";
import { Text } from "@chakra-ui/react";
import styled from '@emotion/styled';

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 20px;
    display: inline-flex;
    align-items: center;
    height: 50px;
    line-height: 20px;
    padding: 10px;
`
const Logo = () => {

    return(
        <Link href="/">
                <LogoBox>
                    <Text color={'blue.300'} fontFamily="" fontWeight="bold" ml={3}>
                        OXDPhotography
                    </Text>
                </LogoBox>
        </Link>
    )
}

export default Logo