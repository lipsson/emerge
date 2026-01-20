const ROOTS = {
  DASHBOARD: "/events",
  LOGIN: "/",
};

export const paths = {
  page403: "/error/403",
  page404: "/error/404",
  page500: "/error/500",
  login: `${ROOTS.LOGIN}`,
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
    },
  },
};
