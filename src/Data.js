
export const save = async (userSession, info) => {
    // Put file
    await userSession.putFile("D-Vault-Info", info, 
    { encrypt: false, dangerouslyIgnoreEtag: true});
};

export const fetch = async (userSession, username) => {
    // Get file
    const info = await userSession.getFile("D-Vault-Info", {
        decrypt: false,
        username: username,
    });

    return info
}