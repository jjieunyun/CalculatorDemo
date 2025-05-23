import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Banner from './components/Banner';
import Form from './components/Form';

export default function CalculatorScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Banner />
        <Form />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}