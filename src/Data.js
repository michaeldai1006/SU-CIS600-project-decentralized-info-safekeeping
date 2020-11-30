import { Storage } from '@stacks/storage';

export const saveInfo = async (userSession, info_list) => {
    // New storage instance
    const storage = new Storage({ userSession });

    // Put file
    await storage.putFile("D-Vault-Info", JSON.stringify(info_list), 
    { encrypt: true, dangerouslyIgnoreEtag: true});
};

export const fetchInfo = async (userSession, username) => {
    // New storage instance
    const storage = new Storage({ userSession });

    // Get file
    const raw_info_list = await storage.getFile("D-Vault-Info", {
        decrypt: true,
        username: username,
    });

    // Parse response
    return JSON.parse(raw_info_list);
}