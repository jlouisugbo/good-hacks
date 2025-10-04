export const canAccess = (feature: string, userRole: string): boolean => {
  const permissions: Record<string, string[]> = {
    lms: ['student', 'admin'],
    community: ['student', 'admin'],
    events: ['student', 'volunteer', 'parent', 'admin'],
    scholarships: ['student', 'volunteer', 'admin'],
    leadership: ['student', 'volunteer', 'admin'],
    childReports: ['parent', 'admin'],
    userManagement: ['admin']
  };

  return permissions[feature]?.includes(userRole) ?? false;
};

export const getDefaultRoute = (role: string): string => {
  return `/${role}/dashboard`;
};
