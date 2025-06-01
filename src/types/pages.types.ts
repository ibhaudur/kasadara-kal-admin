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