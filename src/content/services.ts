import type { ServiceIconKey } from "@/lib/serviceIcons";

export type ServiceSlug =
  | "immigration-citizenship"
  | "work-permits"
  | "visit-visa"
  | "study-visa"
  | "travel";

export type ServiceDefinition = {
  slug: ServiceSlug;
  shortTitle: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  /** One-line hero subtitle */
  summary: string;
  intro: string;
  benefits: string[];
  checklistTitle: string;
  checklist: string[];
  processIntro: string;
  processSteps: { title: string; description: string }[];
  iconKey: ServiceIconKey;
  cardDescription: string;
};

export const services: ServiceDefinition[] = [
  {
    slug: "immigration-citizenship",
    shortTitle: "Immigration & Citizenship",
    navLabel: "Immigration & Citizenship",
    metaTitle: "Immigration & Citizenship Services",
    metaDescription:
      "Guidance on permanent residency, skilled and family migration, citizenship pathways, eligibility assessment, and application support with Lexicon Migration.",
    heroTitle: "Immigration & citizenship pathways",
    summary:
      "Structured eligibility reviews and application support for long-term migration and citizenship goals.",
    intro:
      "Whether you are exploring skilled migration, reuniting with family, or planning a long-term move, we help you understand options with a clear eligibility review and structured documentation assistance. Outcomes depend on authorities and individual circumstances—we focus on accurate preparation and transparent guidance at every step.",
    benefits: [
      "Pathway clarity: compare realistic routes before you invest time and fees",
      "Eligibility review aligned with current program criteria",
      "Documentation assistance and organized evidence packs",
      "Application support with careful quality checks before submission",
      "Updates as your case progresses—so you are never guessing what is next",
    ],
    checklistTitle: "Typical documents & information (varies by case)",
    checklist: [
      "Identity and civil status documents (as applicable)",
      "Skills assessment or qualification evidence (if required for your pathway)",
      "Employment history, references, and CV where relevant",
      "Relationship evidence for family-based routes",
      "Police certificates and health checks when requested for your subclass or category",
      "Financial evidence where the program requires proof of funds or sponsorship details",
    ],
    processIntro: "A disciplined process tailored to your pathway.",
    processSteps: [
      {
        title: "Discovery call",
        description:
          "We learn your goals, timeline, and constraints, then outline sensible next steps.",
      },
      {
        title: "Eligibility assessment",
        description:
          "A structured review of your profile against program criteria and risks.",
      },
      {
        title: "Strategy & document plan",
        description:
          "A checklist and timeline so you know what to gather and in what order.",
      },
      {
        title: "Preparation & review",
        description:
          "We help refine forms and supporting statements for clarity and consistency.",
      },
      {
        title: "Submission & follow-up",
        description:
          "Lodgement support where applicable, plus guidance on requests for further information.",
      },
    ],
    iconKey: "globe2",
    cardDescription:
      "Permanent residency, skilled and family routes, citizenship guidance, and careful application support.",
  },
  {
    slug: "work-permits",
    shortTitle: "Work Permits",
    navLabel: "Work Permits",
    metaTitle: "Work Permits & Employer-Sponsored Visas",
    metaDescription:
      "Support for overseas employment pathways, employer-sponsored visas, temporary work permits, and skilled worker options—with documentation assistance.",
    heroTitle: "Work permits & overseas employment",
    summary:
      "Employer-sponsored and skilled worker routes with documentation assistance and realistic timelines.",
    intro:
      "From employer-sponsored arrangements to skilled worker categories, we help you understand requirements and prepare a coherent file. We do not guarantee approvals—immigration authorities make final decisions—but we work to reduce errors, omissions, and last-minute surprises.",
    benefits: [
      "Employer and employee guidance for sponsored categories where applicable",
      "Role and industry context captured clearly in your application narrative",
      "Document templates and checklists aligned to your visa type",
      "Timeline planning around nomination, sponsorship, or labor steps if relevant",
      "Coordination support when multiple stakeholders are involved",
    ],
    checklistTitle: "Common items employers and applicants prepare",
    checklist: [
      "Job description, contract, and remuneration details",
      "Business registration and operational evidence (when required)",
      "Applicant qualifications, licences, and experience evidence",
      "Passport, photos, and identity documents",
      "Police certificates and medicals if requested for your category",
      "Any prior visa history and travel records relevant to assessment",
    ],
    processIntro: "How we support work-permit matters.",
    processSteps: [
      {
        title: "Role & pathway check",
        description:
          "Confirm the visa class that fits the role, employer, and contract terms.",
      },
      {
        title: "Evidence planning",
        description:
          "Map mandatory vs. discretionary documents for a complete submission.",
      },
      {
        title: "Drafting assistance",
        description:
          "Support with clear statements and consistent dates across forms.",
      },
      {
        title: "Quality review",
        description:
          "Cross-check attachments, translations, and naming before lodgement.",
      },
      {
        title: "Post-lodgement guidance",
        description:
          "Help interpreting requests for information and next milestones.",
      },
    ],
    iconKey: "briefcase",
    cardDescription:
      "Employer-sponsored visas, temporary work options, and skilled worker routes with documentation help.",
  },
  {
    slug: "visit-visa",
    shortTitle: "Visit Visa",
    navLabel: "Visit Visa",
    metaTitle: "Visit & Tourist Visa Guidance | Lexicon Migration",
    metaDescription:
      "Tourist, family, and business visitor visa guidance—documentation, financial proof, travel history, and application preparation without unrealistic promises.",
    heroTitle: "Visit visas for tourism, family & business",
    summary:
      "Purpose-led visitor applications with credible financials, ties, and itinerary presentation.",
    intro:
      "Visitor applications succeed on credibility and completeness. We help you present a balanced file—purpose of travel, ties to home country, and financial capacity—without overstating outcomes. Each embassy or visa office applies discretion; our role is structured preparation and honest guidance.",
    benefits: [
      "Itinerary and purpose-of-visit framing that reads credible and specific",
      "Financial proof guidance suited to your circumstances",
      "Sponsor or invitation letter support where appropriate",
      "Travel history presentation and gap explanations where needed",
      "Application review to catch common inconsistencies before submission",
    ],
    checklistTitle: "Typical visit visa preparation items",
    checklist: [
      "Valid passport and passport-style photographs",
      "Bank statements, payslips, or other proof of funds (as applicable)",
      "Employment or study verification from your home country",
      "Invitation or sponsor documents for family or business visits",
      "Flight and accommodation plans where the program expects them",
      "Travel insurance guidance for your destination (informational)",
    ],
    processIntro: "Straightforward steps for visitor cases.",
    processSteps: [
      {
        title: "Purpose definition",
        description:
          "Clarify dates, activities, and who you will visit or meet.",
      },
      {
        title: "Funds & ties",
        description:
          "Assemble financial proof and evidence of obligations at home.",
      },
      {
        title: "Forms & uploads",
        description:
          "Complete online or paper forms with consistent information.",
      },
      {
        title: "Review session",
        description:
          "We check for weak spots in the narrative or missing attachments.",
      },
      {
        title: "Submission",
        description:
          "Guidance on appointments, biometrics, and tracking where relevant.",
      },
    ],
    iconKey: "plane",
    cardDescription:
      "Tourist, family, and business visitor routes with practical documentation support.",
  },
  {
    slug: "study-visa",
    shortTitle: "Study Visa",
    navLabel: "Study Visa",
    metaTitle: "Study Abroad & Student Visa Support",
    metaDescription:
      "Study abroad counselling, institution shortlisting, admission guidance, visa documentation, SOP support, and pre-departure preparation with Lexicon Migration.",
    heroTitle: "Study abroad & student visas",
    summary:
      "From institution selection to visa documentation and pre-departure readiness—clear milestones throughout.",
    intro:
      "Choosing where and what to study is a major decision. We support you with realistic institution options, admission timelines, and visa documentation aligned to your offer. Statement of purpose guidance is editorial and strategic—we help you express your story clearly while meeting expectations for structure and evidence.",
    benefits: [
      "Course and institution shortlisting aligned to your budget and goals",
      "Admission checklist tracking and deadline reminders",
      "Visa document pack organization (financials, academics, identity)",
      "SOP structure coaching and editorial feedback (your voice, clearer delivery)",
      "Pre-departure orientation: housing cues, insurance basics, and travel tips",
    ],
    checklistTitle: "Items often required for study visa files",
    checklist: [
      "Valid passport and visa-sized photographs",
      "Offer letter or CoE from the education provider",
      "Academic transcripts, certificates, and English test results if required",
      "Financial sponsorship letters, bank statements, or loan sanction letters",
      "Statement of purpose or study plan (where applicable)",
      "Medical or police certificates if requested for your destination",
    ],
    processIntro: "From shortlist to departure readiness.",
    processSteps: [
      {
        title: "Profile & goals",
        description:
          "Academic background, budget, preferred countries, and intake timing.",
      },
      {
        title: "Applications",
        description:
          "Support preparing materials for institutions and tracking responses.",
      },
      {
        title: "Acceptance & fee planning",
        description:
          "Deposit timelines, GTE or credibility considerations where relevant.",
      },
      {
        title: "Visa preparation",
        description:
          "Financial packaging, SOP refinement, and document verification.",
      },
      {
        title: "Pre-departure",
        description:
          "Travel booking cues, insurance guidance, and arrival basics.",
      },
    ],
    iconKey: "graduationCap",
    cardDescription:
      "Counselling, admissions coordination, student visa documentation, and pre-departure guidance.",
  },
  {
    slug: "travel",
    shortTitle: "Travel Services",
    navLabel: "Travel",
    metaTitle: "Travel Services & Trip Planning",
    metaDescription:
      "Ticketing support, travel planning, hotel assistance, insurance guidance, holiday packages, and visa-related travel coordination from Lexicon Migration.",
    heroTitle: "Travel services & trip coordination",
    summary:
      "Flights, stays, itineraries, and insurance guidance aligned to your visa dates and travel style.",
    intro:
      "Beyond visas, travel has to work on the ground. We assist with practical arrangements—flights, stays, and itinerary design—alongside guidance on travel insurance selection criteria. Packages are curated to your dates and budget; availability and pricing remain subject to suppliers at the time of booking.",
    benefits: [
      "Itineraries that align with visa validity and entry rules",
      "Flight and hotel options with transparent fare and cancellation notes",
      "Travel insurance guidance: coverage types to compare (not product advice)",
      "Holiday package ideas for leisure groups or corporate travel",
      "Coordination when travel connects to visa interviews or relocations",
    ],
    checklistTitle: "What we typically need to assist",
    checklist: [
      "Travel dates, flexibility window, and preferred cabin class",
      "Number of travelers and ages (for insurance and rooming)",
      "City preferences, budget per night, and accessibility needs",
      "Visa copies or approvals when travel must match visa conditions",
      "Emergency contact and mobile reachability during travel weeks",
    ],
    processIntro: "Planning travel with fewer loose ends.",
    processSteps: [
      {
        title: "Brief",
        description:
          "Dates, destinations, travelers, and any visa-linked constraints.",
      },
      {
        title: "Options",
        description:
          "Curated flight and stay combinations with clear trade-offs.",
      },
      {
        title: "Booking support",
        description:
          "Assistance confirming reservations and add-ons where applicable.",
      },
      {
        title: "Insurance checklist",
        description:
          "Key coverage categories to verify with the insurer or broker.",
      },
      {
        title: "Travel week support",
        description:
          "Light-touch assistance for changes within supplier rules.",
      },
    ],
    iconKey: "luggage",
    cardDescription:
      "Ticketing, hotels, itineraries, insurance guidance, and packages aligned to your plans.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
