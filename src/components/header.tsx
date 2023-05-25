import { Flex, Image } from "@chakra-ui/react";
import HamburgerMenu from "./hamburgerMenu";
import { DarkModeSwitch } from "./darkModeSwitch";


export default function header() {
    return <Flex justifyContent="space-between">
        <HamburgerMenu />
        <Image src="https://99designs.com/profiles/2113762/designs/858401" alt="Logo" width={53} height={50} />
        <Flex justifyContent="center" w="30px" h="30px" p="30px">
            <DarkModeSwitch />
        </Flex>
    </Flex>
}


