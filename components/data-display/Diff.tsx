import { cn } from "../utils"
import type { Child, BasicProps } from "../types"

type DiffProps = BasicProps & {
  children: [Child, Child]
}

export const Diff = ({ children, className, ...props }: DiffProps) =>
  <div className={cn("diff", className)} {...props}>
    <div className="diff-item-1">
      {children[0]}
    </div>
    <div className="diff-item-2">
      {children[1]}
    </div>
    <div className="diff-resizer"></div>
  </div>