import { Flex } from "@chakra-ui/react";


const ItemListContainer = ({ greeting }) => {
    return (
        <Flex justifyContent={"center"} alignItems={"center"} width={"100vw"} height={"90vh"} fontSize={"2rem"} color={"rgb(150, 0, 0)"} >{greeting}</Flex>
    )
}

export default ItemListContainer;
