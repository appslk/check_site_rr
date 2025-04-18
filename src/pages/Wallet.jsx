import { BsThreeDotsVertical } from "react-icons/bs";

import PageTitle from "../components/dashboard/PageTitle";
import DashboardButton from "../components/ui/buttons/DashboardButton";
import {
  DropdownRoot,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
} from "../components/ui/Dropdown";

const data = [
  { name: "Rabbit36", id: "P*458435898324934_", primary: true },
  { name: "Rabbit37", id: "Z*458435898321934_", primary: false },
  { name: "Rabbit37", id: "C*458535898321954_", primary: false },
];

const WalletPage = () => {
  return (
    <div className="h-full w-full">
      <PageTitle title="Linked Wallet" />

      <div className="mt-[1.5em] rounded-[0.3em] border border-white/30 bg-white/5 p-[2em]">
        {/* Title */}
        <h2 className="mb-[0.2em] text-center text-[1.8em] font-semibold">
          Linked Wallet
        </h2>

        {/* Wallet desc */}
        <p className="mx-auto pb-[1.5em] text-justify font-medium xl:max-w-[80ch] xl:text-center">
          Here you can link multiple wallet to the same account. This allows you
          to see all your rabbits, even if they&apos;re spread across multiple
          wallets, and it&apos;s especially useful when using cold storage.
        </p>

        {/* Link wallet */}
        <div className="mb-[1em] flex justify-center">
          <DropdownRoot>
            <DropdownTrigger asChild>
              <DashboardButton>Link Wallet</DashboardButton>
            </DropdownTrigger>

            <DropdownContent>
              <DropdownLabel>Select Provider</DropdownLabel>
              <DropdownItem>METAMASK</DropdownItem>
              <DropdownItem>WALLETCONNECT</DropdownItem>
              <DropdownItem>CLOSE</DropdownItem>
            </DropdownContent>
          </DropdownRoot>
        </div>

        {/* Wallet list */}
        {data.map(({ name, id, primary }) => (
          <div
            key={id}
            className="relative mt-[1em] flex flex-col justify-between gap-[1em] rounded-[0.3em] bg-white/40 px-[1em] py-[1em] text-black sm:flex-row sm:px-[2em]"
          >
            <div className="leading-none">
              <h5 className="mb-[0.1em] text-[1.2em] font-semibold">{name}</h5>
              <p className="font-medium">{id}</p>
            </div>

            <div className="flex items-center gap-[0.2em]">
              {primary && (
                <p className="rounded-[0.25em] bg-[#35FF8A] px-[1em] py-[0.5em] font-semibold">
                  Primary
                </p>
              )}
              <BsThreeDotsVertical className="absolute top-[0.5em] right-0 cursor-pointer text-[2em] transition-colors hover:text-[#35FF8A] focus:text-[#35FF8A] sm:static" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletPage;
