export const chartConfig = {
  axis: {
    style: {
      fontSize: '12px',
      fontFamily: 'inherit',
      color: 'hsl(var(--muted-foreground))'
    },
    stroke: {
      color: 'hsl(var(--border))'
    },
    grid: {
      color: 'hsl(var(--border))',
      opacity: 0.2
    }
  },
  tooltip: {
    content: {
      background: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      boxShadow: 'hsl(var(--border)) 0px 1px 3px 0px',
      borderRadius: '8px',
      padding: '8px 12px'
    },
    label: {
      color: 'hsl(var(--foreground))'
    }
  }
}