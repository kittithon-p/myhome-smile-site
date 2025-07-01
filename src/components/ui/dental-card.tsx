
import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const dentalCardVariants = cva(
  "rounded-lg border bg-card text-card-foreground transition-all duration-200",
  {
    variants: {
      variant: {
        default: "shadow-sm hover:shadow-md",
        elevated: "shadow-md hover:shadow-lg",
        floating: "shadow-lg hover:shadow-xl",
        glass: "bg-white/10 backdrop-blur-sm border-white/20",
        accent: "bg-gradient-to-br from-white to-dental-accent/30",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
      radius: {
        default: "rounded-lg",
        md: "rounded-xl",
        lg: "rounded-2xl",
        xl: "rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
      radius: "default",
    },
  }
)

export interface DentalCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dentalCardVariants> {}

const DentalCard = React.forwardRef<HTMLDivElement, DentalCardProps>(
  ({ className, variant, padding, radius, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(dentalCardVariants({ variant, padding, radius, className }))}
      {...props}
    />
  )
)
DentalCard.displayName = "DentalCard"

const DentalCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
))
DentalCardHeader.displayName = "DentalCardHeader"

const DentalCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-dental-primary",
      className
    )}
    {...props}
  />
))
DentalCardTitle.displayName = "DentalCardTitle"

const DentalCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-body text-dental-light", className)}
    {...props}
  />
))
DentalCardDescription.displayName = "DentalCardDescription"

const DentalCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-4", className)} {...props} />
))
DentalCardContent.displayName = "DentalCardContent"

const DentalCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
))
DentalCardFooter.displayName = "DentalCardFooter"

export { 
  DentalCard, 
  DentalCardHeader, 
  DentalCardFooter, 
  DentalCardTitle, 
  DentalCardDescription, 
  DentalCardContent 
}
