import { Button, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
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
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>React Native 시작 화면</Text>
          <Button
            title="비용 계산기로 이동"
            onPress={() => navigation.navigate('Calculator')}
          />
        </ScrollView>
      </View>
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
  });