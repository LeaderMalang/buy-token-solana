interface Args {
    chainType: number;
    fromAddress: `0x${string}` | undefined;
    message: string;
    toAddress: `0x${string}` | undefined;
    value: string;
    usdValue: string;
    coinType?: number;
    hash?: `0x${string}` | undefined;
    id?: `0x${string}` | undefined;
    status?: number;
    createTime?: number;
    updateTime?: number;
    userId?: `0x${string}` | undefined;
}
export declare const useCreateDonate: () => (args: Args) => Promise<any>;
export declare const useFetchDonors: (toAddress: `0x${string}` | undefined, orderByType: string, chainType: string) => {
    donors: any;
    loading: boolean;
};
export {};
