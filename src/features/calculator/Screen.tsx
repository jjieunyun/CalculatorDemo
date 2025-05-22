// Feature/calculator/Screen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CalculatorScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>비용 계산기 화면입니다</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default CalculatorScreen;