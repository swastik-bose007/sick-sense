// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import FeatherIcon from "@expo/vector-icons/Feather";

// --------------------------------------------------------------------
// EXTERNAL COMPONENTS
// --------------------------------------------------------------------
import { images } from "../config/images";

// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import colorTheme from "../config/colorTheme";
import { globalStyles } from "../globalStyles/commonStyles";
import { screenSize } from "../globalStyles/commonStyles";

const LoginScreen = ({navigation}) => {
  // --------------------------------------------------------------------
  // Password visibility
  // --------------------------------------------------------------------
  const [text, setText] = useState();
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={[screenSize.height, screenSize.width, globalStyles.dummyView]}
      >
        {/* -----------------------------------image title part------------------------------------------------ */}
        <View style={[globalStyles.flexCenter]}>
          <Image
            source={images.loginImage}
            style={[globalStyles.loginImage, globalStyles.dim6]}
          ></Image>
          <Text style={[globalStyles.dim1, globalStyles.loginHeader]}>
            WELCOME
          </Text>
          <Text style={[globalStyles.dim2, globalStyles.loginPara]}>
            Sense your sickness with machine learning{" "}
          </Text>
        </View>
        {/* ------------------------------------input part------------------------------------------------------ */}
        <View style={[globalStyles.flexCenter]}>
          <View style={[globalStyles.upperSpace]}>
            <TextInput
              style={[globalStyles.inputStyle]}
              placeholder="enter your email id"
            />
            <FeatherIcon name="mail" size={15} style={[globalStyles.icon]} />
          </View>
          <View style={[globalStyles.dim3]}>
            <TextInput
              style={[globalStyles.inputStyle]}
              secureTextEntry={passwordVisible}
              placeholder="enter your password"
            />
            <FeatherIcon name="lock" size={15} style={[globalStyles.icon]} />
            <FeatherIcon
              name={passwordVisible ? "eye" : "eye-off"}
              size={15}
              style={[globalStyles.icon2]}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          </View>
          <View style={[globalStyles.flexCenter, globalStyles.dim5 ]}>
            <Pressable onPress={() => navigation.navigate('SignupScreen')}>
              <Text style={[ globalStyles.subText ]}>Create Account</Text>
            </Pressable>
          </View>
          <TouchableOpacity style={{ marginTop: 70 }} activeOpacity={0.9} onPress={() => navigation.navigate('DashboardScreen')}>
            <View style={[globalStyles.btnStyle, globalStyles.flexCenter]}>
              <Text style={[ globalStyles.btnText ]}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
