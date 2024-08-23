import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import Copy from "./Copy";
import { Progress } from "@/components/ui/progress";

const BankCard2 = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-row">
      <Link
        href={`/transaction-history/?id=${account.appwriteItemId}`}
        className="bank-card"
      >
        <div className="bank-card_content_2">
          <div className="flex flex-row h-full">
            <div className="flex flex-col justify-between">
              <div className="">
                <h1 className="text-16 font-semibold text-white mr-15">
                  {account.name}
                </h1>
                <Image
                  src="/icons/lines.png"
                  width={345}
                  height={100}
                  alt="lines"
                  className="absolute top-8 left-0"
                />
              </div>
              <div className="">
                <article className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h1 className="text-12 font-normal text-white">
                      {userName}
                    </h1>
                    <h2 className="text-12 font-semibold text-white">
                      ●● / ●●
                    </h2>
                  </div>
                  <p className="text-14 font-semibold tracking-[1.1px] text-white">
                    ●●●● ●●●● ●●●●{" "}
                    <span className="text-16">
                      {account.mask ? account.mask : "1234"}
                    </span>
                  </p>
                </article>
              </div>
            </div>

            <div className="absolute right-0 top-3 min-h-100">
              <Copy title={account?.shareableId} />
            </div>
            <div className="absolute right-4 bottom-3">
              <Image
                src="/icons/mastercard.svg"
                width={50}
                height={37}
                alt="mastercard"
                className="ml-5"
              />
            </div>
          </div>
        </div>
      </Link>

      {showBalance && <Copy title={account?.shareableId} />}
    </div>
  );
};

export default BankCard2;
