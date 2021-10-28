import * as React from "react";
import { Box,Text } from "../../components";
import { AntDesign } from '@expo/vector-icons';
import { Dimensions,TextInput as RNTextInput, TextInputProps  as RNTextInputProps} from "react-native";

interface TextInputProps  extends RNTextInputProps{
 title:string,
 touched?: boolean,
 errors?: string,
}

const TextInput =({title,touched,errors,...props}:TextInputProps)=>{
    const BoderColor = !touched ? "gray1" : (errors ? "redColor" : "greenLight");
    return(
        <Box  >
            <Text variant="title_input" opacity={0.8} >{title}</Text>
            <Box borderWidth={1} borderColor={BoderColor} height={45} justifyContent="center" padding="s" borderRadius="s">
               <RNTextInput
                placeholder={"Nhập "+title+" tại đây!"}
                {...props}
               />
            </Box>
        </Box>
    )
}

export default TextInput;