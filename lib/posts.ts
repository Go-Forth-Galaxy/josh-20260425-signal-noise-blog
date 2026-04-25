export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  gradient: string;
  accent: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "quiet-revolution-on-device-ai",
    title: "The Quiet Revolution of On-Device AI",
    subtitle:
      "Why the most interesting AI of 2026 is the kind that never touches a data center.",
    category: "Artificial Intelligence",
    author: "Mira Okafor",
    authorRole: "Senior Editor",
    date: "April 22, 2026",
    readTime: "8 min read",
    gradient: "from-indigo-600 via-violet-600 to-fuchsia-500",
    accent: "bg-violet-500",
    excerpt:
      "Cloud AI grabbed the headlines. But the models humming inside your phone, your laptop, and your earbuds are quietly rewriting what intelligent software actually feels like.",
    body: [
      "For the last three years, the AI conversation has been dominated by buildings — server farms the size of small cities, GPU clusters humming at the bottom of cooling reservoirs, billion-dollar training runs. It made for great headlines. It also made AI feel like a utility you rent, not a tool you own.",
      "Something quieter has been happening on the other end of the network. Apple shipped a 3-billion-parameter language model directly onto the iPhone. Google's Gemini Nano is now baked into Pixel devices. Microsoft's Phi family runs comfortably inside a browser tab. The collective effect is a generation of intelligent software that doesn't need a network round-trip to think.",
      "The implications are subtle at first and then sweeping. Latency drops from hundreds of milliseconds to single digits. Battery cost is real but manageable. Privacy stops being a marketing claim and becomes a default — your data simply never leaves the device. And the unit economics flip: instead of paying per inference, you pay once for the silicon and use the model forever.",
      "What changes when AI is free at the point of use? The same thing that changed when storage and bandwidth became free: developers stop rationing it. We will see thousands of small, weird, deeply personal applications — a journaling tool that summarizes your week, a spreadsheet that knows your team's vocabulary, a code editor that reads your entire repository in context. None of them would survive at cloud-API prices. All of them will thrive on-device.",
      "The cloud will not disappear. Frontier reasoning still belongs in a data center, and probably always will. But the assumption that intelligent software equals network-dependent software is breaking. The next great wave of AI products will be ones you can use on a plane.",
    ],
  },
  {
    slug: "why-async-beats-meetings",
    title: "Why Async Beats Meetings",
    subtitle: "The case for fewer calendars and more long-form writing.",
    category: "Work",
    author: "Daniel Reyes",
    authorRole: "Contributing Writer",
    date: "April 18, 2026",
    readTime: "6 min read",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    accent: "bg-amber-500",
    excerpt:
      "The companies producing the best work in 2026 have something in common: they almost never meet. Here is what they do instead.",
    body: [
      "Walk into the average software company on a Tuesday and you will find smart, expensive people sitting in rectangles, talking. The calendar is the org chart now. The meeting is the work.",
      "Meanwhile, the teams shipping the most interesting products — Linear, Stripe, Anthropic, Arc, a long tail of indie studios — have built their cultures around the opposite premise. Default to writing. Default to async. Default to giving people the time and quiet to actually think.",
      "The mechanics matter. A well-written document forces the author to resolve their own confusion before broadcasting it. A meeting outsources that work to everyone else's attention. Multiply across a 200-person company and the difference compounds into something close to an order of magnitude in output.",
      "There is a temperature element too. Async work lets you participate from a place of calm. Synchronous calls create a low background hum of social anxiety — am I talking too much, am I talking too little, did I say something dumb in front of the VP? That hum costs cycles you could be spending on the actual problem.",
      "None of this means meetings are evil. They are the right tool for trust-building, for genuinely hard disagreements, for moments when a team needs to feel like a team. But those moments are rarer than your calendar suggests. Try blocking 70 percent of your week as 'no meetings' for a month. The work will follow.",
    ],
  },
  {
    slug: "hidden-cost-of-cheap-software",
    title: "The Hidden Cost of Cheap Software",
    subtitle:
      "Every shortcut you took in 2023 is on your roadmap in 2026. Here is the bill.",
    category: "Engineering",
    author: "Priya Bhattacharya",
    authorRole: "Engineering Columnist",
    date: "April 15, 2026",
    readTime: "9 min read",
    gradient: "from-slate-700 via-slate-600 to-teal-600",
    accent: "bg-teal-500",
    excerpt:
      "Technical debt is not a metaphor. It compounds, it has interest, and the bank always collects.",
    body: [
      "Software is the only product where the manufacturing cost is roughly zero and the maintenance cost is roughly infinite. We rarely talk about it that way. We should.",
      "Every shortcut a team takes — the duplicated module, the schema with no migration plan, the auth flow stitched together on a Friday — is a loan against future engineering hours. The interest rate depends on how central the shortcut is to the system. Sometimes it is one percent and you can ignore it forever. Sometimes it is thirty percent and it eats half your team in 18 months.",
      "The trouble is that no one sees the loan being taken out. There is no signature, no balance sheet, no quarterly statement. The CFO sees a feature shipped on time. The engineer who wrote the shortcut moves to a new project. The cost shows up two years later as 'velocity is slowing' and 'we need to rewrite this service.'",
      "Mature engineering teams treat tech debt as a real budget line. They reserve a fixed percentage of every sprint for paying it down — 15 to 25 percent is typical. They write postmortems on debt the way other teams write them on outages. They name the loan when they take it out, with a ticket and an owner.",
      "If you cannot do those things yet, start with the smallest version. Once a quarter, ask every engineer: what is the one thing in this codebase that scares you? Aggregate the list. Pick the top three. Fund them. The compounding goes the other way too.",
    ],
  },
  {
    slug: "designing-for-trust",
    title: "Designing for Trust in the Age of Generated Content",
    subtitle:
      "When anything can be faked, the products that win will be the ones that feel real.",
    category: "Design",
    author: "Hannah Liu",
    authorRole: "Design Editor",
    date: "April 11, 2026",
    readTime: "7 min read",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    accent: "bg-emerald-500",
    excerpt:
      "Generative AI broke the unspoken contract between what you see and what is true. Designers now have a new job: rebuild it.",
    body: [
      "For most of the web's history, an image was evidence. A screenshot was proof. A video was a record. That assumption — that pixels corresponded to something that actually happened — quietly underwrote nearly every interaction online.",
      "Generative models broke the assumption in about 18 months. The technology is amazing. The downstream effect on trust is going to take a decade to metabolize.",
      "Designers are now the front line of that work. Every product that surfaces user-generated content, every feed, every messaging app, every news reader, has to decide what its trust layer looks like. Provenance metadata. Cryptographic signatures. Source disclosure. Visible editorial process. None of these are exciting. All of them are going to be table stakes.",
      "The pattern that seems to be emerging is what you might call 'visible work.' Show how the sausage gets made. Show the source. Show the model that generated it, the prompt that created it, the human who reviewed it. The opacity that used to be a virtue — frictionless, magical, just-works — is becoming a liability. Users want to see the seams.",
      "Done well, this turns out not to be a regression. A product that shows its work is a product that respects the user enough to let them think. That is a much better north star than 'frictionless' was, anyway.",
    ],
  },
  {
    slug: "edge-eats-the-cloud",
    title: "Edge Computing Is Eating the Cloud",
    subtitle:
      "The data center is not going anywhere. But the interesting work is moving closer to the user.",
    category: "Infrastructure",
    author: "Tomás Ferreira",
    authorRole: "Infrastructure Writer",
    date: "April 7, 2026",
    readTime: "10 min read",
    gradient: "from-blue-600 via-sky-500 to-cyan-400",
    accent: "bg-sky-500",
    excerpt:
      "Cloudflare, Fly, Vercel, and a dozen smaller platforms are quietly turning the network itself into a runtime. The implications are bigger than 'low latency.'",
    body: [
      "Cloud computing was a beautiful abstraction. You stopped thinking about machines and started thinking about regions — us-east-1, eu-west-2, the polite fiction that your code lives 'somewhere in Virginia.' For a decade, that was good enough.",
      "It is not good enough anymore. As applications get richer and users get more globally distributed, the round-trip from Singapore to Virginia becomes the bottleneck nothing else can fix. You can optimize your database. You can shard your service. You cannot optimize the speed of light.",
      "The edge platforms are the answer the industry has been groping toward. Cloudflare Workers. Fly Machines. Vercel Functions. Deno Deploy. The shared idea: ship your code to every metro on Earth, run it within 50 milliseconds of every user, and stop worrying about regions entirely.",
      "The performance story is the easy headline. The deeper story is what edge does to architecture. When your compute is cheap and globally distributed, you start writing applications that look more like CDNs and less like web servers. State moves to durable objects, KV stores, edge databases. The center of gravity shifts.",
      "The big clouds are not going anywhere. AWS, GCP, and Azure will host the AI training, the analytics warehouses, the heavyweight backends, for as long as we can imagine. But the user-facing layer — the part of your application your customer actually touches — increasingly belongs to the edge.",
    ],
  },
  {
    slug: "return-of-the-personal-website",
    title: "The Return of the Personal Website",
    subtitle:
      "After a decade of platforms eating the open web, the homepage is making a quiet comeback.",
    category: "Web",
    author: "Mira Okafor",
    authorRole: "Senior Editor",
    date: "April 3, 2026",
    readTime: "5 min read",
    gradient: "from-rose-500 via-pink-500 to-purple-600",
    accent: "bg-rose-500",
    excerpt:
      "Owning a domain used to be the default. Then for ten years it was an eccentricity. Now it is starting to look like a competitive advantage.",
    body: [
      "When I started writing on the internet, having a personal website was unremarkable. Everyone had one. They were ugly, hand-coded, and full of GIFs of construction workers. They were also yours.",
      "Then the platforms arrived and made the homepage feel quaint. Why would you set up DNS and a hosting account when Twitter was right there? Why maintain a portfolio when LinkedIn would render one for you? The convenience was real and the trade-off was invisible — until it wasn't.",
      "What people are remembering, in 2026, is that platforms are weather and websites are climate. Platforms change their algorithm and your reach evaporates. Platforms change their terms and your audience disappears. Platforms get acquired, deprecated, rate-limited, or simply turn against the kind of work you do. Your website does none of those things. It sits at a URL you control until you tell it to stop.",
      "The technical excuse is gone, too. A static site on Vercel or Cloudflare Pages costs less than a coffee per month and loads faster than anything a platform can serve you. The tooling is mature. The aesthetics are excellent. The barrier is purely a habit one.",
      "If you have not had a personal site in a decade, this is the year to fix that. Pick a domain. Pick a static site generator you do not hate. Write three things. The compounding starts immediately and the platforms cannot take it away.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
