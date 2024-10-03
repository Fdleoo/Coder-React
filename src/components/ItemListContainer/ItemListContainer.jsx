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

