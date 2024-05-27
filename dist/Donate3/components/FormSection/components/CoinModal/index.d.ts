import React from 'react';
import { IToken } from '../../config';
interface ICoinModalProps {
    onClosePress: () => void;
    visible: boolean;
    tokens: IToken[] | [];
    onCoinCardClick: (address: string) => void;
}
declare const _default: React.MemoExoticComponent<({ onClosePress, visible, tokens, onCoinCardClick }: ICoinModalProps) => React.JSX.Element>;
export default _default;
