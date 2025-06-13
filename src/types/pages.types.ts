export interface AuthLogin {
  emailId: string;
  password: string;
}
export interface UserDetails extends AuthLogin {
  _id?: string;
  fullName: string | undefined;
  contactNumber: string;
  date?: string;
  role?: string;
  permission?: string[];
  dob: string;
  bloodGroup: string;
  gender: string;
  address: string;
  merchantName?: string;
}

export interface ExamDetails {
  examName: string;
  mark: string;
  hour: string;
  questionCount: string;
  candidateCount: number;
  status: "draft" | "published" | "scheduled" | string; // extend as needed
  type: "free" | "paid" | string;
  price?: string;
}
