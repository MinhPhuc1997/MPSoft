import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity, Platform, Image, KeyboardAvoidingView } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from "redux";
import ButtonLogin from "./ButtonLogin"
import CheckRemember from "./CheckRemember";
import TextInput from "./Input"
import { Box, Text } from "../../components";
const { width, height } = Dimensions.get("window");

import  {actionCreators} from "../../state"

const dispatch = useDispatch();
    const { LoginAcion } = bindActionCreators(actionCreators, dispatch);
interface ValueType{
    username:string,
    password:string,
    remember:boolean
}

const Login = () => {
    const LoginSchema = Yup.object().shape({
        password: Yup.string()
            .min(4, "Mật khẩu quá ngắn")
            .max(50, "Mật khẩu quá dài")
            .required("Vui lòng nhập mật khẩu"),
        username: Yup.string()
            .min(4, "Tài khoản quá ngắn")
            .max(50, "Tài khoản quá dài")
            .required("Vui lòng nhập tài khoản"),
    });

    const LoginPress =(data:ValueType)=>{
        LoginAcion(data);
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                flex: 1
            }}>
            <Box flex={1}>
                <Box flex={0.5} width >
                    <Image
                        style={{
                            width,
                            resizeMode: "stretch",
                            height: height * 0.4
                        }}
                        source={require('../../components/Assets/assets/loginBG.jpg')}>
                    </Image>
                    <Box marginLeft="s" marginTop="s" padding="m" position="absolute" width={width} flex={1} top={100}>
                        <Text variant="login_welcome">Đăng nhập</Text>
                        <Text variant="login_subWelcome">Bắt đầu đăng nhập để sự dụng ứng dụng!</Text>
                    </Box>
                </Box>
                <View style={{
                    position: "absolute",
                    backgroundColor: "#fff",
                    width,
                    height: height * 0.65,
                    bottom: 0,
                    borderTopLeftRadius: 35,
                    borderTopRightRadius: 35,
                    padding: 24,
                    justifyContent: "center"
                }}>
                    <Formik
                        validationSchema={LoginSchema}
                        initialValues={{ username: '', password: '', remember: true }}
                        onSubmit={values => { LoginPress(values) }}
                    >{({ handleChange, handleBlur, handleSubmit, values, touched, errors, setFieldValue }) => (
                        <Box flex={0.7} >
                            <Box >
                                <TextInput
                                    title="Tài khoản"
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    touched={touched.username}
                                    errors={errors.username}
                                />
                            </Box>
                            <Box flex={0.15} />
                            <Box alignSelf="flex-end">
                                {errors.username && touched.username && <Text>{errors.username}</Text>}
                            </Box>
                            <Box >
                                <TextInput
                                    title="Mật khẩu"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    touched={touched.password}
                                    errors={errors.password}
                                />
                            </Box>
                            <Box alignSelf="flex-end" >
                                {errors.username && touched.password && <Text>{errors.password}</Text>}
                            </Box>
                            <Box flex={0.05} />
                            <Box flexDirection="row" justifyContent="space-between">
                                <CheckRemember checked={values.remember} onChange={() => setFieldValue("remember", !values.remember)} />
                                <TouchableOpacity>
                                    <Text variant="login_italic">Quên mật khẩu</Text>
                                </TouchableOpacity>
                            </Box>
                            <Box flex={0.5} />
                            <ButtonLogin onPress={handleSubmit} />
                        </Box>
                    )}
                    </Formik>
                </View>
            </Box>
        </KeyboardAvoidingView>
    )
}

export default Login;