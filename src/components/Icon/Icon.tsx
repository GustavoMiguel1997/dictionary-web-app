import icons from './icons';

interface Props {
  name: string;
}

function Icon({ name }: Props) {
  const iconName = name as keyof typeof Icon;

  return <img src={icons[iconName]} />;
}

export default Icon;
