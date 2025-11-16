export interface AuthLogin {
  email: string;
  password: string;
  role: string;
}
export interface UserDetails extends AuthLogin {
  _id?: string;
  name: string | undefined;
  permission?: string[];
}

export interface ExamDetails {
  exam_id: number;
  exam_name: string;
  total_marks: string;
  duration: string;
  questions_count: string;
  candidate_registered: number;
  status: "draft" | "published" | "scheduled" | string; // extend as needed
  exam_type: "free" | "paid" | string;
  cost?: string;
  start_datetime: string;
  discount_cost: string;
  attempt_per_person: string;
  final_cost?: string;
  published_on?: string;
  created_on: string;
  registered_candidate: number;
}
export interface ExamFormValues {
  exam_name: string;
  status: string;
  exam_type: string;
  exam_category: string;
  duration: string;
  total_marks: string;
  cost: string;
  discount_cost: string;
  exam_start_date: string;
  exam_start_time: string;
  exam_validity_date: string;
  exam_validity_time: string;
  attempt_per_person: string;
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
  description: string;
}
export interface QuestionItem {
  id: number;
  mark: string;
  english: Question;
  tamil: Question;
}
export interface QuestionFormProps {
  select: number;
  language: "english" | "tamil";
  questions: QuestionItem[];
  handleChange: (
    index: number,
    language: "english" | "tamil",
    field: keyof Question,
    value: string,
    optionKey?: keyof Question["options"]
  ) => void;
}
export interface StepsProps {
  questions: QuestionItem[];
  setSelect: (index: number) => void;
  select: number;
}
export interface QuestionsStateProps {
  questions: QuestionItem[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionItem[]>>;
  setFile: (file: File | null) => void;
}

export interface TilesProps {
  data: {
    total_payments?: number | string;
    total_registered_candidates?: number;
    average_attendance?: number;
    category_wise_amount?: {
      group_4_amount?: number | string;
      group_2a_mains_amount?: number | string;
      group_1_prelims_amount?: number | string;
    };
  };
}

export type AmountKeys =
  | "total_payments"
  | "group_4_amount"
  | "group_2a_mains_amount"
  | "group_1_prelims_amount";
export interface StatusItem {
  exam_category?: string;
  published?: string | number;
  scheduled?: string | number;
  draft?: string | number;
}

export interface MonthlyItem {
  month: string;
  total_payments?: number;
  total_amount?: string;
  new_candidates?: number;
  attendance_count?: number;
}
export interface OverviewProps {
  data: {
    category_status_overview?: {
      group_4?: StatusItem;
      group_2a_mains?: StatusItem;
      group_1_prelims?: StatusItem;
    };
    payment_overview_monthly?: MonthlyItem[];
    candidate_overview_monthly?: MonthlyItem[];
    monthly_exam_attendance?: MonthlyItem[];
    total_registered_candidates?: number;
    total_payments?: number;
  };
}
