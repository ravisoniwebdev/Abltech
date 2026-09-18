import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  openInNewTab?: boolean
}

const variantStyles = {
  primary:
    'bg-[#05A7D4] text-white hover:bg-[#0390B5] btn-shimmer shadow-sm hover:shadow-[0_8px_24px_rgba(5,167,212,0.32)] hover:-translate-y-0.5',
  secondary:
    'border border-[#037C9E] text-[#037C9E] bg-transparent hover:bg-[#037C9E] hover:text-white shadow-sm hover:-translate-y-0.5',
  outline:
    'border border-gray-300 text-gray-700 bg-transparent hover:border-[#037C9E] hover:text-[#037C9E] hover:-translate-y-0.5',
  ghost: 'text-gray-700 hover:bg-gray-100 hover:text-[#004771]',
  white: 'bg-white text-[#111827] hover:bg-gray-100 shadow-sm hover:-translate-y-0.5 border border-gray-200/80',
}

const sizeStyles = {
  sm: 'px-3.5 py-1.5 text-xs font-medium',
  md: 'px-5 py-2.5 text-sm font-semibold',
  lg: 'px-7 py-3.5 text-base font-semibold',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  style,
  onClick,
  type = 'button',
  disabled,
  openInNewTab,
}: ButtonProps) {
  const styles = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#05A7D4] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (href) {
    return (
      <Link
        href={href}
        className={styles}
        style={style}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={styles} style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
