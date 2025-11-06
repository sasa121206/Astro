
import type { ZodiacSign } from './types';
import {
  AriesIcon,
  TaurusIcon,
  GeminiIcon,
  CancerIcon,
  LeoIcon,
  VirgoIcon,
  LibraIcon,
  ScorpioIcon,
  SagittariusIcon,
  CapricornIcon,
  AquariusIcon,
  PiscesIcon,
} from './components/icons/ZodiacIcons';

export const zodiacSigns: ZodiacSign[] = [
  { name: 'Áries', icon: AriesIcon },
  { name: 'Touro', icon: TaurusIcon },
  { name: 'Gêmeos', icon: GeminiIcon },
  { name: 'Câncer', icon: CancerIcon },
  { name: 'Leão', icon: LeoIcon },
  { name: 'Virgem', icon: VirgoIcon },
  { name: 'Libra', icon: LibraIcon },
  { name: 'Escorpião', icon: ScorpioIcon },
  { name: 'Sagitário', icon: SagittariusIcon },
  { name: 'Capricórnio', icon: CapricornIcon },
  { name: 'Aquário', icon: AquariusIcon },
  { name: 'Peixes', icon: PiscesIcon },
];
