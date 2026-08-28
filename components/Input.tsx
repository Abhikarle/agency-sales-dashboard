import React,{forwardRef,InputHTMLAttributes} from 'react';
type InputProps=InputHTMLAttributes<HTMLInputElement>;
export const Input=forwardRef<HTMLInputElement,InputProps>(({className,...props},ref)=><input ref={ref} className={`input ${className||''}`} {...props}/>); Input.displayName='Input';
