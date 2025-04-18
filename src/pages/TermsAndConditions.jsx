import { Link, ScrollRestoration } from "react-router";

import GradientButton from "../components/ui/buttons/GradientButton";
import Footer from "../components/homepage/Footer";

import brickBg from "../assets/images/brick-bg.jpg";

const TermsAndConditionsPage = () => {
  return (
    <>
      <ScrollRestoration />
      <header className="homepage section-padding container mx-auto flex items-center justify-end bg-[#0A0A0A] py-[1em] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]">
        <Link to="/home">
          <GradientButton className="uppercase">Back to home</GradientButton>
        </Link>
      </header>
      <main
        className="homepage font-montserrat relative overflow-x-hidden bg-[#0A0A0A] bg-fixed text-[12px] text-white sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]"
        style={{ backgroundImage: `url(${brickBg})` }}
      >
        {/* Black tint */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="section-padding relative container mx-auto py-10">
          <h1 className="mb-8 text-4xl font-bold">Terms and Conditions</h1>

          <section className="mb-6">
            <p className="mb-6">
              NFT Ownership, IP Sharing, Non-Securities, IP Utilization, Resale
              Value, and Licensing & Usage Disclosure
            </p>
            <p>
              By purchasing Non-Fungible Tokens (NFTs) through Robotic Rabbit
              Syndicate (“the Company”), the purchaser (“you”) understands and
              acknowledges the following:
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">
              Non-Securities Nature
            </h2>
            <p>
              The NFTs offered by Robotic Rabbit Syndicate are NOT securities.
              They do not represent shares, equity, or any form of investment in
              the Company. They are digital assets that signify decentralized
              intellectual property (IP) ownership rights related to specific
              digital content.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Ownership of NFTs</h2>
            <p>
              The NFTs confer rights to specific digital content, but not any
              rights or interests in physical assets or tangible property.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">
              Shared IP Rights with Company Control
            </h2>
            <p>
              Upon purchasing NFTs through Robotic Rabbit Syndicate, you obtain
              a shared decentralized IP right over the specific content
              associated with the NFT. However, the Company retains the final
              authority and discretion over how this IP can be utilized,
              licensed, or modified. Any utilization of the IP by the purchaser
              that is not explicitly authorized by the Company may result in
              revocation of the associated rights or other consequences.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Licensing & Usage</h2>
            <p>
              The rights associated with the NFTs are limited to personal,
              non-commercial use. Any commercial utilization of the associated
              digital content is strictly prohibited unless explicit permission
              is granted by the Company.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">
              No Guarantee of Resale Value
            </h2>
            <p>
              The Company makes no claims, promises, or guarantees about the
              potential for NFTs purchased to be resold at a higher value in the
              future. No representation is made about the potential
              profitability of any resale, and the purchaser should not base
              their purchase on expectations of profit in the secondary market.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">No Equity Interest</h2>
            <p>
              No aspect of the NFTs represents an equity, stake, share, or
              ownership interest in Robotic Rabbit Syndicate, its subsidiaries,
              or any associated entities.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">
              No Investment Promotion
            </h2>
            <p>
              The Company does not promote or endorse the purchase of its NFTs
              as an investment, financial opportunity, or anything akin to
              securities in the Company&apos;s future business or operations.
              Notably, in light of recent SEC actions, including a case
              involving a web series called “Stoner Cats” where the SEC alleged
              unregistered securities offerings based on expectations of resale
              profitability, Robotic Rabbit Syndicate expressly distances itself
              from any such claims or promises.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">
              Avoidance of Misunderstanding
            </h2>
            <p className="mb-12">
              The Company explicitly clarifies that its NFTs are not securities,
              nor should they be perceived or interpreted as such. Any
              statements made by the Company or its representatives are purely
              informational and not indicative of any investment promise or
              potential.
            </p>
          </section>

          <section>
            <p className="mb-6">
              By continuing with the purchase, you signify your understanding,
              agreement, and acceptance of the above terms and conditions. If
              you disagree with any part of this disclosure, you are advised not
              to proceed with the purchase.
            </p>

            <p className="italic">
              This disclosure aims to clarify the nature and limitations of the
              rights conferred by purchasing an NFT through Robotic Rabbit
              Syndicate and to ensure compliance with all relevant laws and
              regulations.
            </p>
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default TermsAndConditionsPage;
