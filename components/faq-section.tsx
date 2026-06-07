import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I submit my music to Music Lab?",
    answer:
      "Head to our demo submission page, create an artist profile, and upload your tracks along with a short bio. Our A&R team reviews every submission and reaches out within a few weeks if it's a fit.",
  },
  {
    question: "What kind of deals do you offer?",
    answer:
      "We offer flexible, artist-first deals including distribution-only, licensing, and full label Mission. Splits are transparent and, in most cases, artists keep ownership of their masters.",
  },
  {
    question: "Do I keep the rights to my music?",
    answer:
      "Yes. We believe artists should own their work. Most of our agreements let you retain your masters and publishing, with Music Lab handling distribution, marketing, and growth.",
  },
  {
    question: "How and when do I get paid royalties?",
    answer:
      "Royalties from every platform are tracked in your real-time dashboard and paid out monthly. You can see exactly where every stream and dollar comes from, with no hidden deductions.",
  },
  {
    question: "What support do you provide artists?",
    answer:
      "From recording and mastering to playlist pitching, sync placements, tour booking, and merch, our team supports the full artist journey. You also get a dedicated A&R contact available 24/7.",
  },
  {
    question: "Do I need to be an established artist to sign?",
    answer:
      "Not at all. We sign emerging and established artists alike. What matters most is the music and the vision. Many of our biggest acts started with a single bedroom demo.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-32 px-6 pb-80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">Frequently asked questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Music Lab. Have a question not listed? Contact our team.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 py-0 my-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-foreground/30"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
