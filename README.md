# Routes Table

## Description

The application displays an IPv4 routes table with the ability to sort by columns: "Destination Address", "Gateway", and "Interface".  
IP address sorting is performed by numeric value, not lexicographically.

## Features

- View a list of IPv4 routes.
- Sort by any column (address, gateway, interface).
- Correct numeric sorting for IP addresses and gateways.

## Technologies Used

- Angular
- TypeScript
- RxJS 

## How IP Sorting Works

An IP address is split into 4 parts and converted into a single number:
```typescript
ipToNumber(ip: string): number {
  const [ipPart] = ip.split('/');
  return ipPart.split('.').reduce((acc, part) => (acc << 8) + Number(part), 0);
}
```
This allows for proper numeric comparison and sorting of IP addresses.

## How to Run

1. Install dependencies:
   ```
   npm install
   ```
2. Start the app:
   ```
   ng serve
   ```
3. Open [http://localhost:4200](http://localhost:4200) in your browser.
