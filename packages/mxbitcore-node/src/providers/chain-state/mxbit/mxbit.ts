import { BTCStateProvider } from '../btc/btc';
import { CSP } from '../../../types/namespaces/ChainStateProvider';

export class MXBITStateProvider extends BTCStateProvider {
  constructor(chain: string = 'MXBIT') {
    super(chain);
  }

  async getFee(params: CSP.GetEstimateSmartFeeParams) {
    const { chain, network, target } = params;
    return { feerate: await this.getRPC(chain, network).getEstimateFee(Number(target)) };
  }
}
