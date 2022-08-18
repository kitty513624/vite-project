import { RawS, RawN } from './index';

export interface TableData {
  cancellationFee: RawS;
  closedDateNextMonth: RawS;
  closedDateThisMonth: RawS;
  fq_change: RawN;
  fq_change_per: RawS;
  fq_price: RawN;
  fund_closed_time: RawS;
  fund_sec_code: RawS;
  heart: boolean;
  jr_isa_h_ritsu1: RawS;
  jr_isa_h_ritsu2: RawS;
  jr_isa_h_ritsu3: RawS;
  jr_isa_h_upper1: RawS;
  jr_isa_h_upper2: RawS;
  jrnisa_sell_ritsu1: RawS;
  jrnisa_sell_ritsu2: RawS;
  jrnisa_sell_ritsu3: RawS;
  jrnisa_sell_upper1: RawS;
  jrnisa_sell_upper2: RawS;
  jrnisa_sell_upper3: RawS;
  net_assets: RawS;
  sec_name: RawS;
  sell_ritsu1: RawN;
  sell_ritsu2: RawN;
  sell_ritsu3: RawS;
  sell_upper1: RawS;
  sell_upper2: RawS;
  sell_upper3: RawS;
  star_number: number;
  stop_order_flag: RawS;
  switch_id: RawS;
  trade_status: RawS;
  trustAssetsRetainedAmounts: RawS;
  trustFees: RawS;
  yugu_ritu_bunbo: RawN;
  yugu_ritu_bunsi: RawN;
}
