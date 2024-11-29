import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, FlatList, SectionList } from 'react-native';
import { NativeBaseProvider, ScrollView, StatusBar, Box, Text, Input, Button, View } from 'native-base';

const ConfigScreen = () => {
  // Datos para FlatList
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
    { id: '6', name: 'Item 6' },
  ]);

  // Datos para SectionList
  const sections = [
    { title: 'Section 1', data: ['A', 'B', 'C'] },
    { title: 'Section 2', data: ['D', 'E', 'F'] },
    { title: 'Section 1', data: ['G', 'H', 'I'] },
    { title: 'Section 2', data: ['J', 'K', 'L'] },
  ];

  return (
    <NativeBaseProvider>
      {/* StatusBar */}
      <StatusBar backgroundColor="black" barStyle="light-content" />
      
      {/* KeyboardAvoidingView */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* ScrollView */}
        <ScrollView flex={1} bg="coolGray.100">

          {/* FlatList */}
          <Box py={4} px={3}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>FlatList</Text>
            <FlatList
              data={items}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Box py={2} px={3} bg="white" my={1} borderRadius={8} shadow={2}>
                  <Text>{item.name}</Text>
                </Box>
              )}
            />
          </Box>

          {/* SectionList */}
          <Box py={4} px={3}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>SectionList</Text>
            <SectionList
              sections={sections}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <Box py={2} px={3} bg="white" my={1} borderRadius={8} shadow={2}>
                  <Text>{item}</Text>
                </Box>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <Box bg="blue.200" py={1} px={3}>
                  <Text fontSize="md" fontWeight="bold">{title}</Text>
                </Box>
              )}
            />
          </Box>

          {/* Input y botón */}
          <Box py={4} px={3} alignItems="center">
            <Input
              placeholder="Type something..."
              bg="white"
              borderRadius={8}
              shadow={2}
              mb={4}
              w="90%"
            />
            <Button onPress={() => alert('Button pressed!')}>Submit</Button>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
};

export default ConfigScreen;
