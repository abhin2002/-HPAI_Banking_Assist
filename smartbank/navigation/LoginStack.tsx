import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import LoginScreen from "../screens/LoginScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import SignUpScreen from "../screens/SignUpScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
<<<<<<< HEAD
import View_ifsc from "../screens/View_ifsc";
import QRCodeScanner from "../screens/QRCodeScanner";
=======
import BhimUpiScreen from "../screens/BhimUpiScreen";
import PayToContactsScreen from "../screens/PayToContactsScreen";
import InsuranceScreen from "../screens/InsuranceScreen";
import NetBankingScreen from "../screens/NetBankingScreen";
import BankHolidaysScreen from "../screens/BankHolidaysScreen";
import CalculatorScreen from "../screens/CalculatorScreen";
import DepositRatesScreen from "../screens/DepositRatesScreen";
import OnlinePaymentScreen from "../screens/OnlinePaymentScreen";


>>>>>>> 1f7d073d6ff937a5bf78287ccb737e6726ab934f

export type LoginStackParams = {
  OnBoarding: undefined;
  Login: undefined;
  SignUp: undefined;
  ConfirmEmail: { email: string };
  GetOTP: undefined;
  BhimUPI: undefined;
  PayToContacts: undefined;
  InsuranceScreen: undefined;
  NetBankingScreen: undefined;
  BankHolidaysScreen: undefined;
  CalculatorScreen: undefined;
  DepositRatesScreen: undefined;
  OnlinePaymentScreen: undefined;
};

export type LoginNavigationProps =
  NativeStackScreenProps<LoginStackParams>["navigation"];

const Stack = createNativeStackNavigator<LoginStackParams>();

export function LoginStack() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
<<<<<<< HEAD
      <Stack.Screen name="View_ifsc" component={View_ifsc} />
      <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
=======
      <Stack.Screen name="BhimUPI" component={BhimUpiScreen} />
      <Stack.Screen name="PayToContacts" component={PayToContactsScreen} />
      <Stack.Screen name="InsuranceScreen" component={InsuranceScreen} />

      <Stack.Screen name="NetBankingScreen" component={NetBankingScreen} />

      <Stack.Screen name="BankHolidaysScreen" component={BankHolidaysScreen} />
      <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />

      <Stack.Screen name="DepositRatesScreen" component={DepositRatesScreen} />
      <Stack.Screen name="OnlinePaymentScreen" component={OnlinePaymentScreen} />






>>>>>>> 1f7d073d6ff937a5bf78287ccb737e6726ab934f

    </Stack.Navigator>
    
  );
}
