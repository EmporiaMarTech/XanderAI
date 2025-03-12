export interface ChartData {
  name: string
  [key: string]: string | number
}

export interface ChartProps {
  data: ChartData[]
  className?: string
}