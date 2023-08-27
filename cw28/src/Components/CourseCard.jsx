// function CourseCard(){
//     return(
//         <>CourseCard</>
//     )
// }

// export default CourseCard;

import React from 'react';
import { Box, Image, Stack, Heading, Text, Link as ChakraLink, Button, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';




function CourseCard() {
    //import the chakra UI components from the chakra UI library , and remove the following.


    return (
       
        <Box borderWidth="1px" borderRadius="md" padding="4" width="100" backgroundColor="white">
            <Image src="https://placehold.co/600x400" alt="image" />
            <Stack spacing="2" marginTop="4">
                <Heading size="md">Course Title</Heading>
                <Text>Tutor</Text>
            </Stack>
            <Stack direction="row" justify="space-between" marginTop="4">
                <Text>Duration</Text>
                <Text>Number of Views</Text>
            </Stack>
            {/* <Stack direction="row" justify="space-between" marginTop="4">
                <ChakraLink as={Link} to={`/courses`}>
                    Learn more
                </ChakraLink>
                <Button colorScheme="red" >
                    Delete
                </Button>
            </Stack> */}
        </Box>
    );
}

export default CourseCard;