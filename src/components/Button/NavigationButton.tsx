import React from "react";
import { Link } from "react-router-dom";
import './NavigationButton.css'

interface NavigationButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;  //  пропс className
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ to, children, className }) => {
  return <Link className={className ? className : "button"} to={to}>{children}</Link>;
};

export default NavigationButton;
