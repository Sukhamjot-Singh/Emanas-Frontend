import { environment } from '../environments/environment';
const baseUrl = environment.baseUrl;
export const loginUrl = environment.loginUrl + '/loginj';
export const opLoginUrl = environment.loginUrl + '/loginop';
export const getFileUrl = baseUrl + '/file/upload';
export const userUrl = baseUrl + '/userinfo';
export const getDrugNames = baseUrl + '/searchDrugName/moleculeName/';
export const genSaltUrl = environment.loginUrl + '/genSalt/';
export const changePassUrl = baseUrl + '/changePassword';
export const getCaptchaUrl = environment.loginUrl + '/createCaptcha/';
export const updatePasswordUrl = baseUrl + '/user/updatePassword';


export const forgotpasswordUrl = baseUrl + '/forgotpassword';
export const uploadBMRUrl = baseUrl + '/file/uploadBMR';
export const getICDCodeUrl = baseUrl + '/searchICD10Code/code/';
export const getICDDescriptionUrl = baseUrl + '/searchICD10Code/desc/';
export const addRecordUrl = baseUrl + '/rest/addRecord';
export const getOrgUuidUrl = baseUrl + '/getorg';
export const getAllRecordsUrl = baseUrl + '/rest/getAllRecords';

export const checkUserameUrl = environment.cors + '/Hello_war_exploded/user/check';
export const createUserUrl = environment.cors + '/Hello_war_exploded/user/create';
export const updateUserUrl = environment.cors + '/Hello_war_exploded/user/update';
export const getOrgUrl = environment.cors + '/Hello_war_exploded/org/all';
export const getAdminOrgUrl = environment.cors + '/Hello_war_exploded/org/All/';
export const getSubOrgUrl = environment.cors + '/Hello_war_exploded/org/suborg';

export const getUsersUrl = environment.cors + '/Hello_war_exploded/user/getAllUser/paginate';
export const getUserOrgUrl = environment.cors + '/Hello_war_exploded/org/getUserOrg';
export const logoutUrl = baseUrl + '/user/logout';
export const refreshToken = baseUrl + '/user/loginj/refresh/';
export const getReport = baseUrl + '/rest/report/';
export const getUserRecords = baseUrl + '/rest/getRecordsByUser/';
export const getDashboardCountUrl = baseUrl + '/rest/getRecordsCountUser/';
export const getAdminDashboardCountUrl = baseUrl + '/rest/getRecordsCountAdmin/';
export const Last7DaysUrl = baseUrl + '/rest/getLast7daysCount/';
export const AgeCountUrl = baseUrl + '/rest/getAgeCount/';
export const districtReportUrl = baseUrl + '/rest/districtReport/';
export const orgReportUrl = baseUrl + '/rest/orgReport/';


export const createconsenturl = baseUrl + '/user/getHealthRecords';
export const verifyconsenturl = baseUrl + '/user/verifyConsentOTP';
export const getrecords = baseUrl + '/user/getHealthRecords'

export const authuser = baseUrl + '/user/authenticateUser';
export const verifyauth = baseUrl + '/user/verifyRegistrationOTP';
export const viewconsentsbyusername = baseUrl + '/user/getConsentByusername';
export const start = baseUrl + '/user/start';
export const gethospitals = baseUrl + '/user/getHospitalList';

export let districtsList =
    ['Bagalkot', 'BBMP', 'Bengaluru Rural', 'Bengaluru Urban', 'Belagavi', 'Ballari', 'Bidar', 'Chamarajanagar', 'Chikkaballapur',
        'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi',
        'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shivamogga', 'Tumakuru', 'Udupi',
        'Uttara Kannada', 'Vijayapura', 'Yadgir'];

export const rsapublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz/Pup9S7AfLQMGifbQHb
JBeRaoF0znGpc09Kx3Un5AOkrF9L0SGzQNqt9MOt1I9bdSIXEA/RUiuf3oA37Ukf
WAF78BTE/pspoDvhlaKiBinrlQ6CPvetoUlqkwb9xNa6SubcgsTR/iOjJiuNc/6/
KvTxtPzjzXPflobUtMK+AuCxfPUw3xyEBqqXdOTG2bb92/QBW/fEonMKLrkji8VD
5dxVVy793fihmEcPEJNio2RE0rDgDwVEmXrIzLtm9ucxJgmPmPgt+FErMi00TcMR
3GZwPcQ0YQ9VW9V4aU/wUIwGQpTMebqEGcRd00SSAo6syG5rmZ3Z2jxNM8etsyAy
IwIDAQAB
-----END PUBLIC KEY-----`;
