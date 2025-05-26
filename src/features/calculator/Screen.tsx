import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Banner from './components/Banner';
import Form from './components/Form';
import CalculatorSummary from './components/CalcSummary';
import {View} from 'react-native';

export default function CalculatorScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-white"
    >
      <View className="flex-1 relative">
        <ScrollView
          contentContainerStyle={{paddingBottom: 200}} // 여유 있게 공간 확보
          showsVerticalScrollIndicator={false}
        >
          <Banner />
          <Form />
        </ScrollView>

        {/* 항상 하단에 고정된 요약 영역 */}
        <View className="absolute bottom-0 w-full z-50">
          <CalculatorSummary />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
