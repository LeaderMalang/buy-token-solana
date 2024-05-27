export declare const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare enum DONATE_TYPE {
    FLOAT = "float",
    EMBED = "embed"
}
export type floatType = typeof DONATE_TYPE.FLOAT;
export type embedType = typeof DONATE_TYPE.EMBED;
export type UFOType = {
    type: floatType | embedType;
};
export type PrimaryCoinType = {
    Ethereum: string | number[];
    Goerli: string | number[];
    Polygon: string | number[];
    'Polygon Mumbai': string | number[];
};
export declare const PRIMARY_COIN: PrimaryCoinType;
export declare const DONATE_VALUE_MAP: PrimaryCoinType;
export type Explores = {
    [key: number]: string;
};
export declare const EXPLORER_URL_MAP: Explores;
interface Coin {
    name: string;
    icon: string;
    explorer: string;
    eas: string;
}
interface CoinList {
    [key: number]: Coin;
}
interface Chain {
    name: string;
    icon: string;
    coin: CoinList;
}
interface ChainList {
    [key: string]: Chain;
}
export declare const coinType: ChainList;
export {};
