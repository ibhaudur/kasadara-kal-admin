export const postLogin = "admin_login";
export const getDashboard = "admin-dashboard";
export const postAddExam = "add_exam";
export const putEditExam = "edit_exam"; //id
export const getAllExams =
  "exams_list?page=:page&limit=:limit&search=:search&category=:exam_category";
export const getExamById = "exam_view"; //id
export const getPaymenrtDetails =
  "payment-details?page=:page&limit=:limit&search=:search&status=:status";
export const getCandidatesList =
  "registered-candidates?page=:page&limit=:limit&search=:search";
export const postBulkUpload = "upload_exam";

export const getReferralsList =
  "refferal?page=:page&limit=:limit&search=:search";
export const postAddReferral = "refferal";
export const updateReferralById = "refferal/:id";
