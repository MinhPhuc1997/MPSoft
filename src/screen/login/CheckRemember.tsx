import React from "react"
import { TouchableOpacity } from "react-native";
import { Box, Text } from "../../components"

interface CheckRememberProps {
    checked: boolean;
    onChange: () => void;
}

const CheckRemember = ({ checked, onChange }: CheckRememberProps) => {
    return (
        <TouchableOpacity onPress={() => onChange()} >
            <Box
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                alignSelf="flex-start"
                padding="xs"
            >
                <Box
                    width={16}
                    height={16}
                    borderWidth={1}
                    borderColor="blue1"
                    borderRadius="m"
                    justifyContent="center"
                    alignItems="center"
                    marginRight="s"
                >
                    {(checked) && (
                        <Box
                            width={8}
                            height={8}
                            borderWidth={1}
                            backgroundColor="blue1"
                            borderRadius="m"
                        />
                    )}

                </Box>
                <Text variant="remenber">Tự động đăng nhập</Text>
            </Box>
        </TouchableOpacity>
    )
}

export default CheckRemember;