import { Storage } from '@stacks/storage';

export const save = async (userSession, info) => {
    // New storage instance
    const storage = new Storage({ userSession });

    // Put file
    await userSession.putFile("D-Vault-Info", info, 
    { encrypt: false, dangerouslyIgnoreEtag: true});
};

export const fetch = async (userSession, username) => {
    // New storage instance
    const storage = new Storage({ userSession });

    // Get file
    const info = await userSession.getFile("D-Vault-Info", {
        decrypt: false,
        username: username,
    });

    return info
}