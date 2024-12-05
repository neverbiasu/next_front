interface PageLayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function PageLayout({ children, fullWidth = false }: PageLayoutProps) {
  return <main className={fullWidth ? '' : 'container mx-auto'}>{children}</main>;
}
