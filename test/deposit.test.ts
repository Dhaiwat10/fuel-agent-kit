import { test } from 'vitest';
import { FuelAgent } from '../src/FuelAgent.js';
import { supplyCollateral } from '../src/tools.js';

test('supplyCollateral', async () => {
  const tx = await supplyCollateral({
    amount: 1,
    symbol: 'USDT',
  });
  console.log("TX", tx);
});
