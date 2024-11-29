import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import { Box, Heading, VStack, FormControl, HStack, Input, Button, Center, useColorModeValue } from "native-base";
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const bgColor = useColorModeValue('light.background.50', 'dark.background.900');
    const textColor = useColorModeValue('light.text.50', 'dark.text.50');

    const handleRegister = () => {
        if (password === confirmPassword) {
            setIsAuthenticated(true); 
            navigation.navigate('MainTab'); 
        } else {
            alert('Passwords do not match'); 
        }
    };

    return (
        <Center w="100%" bg={bgColor} flex={1}>
            <Image 
                source={require('../../assets/icon.png')} 
                style={{ width: '100%', height: 200, marginBottom: 20 }} 
                resizeMode="contain"
            />
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color={textColor}>
                    Welcome
                </Heading>
                <Heading mt="1" color={textColor} fontWeight="medium" size="xs">
                    Sign in to continue!
                </Heading>
                <VStack space={1} mt="2">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input value={email} onChangeText={setEmail} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" value={password} onChangeText={setPassword} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input type="password" value={confirmPassword} onChangeText={setConfirmPassword} />
                    </FormControl>
                    <Button mt="3" colorScheme="indigo" onPress={handleRegister}>
                        Register
                    </Button>
                    <HStack mt="2" justifyContent="center">
                        <Text fontSize="sm" color={textColor}>
                            Already have an account? 
                            <Button variant="link" colorScheme="indigo" onPress={() => navigation.navigate('Login')}>
                                Login
                            </Button>
                        </Text>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default RegisterScreen;
