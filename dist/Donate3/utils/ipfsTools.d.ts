export declare const convertIpfsToLink: (options: {
    ipfs: string;
    gateway: string;
    timeout?: number;
}, callback: (err?: Error, url?: string, response?: any) => void) => {
    abort: () => void;
};
export declare const getFasterIpfsLink: (options: {
    ipfs: string;
    timeout?: number;
    gateways?: string[];
}) => Promise<string>;
