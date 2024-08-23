import BankCard from "@/components/BankCard";
import BankCard2 from "@/components/BankCard2";
import HeaderBox from "@/components/HeaderBox";
import { Progress } from "@/components/ui/progress";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });
  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Banks Accounts"
          subtext="Effortlessly manage your banking activities"
        />
        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {accounts &&
              accounts.data.map((a: Account) => (
                <BankCard2
                  key={accounts.id}
                  account={a}
                  userName={`${loggedIn?.firstName} ${loggedIn?.lastName}`}
                  type="Bank"
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
