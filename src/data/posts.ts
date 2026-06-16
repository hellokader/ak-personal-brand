export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  featured: boolean;
  image: string;
  content: BlogContent;
}

export interface BlogContent {
  intro: string;
  sections: BlogSection[];
  faq: FAQItem[];
  authorBio: string;
}

export interface BlogSection {
  heading: string;
  level: 2 | 3;
  body: string;
  bullets?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-your-google-ads-showing-30-miles-away",
    title: "Why Your Google Ads Are Showing 30 Miles Away (And How to Fix It This Week)",
    excerpt:
      "The radius setting almost every local business gets wrong, and the three-step fix that stops you paying for clicks you can't serve.",
    category: "Local Ads",
    readTime: "8 min",
    date: "Jun 02 · 2026",
    author: "Abdul Kader",
    featured: true,
    image: "/blog/geo-targeting.jpg",
    content: {
      intro:
        "If you're running Google Ads for a local business — a clinic, a plumber, a salon — and you're seeing calls from 20, 30, even 50 miles away, you're bleeding budget on people who will never walk through your door. Here's why it happens and exactly how to fix it.",
      sections: [
        {
          heading: "The Problem: Default Radius Is Too Wide",
          level: 2,
          body: "When you first set up a Google Ads campaign, the platform defaults to a radius around your business location. For most local businesses, that default is far too wide. A 25-mile radius in a city like Dhaka covers millions of people — the vast majority of whom will never be your customer.",
          bullets: [
            "Default radius settings assume you're a national brand",
            "Google optimizes for clicks, not conversions — wide radius = more clicks = more money for Google",
            "Your actual service area is probably much smaller",
          ],
        },
        {
          heading: "Step 1: Find Your True Service Radius",
          level: 2,
          body: "Before touching anything in Google Ads, define who you actually serve. Ask yourself: where do 90% of my current customers come from? If you have a physical location, look at your customer address data. Most local businesses serve a 3–8 mile radius for regular service, and maybe 10–15 miles for specialist or emergency services.",
          bullets: [
            "Check your Google Business Profile insights for where people are searching from",
            "Ask your front desk staff where patients/clients typically travel from",
            "Use Google Maps to draw a radius around your business",
          ],
        },
        {
          heading: "Step 2: Set Location Targeting Correctly",
          level: 2,
          body: "In Google Ads, go to Locations → Settings and set your target to the specific areas you serve — not a radius. Use postal codes, cities, or districts. If you must use radius, set it to 5 miles maximum for regular service businesses. For emergency services (plumbers, HVAC), 10 miles is the outer limit.",
          bullets: [
            "Target by location groups, not a blanket radius",
            "Use 'People in, searching for' your location — not just 'people in'",
            "Exclude locations where you can't realistically serve",
          ],
        },
        {
          heading: "Step 3: Use Ad Schedule to Match Business Hours",
          level: 2,
          body: "If you're open 9–5, there's no point showing ads at 11pm. But many local businesses leave their ads running 24/7. Google will happily show your ad to someone searching at midnight in a neighborhood 20 miles away, and you'll pay for that click. Restrict your ads to the hours and days your business is actually open and staffed.",
        },
        {
          heading: "The Three-Step Fix in 15 Minutes",
          level: 3,
          body: "Log into Google Ads → go to Locations → click the pencil icon → delete the current radius → type your actual city or service area → set to 'People in, searching for, or who showed interest in your targeted location' → save. Then go to Ad Schedule and restrict to your actual operating hours. That's it. Fifteen minutes, and you've just stopped paying for useless clicks.",
        },
      ],
      faq: [
        {
          question: "How do I know if my radius is too wide?",
          answer:
            "Go to Google Ads → Locations → See Where Your Clicks Coming From. If more than 20% of your clicks come from areas outside your actual service zone, your radius is too wide.",
        },
        {
          question: "Should I use radius or location targeting?",
          answer:
            "Always prefer specific location targeting (cities, postcodes, districts) over radius. Radius is a blunt instrument — it includes all the area between your business and the edge, including areas you can't serve.",
        },
        {
          question: "What about emergency services that serve a wide area?",
          answer:
            "For 24/7 emergency services (plumbers, emergency HVAC, emergency dental), a wider radius is justified. But even then, cap it at 10–15 miles maximum and use call tracking to measure which distances actually convert.",
        },
      ],
      authorBio:
        "Abdul Kader has spent 7 years managing Google Ads for local businesses across 5 countries. He's reduced cost-per-lead by 38% on average for his clients.",
    },
  },
  {
    id: "2",
    slug: "boring-local-service-ads-setup-that-booked-plumber-solid",
    title: "The Boring Local Service Ads Setup That Booked a Plumber Solid for 6 Weeks",
    excerpt:
      "Why the 'Google Guaranteed' badge beats a fancy campaign for emergency services almost every time.",
    category: "LSA",
    readTime: "6 min",
    date: "May 21 · 2026",
    author: "Abdul Kader",
    featured: false,
    image: "/blog/local-service-ads.jpg",
    content: {
      intro:
        "The plumber was skeptical. He'd spent money on Google Search ads before and gotten leads from 50 miles away — people who called, heard his rate, and hung up when they realized he wasn't local. When I told him I wanted to set up Local Service Ads, he said, 'I've heard of those. Do they actually work?' Six weeks later, he was booked solid.",
      sections: [
        {
          heading: "What Local Service Ads Actually Are",
          level: 2,
          body: "Local Service Ads (LSAs) appear at the very top of Google search results — above both organic listings and regular Google Ads. They show a 'Google Guaranteed' badge (or 'Google Screened' for certain industries), your business name, star rating, and phone number. You pay per lead, not per click.",
          bullets: [
            "LSAs appear for service-related searches near your business location",
            "The Google Guaranteed badge builds instant trust",
            "You only pay when someone calls or messages you — no charge for impressions",
          ],
        },
        {
          heading: "The Setup Most People Get Wrong",
          level: 2,
          body: "The most common mistake with LSAs is leaving them on the default settings. The business category is too broad, the service area is too wide, and the budget is set to 'whatever's left over.' That approach gets generic leads, not booked appointments.",
          bullets: [
            "Create a specific, tight list of services — not 'plumbing' but 'emergency pipe repair, drain unclogging, water heater installation'",
            "Set your service area to the specific zip codes or neighborhoods you actually serve",
            "Set a budget based on how many leads you can actually handle per week",
          ],
        },
        {
          heading: "The Verification Process (The Part Nobody Talks About)",
          level: 2,
          body: "Google Guaranteed requires passing a background check and license verification. This sounds scary but it's straightforward: business license, insurance, and a background check for the owner. The badge takes 2–3 weeks to appear after approval. During that waiting period, your LSA still runs — just without the badge. Don't pause it.",
        },
        {
          heading: "How to Handle Lead Disputes",
          level: 3,
          body: "Google allows businesses to dispute leads that don't meet certain criteria (wrong business type, duplicate inquiries). File disputes promptly — it affects your lead quality score. A low lead quality score means Google shows your ad less often. Dispute bad leads, but don't abuse the system — Google tracks dispute rates.",
        },
      ],
      faq: [
        {
          question: "How long does Google Guaranteed verification take?",
          answer:
            "Typically 2–3 weeks, though it can be faster. During this time your LSAs run without the badge. Don't pause them — the leads still come through.",
        },
        {
          question: "How much should I budget for Local Service Ads?",
          answer:
            "Start with a weekly budget based on how many leads you can handle. If you can handle 10 new jobs per week and your average job value is $200, a budget of $1,000–$1,500 per week is reasonable. Adjust based on lead volume.",
        },
        {
          question: "What's the difference between Google Guaranteed and Google Screened?",
          answer:
            "Google Guaranteed applies to home services (plumbers, electricians, HVAC, locksmiths, cleaning). Google Screened applies to professional services (lawyers, insurance agents, financial planners). The trust badge works the same for both.",
        },
      ],
      authorBio:
        "Abdul Kader runs Google Ads for local businesses in Dhaka, serving clients across 5 countries.",
    },
  },
  {
    id: "3",
    slug: "map-pack-changes-before-touching-ad-budgets",
    title: "The Map Pack Changes I Make Before Spending a Dollar on Google Ads",
    excerpt:
      "Ad spend can only paper over so much. Five Google Business Profile fixes I make before spending a dollar.",
    category: "GBP",
    readTime: "7 min",
    date: "May 09 · 2026",
    author: "Abdul Kader",
    featured: false,
    image: "/blog/google-business-profile.jpg",
    content: {
      intro:
        "I've seen businesses spend thousands on Google Ads while their Google Business Profile (GBP) — the free listing that drives the map pack — was incomplete, unposted, and full of wrong information. That's like paying someone to send customers to a store with a broken sign out front. Fix the GBP first.",
      sections: [
        {
          heading: "1. Verify Every Piece of Information Twice",
          level: 2,
          body: "Open your GBP right now and check: business name, address, phone number, website URL, and hours. Are they exactly right? A wrong digit in your phone number means every customer who tries to call you from Google gets a wrong number. Every. Single. One. Check your website URL too — if it redirects or 404s, you're wasting the click.",
          bullets: [
            "NAP (Name, Address, Phone) must match exactly across every online listing",
            "Add your WhatsApp number in addition to your landline",
            "Mark holidays and special hours accurately",
          ],
        },
        {
          heading: "2. Choose the Most Specific Category",
          level: 2,
          body: "Google gives you one primary category and up to 9 secondary ones. Most businesses pick something too broad — 'Plumber' instead of 'Emergency Plumbing Service.' The more specific your primary category, the less competition you face for that exact search. Being 'Emergency Plumbing Service' when someone searches 'emergency plumber near me' beats being a general 'Plumber' in a sea of competitors.",
        },
        {
          heading: "3. Post to Your Profile Every Week",
          level: 2,
          body: "Google rewards profiles that are actively maintained. Post an update, photo, or offer at least once a week. It doesn't have to be a masterpiece — a 'Happy to announce we've expanded our Saturday hours!' counts. Consistent posting tells Google this is an active, real business. It also gives potential customers something fresh to see when they find you.",
          bullets: [
            "Use the 'Update' feature for news and announcements",
            "Add photos regularly — of your team, work, facility",
            "Post offers or promotions to encourage action",
          ],
        },
        {
          heading: "4. Respond to Every Review — Good and Bad",
          level: 2,
          body: "Reviews are social proof. But responding to them is equally important. Thank people who leave 5 stars. Take conversations offline for anything under 4 stars. A thoughtful, professional response to a bad review, visible to everyone, demonstrates customer care better than any ad copy. Google also shows your response rate — businesses that respond to reviews rank higher.",
        },
        {
          heading: "5. Get Reviews Consistently, Not in Batches",
          level: 3,
          body: "Getting 50 reviews in one month then none for six months looks suspicious to Google. A steady stream of 2–3 reviews per month looks natural. Set up a review request flow: ask happy customers at the right moment (when they've just complimented your service), send them the link, and make it effortless. One click from their phone is the goal.",
        },
      ],
      faq: [
        {
          question: "How many reviews do I need to rank well?",
          answer:
            "Quality matters more than quantity. 20 reviews with an average of 4.8 stars is better than 100 reviews at 3.9. That said, 40+ reviews with consistent ratings is the threshold where most local businesses see meaningful map pack improvement.",
        },
        {
          question: "Can I use a personal Google account to manage my business profile?",
          answer:
            "Yes, but use a dedicated account created specifically for your business. Don't use your personal Gmail. Create a business email like info@yourbusiness.com and manage the profile from there. It looks more professional and keeps things organized.",
        },
        {
          question: "Should I add products to my Google Business Profile?",
          answer:
            "Yes, especially for retail or service businesses with clear offerings. Products show up in Google Search and can drive direct bookings. Keep descriptions short and accurate. Update them when your offerings change.",
        },
      ],
      authorBio:
        "Abdul Kader has helped 120+ local businesses improve their Google presence since 2019.",
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured);
}

export function getRecentPosts(excludeId?: string, limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.id !== excludeId).slice(0, limit);
}
