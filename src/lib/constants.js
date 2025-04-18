import { FaList } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { BiSolidJoystick } from "react-icons/bi";

// Collection images
import nftCollection from "../assets/images/homepage/collection/nft-collection.png";
import armoryCollection from "../assets/images/homepage/collection/armory-collection.png";

// Roadmap images
import rd from "../assets/images/homepage/roadmap/r&d.gif";
import foundation from "../assets/images/homepage/roadmap/foundation.gif";
import brick from "../assets/images/homepage/roadmap/brick.gif";
import monsters from "../assets/images/homepage/roadmap/monsters.gif";
import roboticRabbitSeason from "../assets/images/homepage/roadmap/robotic-rabbit-season.gif";
import socialMedia from "../assets/images/homepage/roadmap/light-up-social-media.gif";
import legendaryCast from "../assets/images/homepage/roadmap/legendary-cast.gif";
import moreLegendaryCollections from "../assets/images/homepage/roadmap/more-legendary-collections.gif";
import toTheMoon from "../assets/images/homepage/roadmap/to-the-moon.gif";

// Footer link images
import openseaPng from "../assets/images/homepage/footer/opensea.png";
import xPng from "../assets/images/homepage/footer/x.png";
import discordPng from "../assets/images/homepage/footer/discord.png";
import amazonPng from "../assets/images/homepage/footer/amazon.png";

// Collection data
export const collections = [
  {
    id: "C001",
    image: nftCollection,
    title: "Syndicate",
    desc: "A syndicate of 3,333 highly skilled and technologically advanced Robotic Rabbits, some with powers, fighting crime and protecting their world from evil villains. This collection includes a variety of Legendary Character NFTs including Legendary Heroes, Villains, Plushies, Origins, Cast and Customs. On Ethereum, Layer 1.",
    to: "https://opensea.io/collection/roboticrabbits",
  },
  {
    id: "C002",
    image: armoryCollection,
    title: "Armory",
    desc: "An armory of Weapons, Gear, Powers, Drones and CarroTech that belong to the Robotic Rabbit Syndicate. Coming soon to, Ethereum's Layer 2, BASE.",
    to: null,
  },
];

// Roadmap data
export const roadmap = [
  {
    id: "rm001",
    image: rd,
    duration: "Q1 - Q2, 2022",
    status: "done",
    title: "R & D",
    desc: "Months of Blockchain, Character, Traits and Lore Research/Development.",
  },
  {
    id: "rm002",
    image: foundation,
    duration: "Q3 - Q4, 2022",
    status: "done",
    title: "Laying the foundation",
    desc: "Beginning the creation of the Art, Website and Lore + More R&D.",
  },
  {
    id: "rm003",
    image: brick,
    duration: "2023",
    status: "done",
    title: "Brick by Brick",
    desc: "Foundational Community Building. Website and BlockChain Engineering + More R&D.",
  },
  {
    id: "rm004",
    image: monsters,
    duration: "Q4, 2023",
    status: "in-progress",
    title: "Free the Villains",
    desc: "Creation and Distribution, via Rewards, of the Legendary Villain Collection.",
  },
  {
    id: "rm005",
    image: roboticRabbitSeason,
    duration: "Q1, 2024 - Present",
    status: "in-progress",
    title: "Robotic Rabbit Season",
    desc: "Minting 3.333 NFTs onto the blockchain.",
  },
  {
    id: "rm006",
    image: socialMedia,
    duration: "Q1, 2024",
    status: "done",
    title: "Light up Social Media",
    desc: "Onboard Notable WEB3 Social Media Heavyweights and Founders.",
  },
  {
    id: "rm007",
    image: legendaryCast,
    duration: "Q2, 2024",
    status: "pending",
    title: "Legendary Cast",
    desc: "Creation and Distribution, via Rewards, of the Legendary Cast Collection.",
  },
  {
    id: "rm008",
    image: moreLegendaryCollections,
    duration: "Q1 2024 to Q2 2025",
    status: "pending",
    title: "More Legendary Collections",
    desc: "Creation and Distribution, via Rewards. All Legendary Collections are created within the Syndicate Collection, thus, creating a creative deflationary process.",
  },
  {
    id: "rm009",
    image: toTheMoon,
    duration: "2025 and Beyond",
    status: "pending",
    title: "To the Moon",
    desc: "Phase 2 Roadmap Initiation.",
  },
];

// Team data
export const team = [
  {
    id: "member001",
    name: "Mehdi - The Visionary Heartbeat",
    role: "Founder, CEO, Creative Director, Sole Investor, & Head Designer",
    desc: "As the foundation stone of our Syndicate, Mehdi infuses life into our mission. Every pixel dances with his vision, every design narrates his story. Dive into the world he envisions, and witness the magic first-hand",
  },
  {
    id: "member002",
    name: "Lucian - The Palette Magician",
    role: "Artist, Illustrator and Designer",
    desc: "Where words fail, Lucian’s art speaks. Each artwork is a universe in itself, echoing the emotions, tales, and dreams of the Robotic Rabbit Syndicate.",
  },

  {
    id: "member003",
    name: "Can - The Anime Alchemist",
    role: "Anime Animator",
    desc: "To Can, anime is more than a medium - it’s an essence. Merging reality with fantasy, his animations embody the spirit of our Syndicate with every frame.",
  },
  {
    id: "member004",
    name: "Ja - The Digital Dynamo",
    role: "Web3 & Website Engineer Guru",
    desc: "In the world of 1s and 0s, Ja crafts masterpieces. Merging the realms of web3 and classic web design, he ensures our digital presence is not just functional but also transcendent.",
  },
];

// FAQ data
export const faq = [
  {
    id: "faq001",
    question: "What is the Robotic Rabbit Syndicate?",
    answer:
      "A Web3 entertainment company, we unite robotic humanoid animals in a digital world. Our mission is to transform high-quality IP into an immersive NFT universe.",
  },
  {
    id: "faq002",
    question: "How many characters are in the brand?",
    answer:
      "We feature 3,333 randomly generated Robotic Rabbits with 15 1/1 Legendary Heros and multiple 20 piece Legendary 1/1 collections. Only Robotic Rabbit holders can access follow-up collections. Community will decide if other 3,333 piece generated collections will be created.",
  },
  {
    id: "faq003",
    question: "What does the brand include?",
    answer:
      "We offer an anime series, toys, and merchandise, games on unity engine and decentralized IP ownership. Future plans include games on Unreal Engine and potential cinematic ventures.",
  },
  {
    id: "faq004",
    question: "What rewards are available for community members?",
    answer:
      "Enjoy engaging storylines, follow up collections, an exclusive villain series, and shared IP Ownership rights.",
  },
  {
    id: "faq005",
    question: "How is the art quality of the Robotic Rabbits?",
    answer:
      "Our 4K resolution art boasts unique colors, primed for captivating merchandise, toys, and animation.",
  },
  {
    id: "faq006",
    question: "How do I keep updated on the brand's progress?",
    answer:
      "Stay connected with our community updates via Discord. We value transparency and communication.",
  },
  {
    id: "faq007",
    question: "What are the minting prices and conditions?",
    answer:
      "15, at a time, can be minted via the Standard Mint mode at .019 ETH.\n\n3 can be minted via Verify-To-Mint mode at 0.018 ETH each.\n\n1 can be minted via Play-To-Mint (Easy) mode at a 20% discount of 0.0144 ETH.\n\n1 can be minted via Play-To-Mint (Hard) mode at a 40% discount of 0.0108 ETH.\n\nMint cost drops with game difficulty completion. ",
  },
  {
    id: "faq008",
    question: "What do VIP members gain?",
    answer:
      "VIPs access special chats, VIP exclusive giveaways, and can claim a VIP weapon NFT. Holding 10+ Robotic Rabbits along with the VIP Weapon brings additional “Whale” benefits.",
  },
  {
    id: "faq009",
    question: "What's “Play-to-Mint”?",
    answer:
      "Engage in our universe to earn minting discounts and special NFTs. This, combined with “Verify-to-Mint”, ensures fairness and enhanced community engagement.",
  },
];

// Footer links
export const footerLinks = [
  {
    image: openseaPng,
    alt: "opensea",
    to: "https://opensea.io/collection/roboticrabbits/overview",
  },
  {
    image: xPng,
    alt: "x",
    to: "https://twitter.com/roboticrabbits_",
  },
  {
    image: discordPng,
    alt: "discord",
    to: "https://discord.gg/rrs",
  },
  {
    image: amazonPng,
    alt: "amazon",
    to: "https://a.co/d/aM0BRl7",
  },
];

// Dashboard sidebar links
export const links = [
  { path: "", Icon: FaList, label: "Inventory" },
  { path: "workshop", Icon: BsTools, label: "Workshop" },
  { path: "mint", Icon: BiSolidJoystick, label: "Play to Mint" },
];
