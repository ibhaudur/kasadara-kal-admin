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
  questionCount: string;
  candidateCount: number;
  status: "draft" | "published" | "scheduled" | string; // extend as needed
  exam_type: "free" | "paid" | string;
  cost?: string;
  start_datetime: string;
  discount_cost: string;
  attempt_per_person: string;
}
export interface ExamFormValues {
  exam_name: string;
  status: string;
  exam_type: string;
  duration: string;
  total_marks: string;
  cost: string;
  discount_cost: string;
  start_datetime: string;
  examStartTime: string;
  valid_until: string;
  validityTime: string;
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
}
