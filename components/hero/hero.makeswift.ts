import { runtime } from '~/lib/makeswift/runtime';
import { Hero } from '.';
import { Image, List, Slot, Style } from '@makeswift/runtime/controls';

runtime.registerComponent(Hero, {
  type: 'Hero',
  label: 'Hero',
  props: {
    className: Style(),
    slides: List({ type: Slot() }),
    bgImage: Image(),
  },
});
