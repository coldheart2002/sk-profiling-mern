const myIP = "192.168.37.10";
// const myIP = "192.168.1.17";

export const clientPort = 3001;
const serverPort = 3000;

const authLink = `http://${myIP}:${serverPort}/api/auth`;
export const signupLink = `${authLink}/signup`;
export const loginLink = `${authLink}/login`;

export const profilesLink = `http://${myIP}:${serverPort}/api/profiles`;
export const chartDataLink = `${profilesLink}/chartData`;
export const createLink = `${profilesLink}/new`;
