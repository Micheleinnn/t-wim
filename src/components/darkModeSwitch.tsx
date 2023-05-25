import { useColorMode, Switch, Flex, Button, IconButton } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"
    return (
        <Flex>
            <Switch
                h="20px"
                w="10px"
                pos="fixed"
                top="1rem"
                isChecked={isDark}
                onChange={toggleColorMode}
            />
        </Flex>
    )
}