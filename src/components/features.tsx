import { ArrowDownToLine, CheckCircle, Laptop, Zap, Shield, Settings, Code, Layers } from 'lucide-react'

const features = [
  {
    name: "Schema-based API",
    description: "Powerful chainable API for complex validations with intuitive syntax.",
    icon: Code,
  },
  {
    name: "Class-based Validation",
    description: "User-friendly class implementations with chainable methods for all validation types.",
    icon: Layers,
  },
  {
    name: "Legacy Function API",
    description: "Simple function-based validations for quick implementation.",
    icon: CheckCircle,
  },
  {
    name: "Comprehensive",
    description: "Extensive validation options for strings, numbers, objects, arrays, and more.",
    icon: Shield,
  },
  {
    name: "Customizable",
    description: "Highly customizable validation rules to fit your specific needs.",
    icon: Settings,
  },
  {
    name: "Cross Platform",
    description: "Works seamlessly in both Browser and Node.js environments.",
    icon: Laptop,
  },
]

export function Features() {
  return (
    <div className="py-24 sm:py-32 relative" id="features">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-[300px] w-[300px] rounded-full bg-purple-200 opacity-20 blur-3xl dark:bg-purple-900 dark:opacity-10"></div>
        <div className="absolute right-0 bottom-1/4 h-[250px] w-[250px] rounded-full bg-blue-200 opacity-20 blur-3xl dark:bg-blue-900 dark:opacity-10"></div>
        <div className="absolute right-1/4 top-1/3 h-[150px] w-[150px] rounded-full bg-primary/10 opacity-20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary bg-primary/10 dark:bg-primary/5 px-4 py-1 rounded-full inline-block">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Everything you need for form validation
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Validis provides a comprehensive set of validation tools while maintaining simplicity and performance.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="feature-card flex flex-col rounded-xl border bg-card p-6 shadow-sm dark:border-gray-800 dark:shadow-none hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-card-foreground">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/5 shadow-inner">
                    <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {feature.name}
                  </span>
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

