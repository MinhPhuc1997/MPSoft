import React from "react"
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Text, Box } from "../../components"
import { TouchableOpacity } from "react-native";

interface ButtonLoginProps {
   
    onPress:()=>void;
}
const ButtonLogin = ({ onPress }: ButtonLoginProps) => {
    return (
        <TouchableOpacity
        {...{onPress}}
       
        >
            <LinearGradient
                start={[0, 1]}
                end={[1, 0]}
                colors={['#9599E2', '#8BC6EC']}
                style={{
                    height: 50,
                    borderRadius: 24,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}>
                <Text variant="login">Đăng nhập</Text>
            </LinearGradient>
            <Box position="absolute" right={17} top={13}>
                <AntDesign name="rightcircleo" size={24} color="#fff" />
            </Box>
        </TouchableOpacity>
    )
}

export default ButtonLogin;