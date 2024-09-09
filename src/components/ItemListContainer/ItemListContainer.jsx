import {
    Box,
    Card,
    Stack,
    Heading,
    CardBody,
    Divider,
    CardFooter,
    ButtonGroup,
    Image,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const ItemListContainer = ({ productos }) => {
    return (
        <Box display={"flex"} flexWrap={"wrap"}>
            {productos.map((product) => (
                <Card key={product.id} maxW="sm" margin={"1rem"}>
                    <CardBody>
                        <Image
                            src={product.thumbnail}
                            alt={product.name}
                            borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3">
                            <Heading size="md">{product.title}</Heading>
                            <Text>{product.description}</Text>
                            <Text color="blue.600" fontSize="2xl">
                                {product.price}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing="2">
                            <Link to={`/item/${product.id}`}>Ir a Detalle</Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            ))}
        </Box>
    );
};





/* import { Box, Flex, Card, Stack, Heading, Text, CardBody, CardFooter, Button, Image, Divider, ButtonGroup } from "@chakra-ui/react";

export const ItemListContainer = ({ productos, greeting }) => {
    return <Flex justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"90vh"} fontSize={"2rem"} color={"rgb(150, 0, 0)"} >{greeting}</Flex>
    return(
        productos.map((producto) => {
            return (
                <Card maxW='sm' key={producto.id} margin={'2vh'}>
                    <CardBody>
                        <Image
                            src={producto.image}
                            alt={producto.name}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{producto.name}</Heading>
                            <Text>{producto.description}</Text>
                            <Text color='blue.600' fontSize='2xl'>
                                ${producto.price}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            )
        })
    )
}

 */