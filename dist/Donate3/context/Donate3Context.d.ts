import React from 'react';
import { Account, Donate3ContextType } from '../@types/donate3';
import { embedType, floatType } from '../utils/const';
export declare const Donate3Context: React.Context<Donate3ContextType>;
declare const Donate3Provider: React.FC<{
    children: React.ReactNode;
    cid: string;
    accountType: number;
    toAddress: `0x${string}` | undefined;
    safeAccounts?: Account[] | undefined;
    type: floatType | embedType;
    color: string;
    title: string;
    demo: boolean;
    avatar: string;
}>;
export default Donate3Provider;
