import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{variant?:'primary'|'outline'|'ghost'|'secondary'|'destructive'|'link';size?:'sm'|'md'|'lg'|'icon'|'icon-sm'|'icon-md'|'icon-lg';}
export const Button=React.forwardRef<HTMLButtonElement,ButtonProps>(({children,variant='primary',size='md',className,disabled,type='button',...props},ref)=><button ref={ref} type={type} className={`button ${variant} ${size} ${className||''}`} disabled={disabled} {...props}>{children}</button>); Button.displayName='Button';
