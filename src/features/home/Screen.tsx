import React from 'react';
import { Button, ScrollView, StatusBar, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function HomeScreen({ navigation }: { navigation: any }) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentContainerClassName="flex-grow justify-center items-center px-6">
        <Text className="font-semibold mb-5 text-[48px] dark:text-white">
          Home
        </Text>
        <Button
          title="비용 계산기로 이동"
          onPress={() => navigation.navigate('Calculator')}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;