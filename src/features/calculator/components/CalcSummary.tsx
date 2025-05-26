import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import RefreshIcon from '@assets/images/calculator/material-symbols-refresh-rounded.svg';
import DistanceIcon from '@assets/images/calculator/ic-baseline-turn-sharp-right-m.svg';
import TruckIcon from '@assets/images/calculator/ic-baseline-local-shipping-m.svg';
import TimeIcon from '@assets/images/calculator/ic-sharp-access-time-filled-m.svg';
import LocationIcon from '@assets/images/calculator/ic-baseline-add-location-m.svg';
import ArrowIcon from '@assets/images/calculator/ic-round-arrow-drop-down.svg';

export default function CalculatorSummary() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <View className="w-full absolute bottom-0 z-10">
      {/* Toggle Arrow */}
      <TouchableOpacity
        onPress={handleToggle}
        style={{
          position: 'absolute',
          top: -14,
          left: '50%',
          marginLeft: -22.5,
          width: 45,
          height: 14,
          backgroundColor: 'rgba(0,0,0,0.84)',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20,
        }}
      >
        <ArrowIcon
          width={24}
          height={24}
          style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }], marginTop: 4 }}
        />
      </TouchableOpacity>

      <View className="w-full bg-[rgba(0,0,0,0.84)] p-24">
        {/* Top Row: 초기화 / 금액 */}
        <View className="flex-row justify-between items-center mb-16">
          <TouchableOpacity className="flex-row items-center border border-[#47484c] rounded-md p-6 ">
            <RefreshIcon width={20} height={20} className="mr-2" />
            <Text className="text-white text-opacity-70 text-[14px]">초기화</Text>
          </TouchableOpacity>

          <View className="flex-row items-center gap-2">
            <Text className="text-white text-opacity-70 text-[14px]">용달 비용</Text>
            <Text className="text-white text-opacity-95 text-[20px] font-semibold">15,000원</Text>
          </View>
        </View>

        {/* Detail Section */}
        {isOpen && (
          <View className="gap-8 pb-16">
            <DetailRow icon={<DistanceIcon width={20} height={20} />} label="이동거리" value="3km" />
            <DetailRow icon={<TruckIcon width={20} height={20} />} label="차량" value="1톤 카고 윙바디" />
            <DetailRow icon={<TimeIcon width={20} height={20} />} label="운송 시간" value="주간" />
            <DetailRow icon={<LocationIcon width={20} height={20} />} label="운송 옵션" value="차량만" />
          </View>
        )}

        {/* 버튼 */}
        <TouchableOpacity className="mt-2 h-[58px] rounded-8 bg-[#2e58ec] flex-row justify-center items-center mb-16">
          <Text className="text-white text-[16px] font-medium">센디 운송 시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const DetailRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <View className="flex-row justify-between items-center">
    <View className="flex-row items-center">
      {icon}
      <Text className="ml-2 text-[14px] text-white">{label}</Text>
    </View>
    <Text className="text-[14px] font-semibold text-white">{value}</Text>
  </View>
);