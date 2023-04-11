import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useState } from 'react';

interface ButtonProps {
  title: string;
  firstLetter: string;
  value: string
}

export function ButtonWeeks({ title, firstLetter, value}: ButtonProps) {
  const [isSelected, setIsSelected] = useState<String[]>([])

  return (
    <ToggleGroup.Root 
      type='multiple'
      onValueChange={setIsSelected}
    >
      <ToggleGroup.Item
        value={value}
        title={title}
        className={`w-8 h-8 rounded ${isSelected.includes(value) ? 'bg-violet-500' : 'bg-zinc-900' }`}
    >
      { firstLetter }
    </ToggleGroup.Item>
    </ToggleGroup.Root>
    
  )
}