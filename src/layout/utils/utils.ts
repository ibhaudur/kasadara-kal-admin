import Dashboard from "../../../public/images/menu/dashboard.svg";
import Exams from "../../../public/images/menu/exams.svg";
import Payments from "../../../public/images/menu/payments.svg";
import Candidates from "../../../public/images/menu/candidates.svg";
import Reports from "../../../public/images/menu/report.svg";

export const RoutesList = [
  {
    title: "Dashboard",
    Icon: Dashboard,
    path: "/dashboard",
    permission: "dashboard",
  },
  {
    title: "Exams",
    Icon: Exams,
    path: "/exams",
    permission: "merchantManagement",
  },
  {
    title: "Payments",
    Icon: Payments,
    path: "/payments",
    permission: "usersManagement",
  },
  {
    title: "Candidates",
    Icon: Candidates,
    path: "/candidates",
    permission: "productManagement",
  },
  {
    title: "Referrals",
    Icon: Reports,
    path: "/referrals",
    permission: "productManagement",
  },
  // {
  //   title: "Report",
  //   Icon: Reports,
  //   path: "/report",
  //   permission: "orderManagement",
  // },
];
