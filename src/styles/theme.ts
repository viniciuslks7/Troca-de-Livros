export const theme = {
  colors: {
    background: '#f8f9fa',
    textPrimary: '#1a242f',
    primaryBlue: '#1461a2',
    textSecondary: '#707b81',
    darkBlue: '#074477',
    lightGray: '#d6d3d0',
    white: '#ffffff',
    inactiveText: '#454545',
  },
  fonts: {
    family: 'Poppins',
    sizes: {
      xs: 12,
      sm: 14,
      base: 16,
      md: 15,
      lg: 20,
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    '2xl': 30,
    '3xl': 40,
    '4xl': 50,
  },
} as const;