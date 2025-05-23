export function getCarOptionByCarType({carType}:{
    carType: 'TON_1' | 'TON_2_5' | 'TON_3_5' | 'TON_5' | 'TON_5_PLUS' | 'TON_8' | 'TON_11' | 'NONE';
}) {
    switch (carType) {
      case 'TON_1':
        return [
          { id: 'HORU', value: 'HORU', label: '방수 덮개(호루)' },
          { id: 'TOP', value: 'TOP', label: '탑차' },
          { id: 'WING', value: 'WING', label: '윙바디' },
          { id: 'LIFT', value: 'LIFT', label: '리프트' },
          { id: 'FRIDGE', value: 'FRIDGE', label: '냉장' },
          { id: 'FREEZE', value: 'FREEZE', label: '냉동' },
        ];
      case 'TON_2_5':
        return [
          { id: 'CARGO', value: 'CARGO', label: '카고' },
          { id: 'TOP', value: 'TOP', label: '탑차' },
          { id: 'WING', value: 'WING', label: '윙바디' },
          { id: 'FRIDGE', value: 'FRIDGE', label: '냉장' },
          { id: 'FREEZE', value: 'FREEZE', label: '냉동' },
        ];
      case 'TON_3_5':
        return [
          { id: 'CARGO', value: 'CARGO', label: '카고' },
          { id: 'TOP', value: 'TOP', label: '탑차' },
          { id: 'WING', value: 'WING', label: '윙바디' },
          { id: 'FRIDGE', value: 'FRIDGE', label: '냉장' },
          { id: 'FREEZE', value: 'FREEZE', label: '냉동' },
        ];
      case 'TON_5':
        return [
          { id: 'CARGO', value: 'CARGO', label: '카고' },
          { id: 'TOP', value: 'TOP', label: '탑차' },
          { id: 'WING', value: 'WING', label: '윙바디' },
          { id: 'FRIDGE', value: 'FRIDGE', label: '냉장' },
          { id: 'FREEZE', value: 'FREEZE', label: '냉동' },
        ];
      case 'TON_5_PLUS':
        return [
          { id: 'CARGO', value: 'CARGO', label: '카고' },
          { id: 'TOP', value: 'TOP', label: '탑차' },
          { id: 'WING', value: 'WING', label: '윙바디' },
          { id: 'FRIDGE', value: 'FRIDGE', label: '냉장' },
          { id: 'FREEZE', value: 'FREEZE', label: '냉동' },
        ];
      case 'TON_8':
        return [
          { id: 'CARGO', value: 'CARGO', label: '카고' },
          { id: 'WING', value: 'WING', label: '윙바디' },
          { id: 'FRIDGE', value: 'FRIDGE', label: '냉장' },
          { id: 'FREEZE', value: 'FREEZE', label: '냉동' },
        ];
      case 'TON_11':
        return [
          { id: 'CARGO', value: 'CARGO', label: '카고' },
          { id: 'TOP', value: 'TOP', label: '탑차' },
          { id: 'WING', value: 'WING', label: '윙바디' },
          { id: 'FRIDGE', value: 'FRIDGE', label: '냉장' },
          { id: 'FREEZE', value: 'FREEZE', label: '냉동' },
        ];
      case 'NONE':
        return [
          {
            id: 'NONE',
            value: 'NONE',
            label: '차량 톤수를 먼저 선택해주세요.',
          },
        ];
    }
  }