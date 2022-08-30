export interface Address {
  tekst: string;
  adresse: {
    id: string;
    status: number;
    darstatus: number;
    vejkode: string;
    vejnavn: string;
    adresseringsvejnavn: string;
    husnr: string;
    etage: string;
    dør: string;
    supplerendebynavn: string;
    postnr: string;
    postnrnavn: string;
    stormodtagerpostnr: string;
    stormodtagerpostnrnavn: string;
    kommunekode: string;
    adgangsadresseid: string;
    x: number;
    y: number;
    href: string;
  };
}
