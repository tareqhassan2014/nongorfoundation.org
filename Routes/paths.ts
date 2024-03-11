const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
  PAGES: "/pages",
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
  pages:{
    volunteer: `${ROOTS.PAGES}/volunteer`,
    devProfile: `${ROOTS.PAGES}/developer-profile`
  }
};
