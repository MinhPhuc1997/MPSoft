import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity, Modal, Alert, Picker, Platform, Image } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from "redux";
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Box, Text } from "../../components"
import TextInput from "./TextInput"
import ButtonLogin from "./ButtonLogin";
import CheckRemember from "./CheckRemember";
import { actionCreators } from "../../state"
import { RootState } from "../../state/reducers";
import { SET_LANGUAGE } from "../../state/action-type";
import { Loading } from "../../Components/Loading";
import { LINK } from "../../API";

const { width, height } = Dimensions.get("window");
const WIDTH_INPUT = width * 0.7;

const _Login1 = () => {

    const dispatch = useDispatch();
    const { LoginNormal, ChangeLoading } = bindActionCreators(actionCreators, dispatch);

    const language = useSelector((state: RootState) => state.language.language);
    const lan = useSelector((state: RootState) => state.language.data);
    const loading = useSelector((state: RootState) => state.login.IsLoading);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(language);

    const nameLanguage = (selectedValue == 'VI') ? "Tiếng việt" : (selectedValue == 'EN') ? "English" : "中文";

    const LoginSchema = Yup.object().shape({
        password: Yup.string()
            .min(4, lan.shortInput)
            .max(50, lan.longInput)
            .required(lan.plaseInput),
        username: Yup.string()
            .min(4, lan.shortInput)
            .max(50, lan.longInput)
            .required(lan.plaseInput),
    });
    const storeData = async (value, key: string) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            // saving error
        }
    }
    const storeDataObject = async (value, key: string) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const loginPress = (value) => {
        ChangeLoading();
        axios.post(LINK.LOGIN, value).then((response) => {
            // console.log(response.data); //asdas
            (value.remember) ? () => { storeData(true, "IsLogin"); storeDataObject(response.data, "dataLogin"); } : null;
            LoginNormal(response.data);
        }).catch((error) => {
            if (error.response.status == 401) {
                ChangeLoading();
                Alert.alert(lan.errorLogin)
            }
        })
    }

    const chooseLanguage = () => {
        return (
            <Picker
                selectedValue={selectedValue}
                style={{ height: 45, width: 150 }}
                onValueChange={(itemValue) => {
                    setSelectedValue(itemValue);
                    dispatch({ type: SET_LANGUAGE, language: (itemValue) });
                }}
            >
                <Picker.Item label="Tiếng việt" value="VI" />
                <Picker.Item label="english" value="EN" />
                <Picker.Item label="中文" value="CN" />
            </Picker >
        )
    }

    return (
        <Box flex={1}>
            <Box flex={0.4} width >
                <Image
                    style={{
                        width,
                        resizeMode: "stretch",
                        height: height * 0.4
                    }}
                    source={require('../../Components/Assets/assets/loginBG.jpg')} >
                </Image>
                <Box marginLeft="s" marginTop="s" padding="m" position="absolute" width={width} flex={1} bottom={100}>
                    <Text variant="welcome">{lan.message}</Text>
                    <Text variant="subWelcome">Vui lòng đăng nhập để bắt đầu!</Text>
                </Box>
            </Box>
            <View style={{
                position: "absolute",
                backgroundColor: "#fff",
                width,
                height: height * 0.7,
                bottom: 0,
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35,
                padding: 17
            }}>
                <Formik
                    validationSchema={LoginSchema}
                    initialValues={{ username: '', password: '', remember: true }}
                    onSubmit={values => loginPress(values)}
                >{({ handleChange, handleBlur, handleSubmit, values, touched, errors, setFieldValue }) => (
                    <Box
                        flex={1}
                        alignSelf="center"
                        justifyContent="center"
                    >
                        <Box
                            flex={0.61}
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <TextInput
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                width={WIDTH_INPUT}
                                title="Tài khoản"
                                leftIcon="user"
                                placeholder="Nhập tài khoản ở đây"
                                touched={touched.username}
                                errors={errors.username}
                            />
                            <Box alignSelf="flex-end">
                                {errors.username && touched.username && <Text>{lan.username}{errors.username}</Text>}
                            </Box>
                            <Box>
                                <TextInput
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    width={WIDTH_INPUT}
                                    title="Mật khẩu"
                                    placeholder="Nhập mật khẩu ở đây"
                                    leftIcon="lock"
                                    rightIcon="eye"
                                    secureTextEntry={true}
                                    password={true}
                                    touched={touched.password}
                                    errors={errors.password}
                                />
                                <Box alignSelf="flex-end" marginBottom="m">
                                    {errors.username && touched.password && <Text>{lan.password}{errors.password}</Text>}
                                </Box>
                                <Box marginBottom="l">
                                    <CheckRemember checked={values.remember} onChange={() => setFieldValue("remember", !values.remember)} />
                                </Box>
                            </Box>
                            <ButtonLogin width={WIDTH_INPUT} onPress={handleSubmit} />
                        </Box>
                        <Box flex={0.1}
                            flexDirection="row"
                            alignItems="flex-end"
                            justifyContent="center"
                        >
                            {(Platform.OS == "ios") && (
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                    style={{
                                        flexDirection: "row",
                                        marginBottom: -17
                                    }}
                                >
                                    <Text>{nameLanguage}</Text>
                                    <AntDesign name="caretdown" size={16} color="#0093E9" style={{ marginLeft: 7 }} />
                                </TouchableOpacity>
                            )}
                            {(Platform.OS == "android") && (
                                <TouchableOpacity
                                    style={{
                                        flexDirection: "row",
                                        marginBottom: -17
                                    }}>
                                    {chooseLanguage()}
                                </TouchableOpacity>
                            )}
                        </Box>
                    </Box>)}
                </Formik>

            </View>

            {(modalVisible) && (
                <Box
                    position="absolute"
                    backgroundColor="mainForeground"
                    width={width}
                    height={height}
                    opacity={0.7}
                />
            )}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <Box
                    position="absolute"
                    backgroundColor="mainBackground"
                    width={width}
                    height={250}
                    alignItems="center"
                    bottom={0}
                >
                    <Box
                    marginTop="s"
                        width={45}
                        height={5}
                        backgroundColor="gray1"
                    />
                    <TouchableOpacity
                        style={{ alignSelf: "flex-start", marginLeft: 17, marginTop: 17 }}
                        onPress={() => { setModalVisible(!modalVisible) }}
                    >
                        <Text >close</Text>
                    </TouchableOpacity>
                    {chooseLanguage()}

                </Box>
            </Modal>
            {(loading) && (
                <Box
                    position="absolute"
                    flex={1}
                    width={width}
                    height={height}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Loading />
                </Box>
            )}
        </Box>
    )
}

const Login1 = _Login1;

export default Login1;
