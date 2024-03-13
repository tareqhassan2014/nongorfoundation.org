const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
};
export const paths = {
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
    forgetPassword: `${ROOTS.AUTH}/forget-password`,
    verifyPassword: `${ROOTS.AUTH}/verify-password`,
    newPassword: `${ROOTS.AUTH}/new-password`,
  },
  home: "/",
  pages: {
    volunteer: "/pages/volunteer",
    naturalDisaster: "/pages/natural-disaster",
    medicalHelp: "/pages/medical-help",
  },
};
