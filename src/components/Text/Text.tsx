interface TextProps {
  children: React.ReactNode,
  type?: 'h1' | 'h2' | 'h3'
}

export default function Text({children, type} : TextProps) {
  const componentType = type || 'h1';
  return<componentType>{children}</componentType>
}
