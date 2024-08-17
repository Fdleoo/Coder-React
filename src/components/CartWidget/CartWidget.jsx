import {Flex, Text} from "@chakra-ui/react";
import { IoCart } from "react-icons/io5";

const CartWidget = () => {
    return (
        <Flex alaingItems={"center"} justifyContent={"space-between"} width={65}>
            <IoCart size={35}  color="rgb(120, 0, 150, 0.8)"/>
            <Text fontSize={"1.5rem"}>0</Text>
        </Flex>
    )
}


export default CartWidget;