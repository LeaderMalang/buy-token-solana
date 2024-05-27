import React from 'react';
interface ICoinCardProps {
    icon: string;
    name: string;
    selected: boolean;
    address: string | '';
    onCoinCardClick: (address: string) => void;
}
declare const _default: React.MemoExoticComponent<({ icon, name, selected, address, onCoinCardClick, }: ICoinCardProps) => React.JSX.Element>;
export default _default;
