import { runtime } from '~/lib/makeswift/runtime';
import { Hero } from '.';
import { List, Slot, Style } from '@makeswift/runtime/controls';

runtime.registerComponent(Hero, {
  type: 'Hero',
  label: 'Hero',
  props: {
    className: Style(),
    slides: List({ type: Slot() }),
  },
});
