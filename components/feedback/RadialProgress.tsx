import { cn } from "../utils";
import type { BasicProps } from "../types";

type RadialProgressProps = BasicProps & {
  value: number;
  size?: string;
  thickness?: string;
}

export const RadialProgress = ({ value, size, thickness, className, ...props }: RadialProgressProps) =>
  <div 
    className={cn("radial-progress", className)} 
    style={{ "--value": String(value), "--size": size, "--thickness": thickness }} 
    role="progressbar" {...props}>
    {value}%
  </div>
