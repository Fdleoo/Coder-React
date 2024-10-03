import {Flex, Text} from "@chakra-ui/react";
import { IoCart } from "react-icons/io5";
import { CartContext } from "../../context"; 
import { useContext } from "react";
import { Link } from "react-router-dom";

export const CartWidget = () => {

    const { cartState } = useContext(CartContext);
    const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

    return (
        <Flex alignItems={"center"} justifyContent={"space-between"} width={65}>
            <IoCart size={35}  color="rgb(120, 0, 150, 0.8)"/>
            <Link to={'/checkout'}><Text fontSize={"1.5rem"}>{qtyTotalItems}</Text></Link>
        </Flex>
    )
}

