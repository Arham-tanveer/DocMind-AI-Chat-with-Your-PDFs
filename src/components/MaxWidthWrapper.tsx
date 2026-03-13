import { cn } from "../lib/utils";

// shift + alt + O to get rid of unused imports 
const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
  return (
    <div className= {cn('mx-auto w-full max-w-7xl px-2.5 md:px-20', className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper