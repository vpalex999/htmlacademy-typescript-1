import { AccountDailyReducer, GeneralLedgerEntry } from "./i-faces";
import ledgelList from "./ledger.json";

const accountDailyReducer: AccountDailyReducer = (accountId, ledger) => {
  return [];
};

const result = accountDailyReducer("245.0001 project", ledgelList);

console.log(result);
