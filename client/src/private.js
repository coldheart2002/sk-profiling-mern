const dbPort = 3000;
const myIP = "192.168.37.10";

const authLink = `http://${myIP}:${dbPort}/api/auth`;
export const signupLink = `${authLink}/signup`;
export const loginLink = `${authLink}/login`;

const profilesLink = `http://${myIP}:${dbPort}/api/profiles`;
export const allProfilesLink = `${profilesLink}/`;
export const chartDataLink = `${profilesLink}/chartData`;
export const createLink = `${profilesLink}/create`;
export const readLink = `${profilesLink}/read`;
export const updateLink = `${profilesLink}/update`;
export const deleteLink = `${profilesLink}/delete`;
export const searchLink = `${profilesLink}/search`;
