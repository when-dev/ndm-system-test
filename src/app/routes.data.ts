export interface Route {
  uuid: string;
  address: string;
  mask: string;
  gateway: string;
  interface: string;
}

export const ROUTES: Route[] = [
  {
    uuid: '1',
    address: '0.0.0.0',
    mask: '0.0.0.0',
    gateway: '193.0.174.1',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: '2',
    address: '10.13.0.0/24',
    mask: '255.255.255.0',
    gateway: '0.0.0.0',
    interface: 'Гостевая сеть',
  },
  {
    uuid: '3',
    address: '192.168.1.0/24',
    mask: '255.255.255.0',
    gateway: '0.0.0.0',
    interface: 'Домашняя сеть',
  },
  {
    uuid: '4',
    address: '193.0.174.0/24',
    mask: '255.255.255.0',
    gateway: '0.0.0.0',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: '5',
    address: '193.0.175.0/25',
    mask: '255.255.255.128',
    gateway: '193.0.174.10',
    interface: 'Подключение Ethernet',
  },
  {
    uuid: '6',
    address: '193.0.175.22/32',
    mask: '255.255.255.255',
    gateway: '193.0.161.1',
    interface: 'Подключение Ethernet',
  },
];
