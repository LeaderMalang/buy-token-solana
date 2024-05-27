import React from 'react';
export interface Props {
    onClick?: () => void;
    width?: string;
    address?: string;
    children?: any;
    style?: any;
    className?: string;
}
declare function Avatar(props: Props): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Avatar>;
export default _default;
