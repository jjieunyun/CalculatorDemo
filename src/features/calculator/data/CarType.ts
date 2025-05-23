export type CarType =
  | 'TON_1'
  | 'TON_2_5'
  | 'TON_3_5'
  | 'TON_5'
  | 'TON_5_PLUS'
  | 'TON_8'
  | 'TON_11'
  | 'NONE';


export const CarType = [
    {label: '픽업 차량 톤수 선택', value: 'NONE'},
    {label: '1톤 트럭', value: 'TON_1'},
    {label: '2.5톤 트럭', value: 'TON_2_5'},
    {label: '3.5톤 트럭', value: 'TON_3_5'},
    {label: '5톤 트럭', value: 'TON_5'},
    {label: '5톤 플러스', value: 'TON_5_PLUS'},
    {label: '8톤 트럭', value: 'TON_8'},
    {label: '11톤 트럭', value: 'TON_11'},
  ];