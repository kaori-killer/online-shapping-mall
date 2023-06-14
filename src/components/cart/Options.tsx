import { OrderOption } from '../../types';

interface OptionsProps{
    options: OrderOption[];
}

export default function Options({ options } : OptionsProps) {
  if (!options.length) {
    return null;
  }

  const text = options
    .map((option) => `${option.name}: ${option.item.name}`)
    .join(', ');

  return (
    <div>
      (
      {text}
      )
    </div>
  );
}
