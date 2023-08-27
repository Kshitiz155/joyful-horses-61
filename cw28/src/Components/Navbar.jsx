import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Flex, Spacer,Image } from '@chakra-ui/react';
import logo from "../assest/Brain Train.png"

function Navbar() {

    return (
        <Flex alignItems="center" bgColor="blue" p={4} color="white">
            <ChakraLink as={Link} to="/">
                <Image width="50px" src={logo} alt="logo" />
            </ChakraLink>
            <Spacer />
            <ChakraLink as={Link} to="/courses">
                COURSES
            </ChakraLink>
            <Spacer />
            <ChakraLink as={Link} to="/tutorial">
                TUTORIAL
            </ChakraLink>
            <Spacer />
            <ChakraLink as={Link} to="/features">
                FEATURES
            </ChakraLink>
            <Spacer />
            <ChakraLink as={Link} to="/pricing">
                PRICING
            </ChakraLink>
            <Spacer />
            <ChakraLink as={Link} to="/login">
                LOGIN
            </ChakraLink>
            <Spacer />
            <ChakraLink as={Link} to="/">
                JOIN FOR FREE
            </ChakraLink>
            <Spacer />
        </Flex>
    );
}

export default Navbar;