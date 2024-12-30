import { ArrowDownToLine, CheckCircle, Laptop, Zap, Shield, Settings } from 'lucide-react'

const features = [
  {
    name: "Zero Dependencies",
    description: "No external dependencies means smaller bundle size and better performance.",
    icon: ArrowDownToLine,
  },
  {
    name: "Lightweight",
    description: "Blazing fast performance with minimal impact on your application.",
    icon: Zap,
  },
  {
    name: "Type Safety",
    description: "Detailed error messages and type-safe validation results.",
    icon: Shield,
  },
  {
    name: "Customizable",
    description: "Highly customizable validation rules to fit your needs.",
    icon: Settings,
  },
  {
    name: "Cross Platform",
    description: "Works seamlessly in both Browser and Node.js environments.",
    icon: Laptop,
  },
  {
    name: "Easy to Use",
    description: "Simple API with comprehensive documentation for quick integration.",
    icon: CheckCircle,
  },
]

export function Features() {
  return (
    <div className="py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for form validation
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Validis provides a comprehensive set of validation tools while maintaining simplicity and performance.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

