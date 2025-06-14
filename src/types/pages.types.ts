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
export interface ExamFormValues {
  examName: string;
  status: string;
  examType: string;
  duration: string;
  totalMarks: string;
  cost: string;
  discountCost: string;
  examStartDate: string;
  examStartTime: string;
  validityDate: string;
  validityTime: string;
}
export interface Question {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: string;
}
export interface StepsProps {
  questions: Question[];
  setSelect: (index: number) => void;
  select: number;
};
