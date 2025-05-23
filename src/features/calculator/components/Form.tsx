import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

import LocationIcon from '@assets/images/calculator/location.svg';
import FlagIcon from '@assets/images/calculator/flag.svg';
import DropDownIcon from '@assets/images/calculator/ic-round-arrow-drop-down.svg';
import {CarType, CarType as CarTypeData} from '../data/CarType';
import {getCarOptionByCarType} from '../data/CarOption';
import DropDownPicker from 'react-native-dropdown-picker';
import IcMoon from '@assets/images/calculator/moon-icon.svg';
import IcSun from '@assets/images/calculator/sun-icon.svg';

type Option = {
  label: string;
  value: string;
};

export default function Form() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>('기타');
  const [selectedCarType, setSelectedCarType] = useState<CarTypeData>('NONE');
  const [carOptions, setCarOptions] = useState<Option[]>([]);
  const [selectedCarOption, setSelectedCarOption] = useState<string>('NONE');
  const [selectedTime, setSelectedTime] = useState<'day' | 'night'>('day');

  useEffect(() => {
    const options = getCarOptionByCarType({carType: selectedCarType});
    if (options.length > 0) {
      setCarOptions(options);
    }
  }, [selectedCarType]);

  return (
    <View className="py-120 px-24 bg-white">
      <Text className="text-28 font-bold text-center mb-48 text-[#212121]">
        용달 비용 계산하기
      </Text>

      <View className="mb-32">
        <TextTitle>출/도착지를 입력해주세요</TextTitle>
        <LocationInput
          icon={<LocationIcon width={16} height={16} />}
          placeholder="출발지를 입력해주세요"
          className="mb-10"
        />
        <LocationInput
          icon={<FlagIcon width={16} height={16} />}
          placeholder="도착지를 입력해주세요"
        />
      </View>

      <View>
        <TextTitle>차량을 선택해주세요</TextTitle>
        <View className="flex-row gap-8 mb-8">
          <VehicleButton
            label="다마스"
            onPress={() => setSelectedVehicle('다마스')}
            isSelected={selectedVehicle === '다마스'}
          />
          <VehicleButton
            label="라보"
            onPress={() => setSelectedVehicle('라보')}
            isSelected={selectedVehicle === '라보'}
          />
        </View>
        <View className="flex-row gap-8 mb-8">
          <VehicleButton
            label="1톤 카고"
            onPress={() => setSelectedVehicle('1톤 카고')}
            isSelected={selectedVehicle === '1톤 카고'}
          />
          <VehicleButton
            label="기타"
            onPress={() => setSelectedVehicle('기타')}
            isSelected={selectedVehicle === '기타'}
          />
        </View>
        {selectedVehicle === '기타' && (
          <View className="flex-col gap-8 mb-32">
            <Dropdown
              selectedValue={selectedCarType}
              onValueChange={value => setSelectedCarType(value as CarTypeData)}
              options={CarType}
            />
            {carOptions.length > 1 && (
              <Dropdown
                selectedValue={selectedCarOption || 'NONE'}
                onValueChange={value => setSelectedCarOption(value as string)}
                options={carOptions}
              />
            )}
          </View>
        )}

        <SelectTimeContainer
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      </View>
    </View>
  );
}

const TextTitle = ({children}: {children: React.ReactNode}) => {
  return <Text className="text-16 text-[#212121] mb-16">{children}</Text>;
};

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <View className={`border border-[#dedede] rounded-6 ${className}`}>
      {children}
    </View>
  );
};

const LocationInput = ({
  placeholder,
  icon,
  className,
}: {
  icon: React.ReactNode;
  placeholder: string;
  className?: string;
}) => {
  return (
    <Container className={`h-52 w-full ${className} px-16`}>
      <View className="w-full h-full flex-row items-center bg-transparent">
        <View className="mr-16">{icon}</View>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#b7b7b7"
          className="h-full text-14 text-[#212121] leading-normal"
        />
      </View>
    </Container>
  );
};

const VehicleButton = ({
  label,
  onPress,
  isSelected,
}: {
  label: string;
  onPress: () => void;
  isSelected?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-1 h-52 flex-col justify-center items-center border border-[#dedede] rounded-6 ${
        isSelected ? 'bg-blue-600' : 'bg-white'
      }`}>
      <Text
        className={`text-14 ${isSelected ? 'text-white' : 'text-[#b7b7b7]'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

type DropdownProps = {
  selectedValue: string;
  onValueChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
};

function Dropdown({
  selectedValue,
  onValueChange,
  options,
  placeholder = '옵션을 선택하세요',
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Option[]>([]);
  const [value, setValue] = useState<string>(selectedValue);

  useEffect(() => {
    setItems(options);
  }, [options]);

  // 외부 value와 동기화
  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);

  return (
    <View style={{zIndex: open ? 1000 : 1}}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={callback => {
          const selected = callback(value);
          setValue(selected);
          onValueChange(selected);
        }}
        ArrowDownIconComponent={() => <DropDownIcon width={24} height={24} />}
        ArrowUpIconComponent={() => (
          <DropDownIcon
            width={24}
            height={24}
            style={{transform: [{rotate: '180deg'}]}}
          />
        )}
        setItems={setItems}
        placeholder={placeholder}
        style={{
          borderColor: '#dedede',
          height: 52,
          borderRadius: 6,
        }}
        dropDownContainerStyle={{
          borderColor: '#dedede',
          paddingVertical: 0,
          paddingHorizontal: 16,
        }}
        textStyle={{
          fontSize: 14,
          color: '#212121',
        }}
        listMode="SCROLLVIEW"
      />
    </View>
  );
}

const SelectTimeContainer = ({
  selectedTime,
  setSelectedTime,
}: {
  selectedTime: 'day' | 'night';
  setSelectedTime: (time: 'day' | 'night') => void;
}) => {
  return (
    <View className="mb-40 w-full">
      <Text className="mb-16 text-16 text-[#212121]">
        운송 시간을 선택해주세요
      </Text>

      <View className="flex-col justify-between gap-12">
        <TouchableOpacity
          onPress={() => setSelectedTime('day')}
          className={`h-52 flex-1 rounded-8 border border-[#dedede] px-16 flex-row justify-between items-center ${
            selectedTime === 'day' ? 'bg-[#3391ff]' : 'bg-white'
          }`}>
          <View className="flex-row items-center gap-16">
            <IcSun
              width={24}
              height={24}
              fill={selectedTime === 'day' ? '#fff' : '#b7b7b7'}
            />
            <Text
              className={`text-16 ml-20 ${
                selectedTime === 'day' ? 'text-white' : 'text-[#b7b7b7]'
              }`}>
              주간
            </Text>
          </View>
          <Text
            className={`text-20 font-bold ${
              selectedTime === 'day' ? 'text-white' : 'text-[#b7b7b7]'
            }`}>
            08:00 ~ 18:00
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedTime('night')}
          className={`h-52 flex-1 rounded-8 border border-[#dedede] px-16 flex-row justify-between items-center ${
            selectedTime === 'night' ? 'bg-[#12235e]' : 'bg-white'
          }`}>
          <View className="flex-row items-center gap-16">
            <IcMoon
              width={24}
              height={24}
              fill={selectedTime === 'night' ? '#fff' : '#b7b7b7'}
            />
            <Text
              className={`text-16 ml-20 ${
                selectedTime === 'night' ? 'text-white' : 'text-[#b7b7b7]'
              }`}>
              야간
            </Text>
          </View>
          <Text
            className={`text-20 font-bold ${
              selectedTime === 'night' ? 'text-white' : 'text-[#b7b7b7]'
            }`}>
            18:00 ~ 08:00
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
