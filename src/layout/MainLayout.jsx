import { Flex } from "@chakra-ui/react";
import { NavBar } from "../components";


const MainLayout = ({children}) => {
    return(
        <div>
            <NavBar/>
            <Flex display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
                {children}
            </Flex>
            <div>footer</div>
        </div>
    )
}

export default MainLayout;