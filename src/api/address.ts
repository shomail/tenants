import { Address } from 'types';

const URL = 'https://api.dataforsyningen.dk/adresser/autocomplete?per_side=10&fuzzy&q=';

export async function fetchAddresses(val: string): Promise<Address[]> {
  return await fetch(URL.concat(val))
    .then((r) => r.json())
    .catch((e) => {
      console.error(e);
      return [];
    });
}
