import React from "react"
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class SignIn extends React.Component {
	state={
		email:"",
		password:""
	}

	render() {
		return (
		<View style={styles.signInView}>
				<Image source={require("./../assets/images/bitmap-3.png")}
					style={styles.logoImage}/>
				<View style={styles.editTextIconView}>
					<TextInput
						pointerEvents="box-none"
						style={{
							width: 113,
							height: 23,
							marginLeft: 8,
							flexDirection: "row",
							alignItems: "flex-start",
						}}
						placeholder="Email"
						onChangeText={text => this.setState({email:text})}/>
					</View>
				<View style={styles.editTextIconView}>
					<TextInput
						pointerEvents="box-none"
						style={{
							width: 113,
							height: 23,
							marginLeft: 8,
							flexDirection: "row",
							alignItems: "flex-start",
						}}
						placeholder="Password"
						onChangeText={text => this.setState({password:text})}/>
					</View>
				

				<TouchableOpacity style={styles.forgotPasswordText}>
					<Button 
							onPress={this.props.onLoginPress}
							title="Forgot Password?"
						/>
        		</TouchableOpacity>
				<TouchableOpacity style={styles.loginBtn}>
					<Button color="#FFFFFF"
							onPress={() => this.props.navigation.navigate('Swipe')}
							title="LOGIN"
						/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.signUpText}>
					<Button 
							onPress={this.props.onLoginPress}
							title="Don't have an account? Sign Up"
						/>
        		</TouchableOpacity>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	signInView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	logoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 300,
		marginTop: 75,
	},
	editTextIconView: {
		width:"80%",
		backgroundColor:"#FAD7A0",
		borderRadius:25,
		height:50,
		marginTop:20,
		justifyContent:"center",
		padding:20
	},
	loginBtn: {
		width:"80%",
    	backgroundColor:"#fb5b5a",
		borderRadius:25,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		marginTop:40,
		marginBottom:10
	},
	loginText: {
		color: "white",
	},
	forgotPasswordText: {
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 164,
		marginTop: 5,
	},
	signUpText: {
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 200,
		marginTop: 50,
	},
	loginfbView: {
		backgroundColor: "transparent",
		width: 232,
		height: 58,
		marginBottom: 131,
	},
	facebookImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	signInWithFacebookText: {
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 166,
		marginTop: 3,
	},
});