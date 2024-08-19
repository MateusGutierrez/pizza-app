import { Pizza } from '@/providers/pizzas/interface';
import Fuse from 'fuse.js';
import { isEmpty, map } from 'lodash';


const FUZZY_SEARCH_OPTIONS: Fuse.IFuseOptions<Pizza> = {
  includeScore: true,
  threshold: 0.5,
  keys: [
    'size',
    'flavor',
    'border_flavor',
    'drinks.drink',
  ],
};

// eslint-disable-next-line import/prefer-default-export
export function performFuzzySearch(
  pizzas: Array<Pizza>,
  fullText: string | null | undefined,
): Promise<Array<Pizza>> {
  return new Promise(resolve => {
    if (isEmpty(fullText)) {
      resolve(pizzas);
      return;
    }

    const fuse = new Fuse(pizzas, FUZZY_SEARCH_OPTIONS);
    console.log(fuse, "fuse")
    setTimeout(() => {
      const results = fuse.search(fullText as string);
      resolve(map(results, 'item'));
    }, 0);
  });
}
