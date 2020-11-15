export const Style = {
  padding: {
    small: 2,
    reduced: 4,
    regular: 8,
    increased: 16,
    large: 24,
    larger: 32,
    largest: 64,
  } as const,
  boxShadow: {
    regular: '0px 0px 30px 5px rgba(0,0,0,0.40)',
  } as const,
  borderRadius: {
    regular: 8,
  } as const,
  fontSize: {
    small: 1,
    regular: 2,
    increased: 3,
    large: 4,
    larger: 5,
  } as const,
} as const;
