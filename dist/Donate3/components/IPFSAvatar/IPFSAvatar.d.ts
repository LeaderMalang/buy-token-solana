import React from 'react';
export type TIPFSSrc = `https://nftstorage.link/ipfs/${string}`;
export interface IIPFSAvatarProps {
    children?: React.ReactNode;
    className?: string;
    ipfsSrc: TIPFSSrc;
    address?: `0x${string}`;
}
declare const _default: React.MemoExoticComponent<({ className, ipfsSrc, address }: IIPFSAvatarProps) => React.JSX.Element>;
export default _default;
