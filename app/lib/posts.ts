export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  topic: string;
  content: string;
  image: string;
}

export const posts: Post[] = [
  {
    slug: "on-device-ai",
    title: "The Quiet Revolution of On-Device AI",
    excerpt: "How edge computing is shifting power back to users and away from cloud data centers.",
    date: "2026-04-20",
    topic: "Artificial Intelligence",
    image: "https://ai.go-forth.com/images/img-1777141497950-gmtlbr.png",
    content: `The shift toward on-device AI represents one of the most significant technological transitions we'll see this decade. Unlike the cloud-first paradigm that dominated the 2010s, on-device models put intelligence directly on your phone, laptop, or edge device — no internet required.

This changes everything. Privacy becomes the default, not an afterthought. Latency disappears. You're not sending your data to a server in a distant data center. Instead, the model lives with you.

But there's more to it than convenience. The economics are shifting too. Training smaller, specialized models costs less than maintaining massive centralized infrastructure. Companies can deploy AI without relying on cloud giants as intermediaries. Users regain agency over their own computing.

The transition won't be smooth. The largest models still live in the cloud. But the trend is unmistakable: intelligence is moving to the edge. And that's where it should have been all along.`,
  },
  {
    slug: "async-beats-meetings",
    title: "Why Async Beats Meetings",
    excerpt: "Synchronous communication kills focus. Here's why asynchronous work is the future of productive teams.",
    date: "2026-04-19",
    topic: "Work",
    image: "https://ai.go-forth.com/images/img-1777141505688-va9pfo.png",
    content: `Meetings are productivity theater. They feel like work because they consume time, but they rarely produce anything of value.

Asynchronous communication — written documentation, recorded video, threaded discussions — is fundamentally different. It forces clarity. You can't mumble through an async update; you have to write clearly or record yourself speaking clearly. It creates a permanent record. It respects time zones and deep work.

The best work happens in flow state. Flow requires uninterrupted time. Meetings shatter it. Even a 15-minute sync breaks a 4-hour coding session into fragments.

When teams embrace async-first communication, something shifts. Decisions take slightly longer to make, but they're better informed. Team members across time zones contribute equally. Introverts aren't disadvantaged. People get their deep work done.

This doesn't mean meetings disappear. It means they become rare, intentional, and focused. A weekly sync to align on high-level direction. An occasional all-hands. Everything else is async.

The future belongs to teams that crack this. They'll outpace sync-obsessed competitors every time.`,
  },
  {
    slug: "cheap-software-tech-debt",
    title: "The Hidden Cost of Cheap Software",
    excerpt: "Why technical debt from cost-cutting decisions compounds into existential problems.",
    date: "2026-04-18",
    topic: "Engineering",
    image: "https://ai.go-forth.com/images/img-1777141514198-gptu6a.png",
    content: `There's a myth that you can save money by cutting corners on software quality. You can't. You just push the cost into the future, where it compounds.

This is technical debt. You ship faster by skipping tests, avoiding refactoring, using the cheapest tool that works. For a quarter or two, you look like a genius. Velocity is high. Metrics look great.

Then the cracks appear. A bug that takes three days to isolate because the code is spaghetti. A new feature that touches twelve files because dependencies are tangled. A security vulnerability because nobody had time to audit the third-party library.

The cost doesn't decrease over time. It accelerates. You hire more people to ship the same amount of value because they're spending half their time fighting the codebase. Onboarding takes longer. Shipping slows down. Morale drops.

Meanwhile, companies that invested in quality move faster. Their codebases are clearer. Changes are cheaper. They attract better engineers.

This is the compounding cost of cheap software. It looks attractive in the short term. But over five years, the bill comes due. And by then, you're stuck paying it.`,
  },
  {
    slug: "designing-for-trust",
    title: "Designing for Trust in the Age of Generated Content",
    excerpt: "How to build products people believe in when the internet is flooded with synthetic media.",
    date: "2026-04-17",
    topic: "Design",
    image: "https://ai.go-forth.com/images/img-1777141519879-sm828o.png",
    content: `We're entering an era where you can't trust your eyes. Deepfakes are getting better. AI-generated text is indistinguishable from human writing. Videos can be fabricated. Images can be hallucinated.

In this world, trust becomes the scarcest commodity. And it's a design problem, not a technology problem.

The products that will win are the ones people believe in. Not because they have the fanciest AI, but because they're transparent about how they work. They show their sources. They're honest about limitations. They create friction in the right places — moments where the user is forced to think critically.

Look at the best newsrooms. They show their work. They cite sources. They correct mistakes openly. They're not trying to hide the seams; they're highlighting them.

The same principle applies to any product. If you're using AI to generate content, say so. If you can't explain a recommendation, don't present it as fact. If there's uncertainty, communicate it.

Trust is built through consistency and transparency. In an age of synthetic media, the products that embrace radical honesty will become the ones we depend on most.`,
  },
  {
    slug: "edge-computing-eating-cloud",
    title: "Edge Computing Is Eating the Cloud",
    excerpt: "The centralized data center model is collapsing. Processing is moving to the edge.",
    date: "2026-04-16",
    topic: "Infrastructure",
    image: "https://ai.go-forth.com/images/img-1777141525728-nwh2f2.png",
    content: `The cloud promised centralization. Build your entire business on someone else's servers. Let them handle the scaling, the redundancy, the complexity.

For a decade, it worked. AWS, Azure, and Google Cloud became synonymous with modern infrastructure.

But cracks are forming. The bandwidth costs are unsustainable. The latency is unacceptable for certain use cases. The privacy implications of centralizing all computation in the hands of a few giants are becoming untenable.

Enter the edge. Compute happening closer to the data. CDNs that don't just cache content but execute code. Cloudflare Workers. Vercel Edge Functions. Entire applications running in distributed locations around the world.

This isn't a rejection of the cloud. It's an evolution. Some workloads still belong in centralized data centers. But the low-latency, compute-intensive, privacy-sensitive workloads? Those are moving to the edge.

The economics are shifting. The technology is maturing. The incentives are aligning. Within five years, describing something as "cloud-native" will sound quaint. Everything will be edge-first.

The companies that embrace this transition early will set the standard for what's possible. The rest will be playing catch-up.`,
  },
  {
    slug: "personal-website-return",
    title: "The Return of the Personal Website",
    excerpt: "Why owning your corner of the internet matters more than ever.",
    date: "2026-04-15",
    topic: "Web",
    image: "https://ai.go-forth.com/images/img-1777141533476-qv2c3p.png",
    content: `For a decade, the internet consolidated around platforms. Twitter, Instagram, LinkedIn, Medium. You built your presence on rented land, following their rules, optimizing for their algorithms.

But something is shifting. People are rediscovering the personal website.

It's not about traffic. A personal website might reach fewer people than a viral tweet. But it's about ownership. It's about expressing yourself without an algorithm deciding who sees it. It's about permanence — your website doesn't disappear when a platform changes terms of service.

There's also a craftsmanship element. Building your own website forces you to think about design, structure, and presentation in ways that pre-built templates don't. You become closer to your own work.

The tools have gotten better, too. Static site generators are simpler. Hosting is cheaper. It's easier than ever to own a corner of the internet.

This isn't about rejecting social media entirely. It's about having a home base. A place you own. A place where you define the rules.

The personal website is coming back. Not as a replacement for social platforms, but as a complement. A reminder that the best parts of the early web — creativity, ownership, self-expression — are still worth preserving.`,
  },
];
