import {View, Text, Image} from 'react-native';

export default function Banner() {
  return (
    <View>
      <View className="w-full flex flex-col items-center bg-[#f7f8fe] pb-67">
        <Image
          source={require('../../../assets/images/calculator/calculator.png')}
          className="w-full max-w-205 h-226 mb-8 mt-24"
        />
        <Text className="text-13 font-bold text-[#727272] mb-6">
          비용 계산기
        </Text>
        <Text className="text-32 font-bold text-[#212121] text-center mb-6">
          용달비용{'\n'}
          계산까지 1분
        </Text>
        <Text className="text-16 text-[#525252] text-center">
          화물 운송·용달 비용을 미리 계산하세요.
        </Text>
      </View>
    </View>
  );
}
