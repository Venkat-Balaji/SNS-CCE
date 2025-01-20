enum ButtonStyles {
  baseButton = "px-7 py-[6px] rounded-lg w-fit text-sm",
  themeButton = "px-7 py-[6px] rounded-lg w-fit text-sm bg-[#FFC800]",
}

enum AppPages {
  userJobOpportunities = "userJobOpportunities",
  userInternshipOpportunities = "userInternshipOpportunities",
}

enum Departments {
  TNPC = "TNPC",
  ArmyAndDefence = "Army and Defence",
  ITDevelopment = "IT & Development",
  Civil = "Civil",
  Banking = "Banking",
  UPSC = "UPSC",
  Biomedical = "Biomedical",
  TNPCc = "TNPSC",
  ArmyAndDefencec = "Army and Defence Systems",
}

enum AppRoutes {
  login = "/login",
  register = "/register",
  adminSignup = "/admin/signup",
  adminLogin = "/admin/login",
  jobs = "/jobs",
  internships = "/internships",
}

export { ButtonStyles, AppPages, Departments, AppRoutes };
