import React from 'react';
import { IToken } from '../../config';
interface ICoinPartProps {
    onPress: () => void;
    token: IToken | undefined;
}
declare const _default: React.MemoExoticComponent<({ onPress, token }: ICoinPartProps) => React.JSX.Element>;
export default _default;
