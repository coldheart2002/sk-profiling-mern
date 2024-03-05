const dbPort = 3000;
// const myIP = "192.168.37.10";
const myIP = "192.168.1.13";

const authLink = `http://${myIP}:${dbPort}/api/auth`;
export const signupLink = `${authLink}/signup`;
export const loginLink = `${authLink}/login`;

export const profilesLink = `http://${myIP}:${dbPort}/api/profiles`;
export const chartDataLink = `${profilesLink}/chartData`;
export const createLink = `${profilesLink}/new`;
