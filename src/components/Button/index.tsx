import React from "react";
import { Button } from "@chakra-ui/react";
import { ButtonProps } from "../../utilities/scheme";


export const ButtonComponent: React.FC<ButtonProps> = ({
    bg,
    color,
    text,
    width,
    onClick,
}) => {
    return (
        <Button
            bg={bg}
            color={color}
            py="26px"
            px="16px"
            borderRadius="4px"
            fontWeight="normal"
            w={width}
            onClick={onClick}
            _hover={{bg: bg}}
        >
            {text}
        </Button>
    );
};
