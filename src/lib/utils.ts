import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function componentName(MetaUrl: string) {
  const myNameArray = MetaUrl.split('/')
  const preName = myNameArray[myNameArray.length - 1]
  const name = `<${preName.split('.')[0]} />`
  return name
}
