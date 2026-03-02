import React from 'react';

const staffBios = [
  {
    name: 'Beauregard "Beau" Funkmaster',
    title: 'Editor-in-Chief',
    bio: 'Beau founded The Daddy TGM in 1970 after being fired from three legitimate newspapers for "excessive grooviness." He holds a degree in Satirical Arts from the University of Nowhere Special and has won the prestigious Golden Typewriter Award twice (both times he gave it to himself). He lives in a van in Tulsa with his cat, Meatloaf.',
  },
  {
    name: 'Dolores "Dee Dee" Whamsworth',
    title: 'Senior Staff Writer & Movie Critic',
    bio: 'Dee Dee has seen every movie ever made, and hated most of them. Her reviews have been described as "scathing," "unfair," and "legally actionable." She studied film at a school that has since been demolished. Her hobbies include complaining about sequels and eating soup.',
  },
  {
    name: 'Professor Ignatius "Iggy" Blunderbuss',
    title: 'Advertising Director',
    bio: 'Iggy is responsible for all the fake advertisements in this magazine. He has never sold a real product in his life, which he considers a point of pride. His previous career as a "pharmaceutical consultant" ended when the FDA got involved. He is not allowed within 500 feet of a pharmacy.',
  },
  {
    name: 'Wilhelmina "Billie" Crankshaw',
    title: 'Comics Editor & Staff Artist',
    bio: 'Billie draws all the comic strips using a technique she describes as "intentionally bad on purpose." She studied art at the Tulsa School of Mediocre Arts and graduated with a C+. Her stick figures have been called "the most expressive stick figures in the business" by her mother.',
  },
  {
    name: 'Chester B. Hornswoggle',
    title: 'Letters Editor',
    bio: 'Chester reads every letter sent to the magazine, which takes approximately four minutes per month. He responds to all letters with the same form letter, which reads: "Thank you for your letter. We have read it. We have opinions about it. Regards, Chester." He is very efficient.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="retro-border-thick p-4 mb-6 text-center" style={{ background: 'oklch(0.89 0.05 80)' }}>
        <h1 className="retro-masthead text-3xl md:text-4xl mb-1" style={{ color: 'oklch(0.35 0.12 42)' }}>
          ABOUT US
        </h1>
        <p className="font-subheading text-xs tracking-widest" style={{ color: 'oklch(0.55 0.08 60)' }}>
          THE STORY BEHIND THE GROOVIEST RAG ON THE RACK
        </p>
      </div>

      {/* Founding story */}
      <div className="retro-card p-6 mb-6">
        <h2 className="retro-heading text-2xl mb-4" style={{ color: 'oklch(0.35 0.12 42)' }}>
          OUR FOUNDING STORY
        </h2>
        <div className="retro-divider mb-4" />
        <div className="letter-box mb-4" style={{ fontStyle: 'normal' }}>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'oklch(0.22 0.05 55)' }}>
            It was the summer of 1970, and Beauregard Funkmaster was sitting in his van in a Tulsa parking lot, 
            eating a gas station burrito and reading a magazine that he found deeply unsatisfying. 
            "This magazine," he said to his cat Meatloaf, "is not groovy enough."
          </p>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'oklch(0.22 0.05 55)' }}>
            Meatloaf said nothing, because Meatloaf is a cat. But Beau took this as encouragement.
          </p>
          <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'oklch(0.22 0.05 55)' }}>
            With $47 in his pocket, a stolen typewriter, and a dream, Beau founded The Daddy TGM — 
            The Groovy Magazine. The first issue was printed on a mimeograph machine borrowed from 
            a church (they never got it back). It contained three movie reviews, two fake advertisements, 
            and a poem about a cat. The poem was about Meatloaf.
          </p>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'oklch(0.22 0.05 55)' }}>
            Today, The Daddy TGM is read by dozens of people across the country, possibly more. 
            We have never verified this. We prefer not to know. The dream lives on, baby.
          </p>
        </div>
      </div>

      {/* Mission statement */}
      <div className="mb-6" style={{ background: 'oklch(0.30 0.08 50)', border: '4px solid oklch(0.76 0.16 88)', padding: '2rem' }}>
        <h2 className="retro-masthead text-2xl text-center mb-3" style={{ color: 'oklch(0.76 0.16 88)' }}>
          OUR MISSION
        </h2>
        <div className="w-24 h-1 mx-auto mb-4" style={{ background: 'oklch(0.76 0.16 88)' }} />
        <p className="font-heading italic text-lg text-center leading-relaxed" style={{ color: 'oklch(0.90 0.03 85)' }}>
          "To afflict the comfortable, comfort the afflicted, and make everyone laugh 
          at movies they've already seen. Also to sell fake hair tonic. 
          We're still working on the hair tonic."
        </p>
        <p className="font-subheading text-xs text-center mt-3 tracking-widest" style={{ color: 'oklch(0.76 0.16 88)' }}>
          — THE DADDY TGM EDITORIAL BOARD (BEAU AND HIS CAT)
        </p>
      </div>

      {/* Staff bios */}
      <div className="mb-6">
        <h2 className="retro-heading text-2xl mb-4" style={{ color: 'oklch(0.35 0.12 42)' }}>
          MEET THE STAFF
        </h2>
        <div className="retro-divider mb-4" />
        <div className="space-y-4">
          {staffBios.map((staff, i) => (
            <div key={i} className="retro-card p-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-12 h-12 flex items-center justify-center font-masthead text-xl flex-shrink-0"
                  style={{ background: i % 2 === 0 ? 'oklch(0.52 0.16 38)' : 'oklch(0.50 0.12 128)', color: 'oklch(0.93 0.04 88)' }}
                >
                  {staff.name.charAt(0)}
                </div>
                <div>
                  <h3 className="retro-heading text-base font-bold" style={{ color: 'oklch(0.30 0.08 48)' }}>
                    {staff.name}
                  </h3>
                  <p className="font-subheading text-xs tracking-wider mb-2" style={{ color: 'oklch(0.52 0.16 38)' }}>
                    {staff.title}
                  </p>
                  <p className="font-body text-xs leading-relaxed" style={{ color: 'oklch(0.35 0.06 55)' }}>
                    {staff.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publication details */}
      <div className="retro-divider mb-4" />
      <div className="retro-card p-6 mb-6">
        <h2 className="retro-heading text-xl mb-4" style={{ color: 'oklch(0.35 0.12 42)' }}>
          PUBLICATION DETAILS
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 font-body text-xs" style={{ color: 'oklch(0.35 0.06 55)' }}>
          <div>
            <p className="font-subheading text-xs tracking-wider mb-1" style={{ color: 'oklch(0.52 0.16 38)' }}>PUBLISHER</p>
            <p>Funkmaster Publications, Inc.</p>
            <p>(Not actually incorporated)</p>
          </div>
          <div>
            <p className="font-subheading text-xs tracking-wider mb-1" style={{ color: 'oklch(0.52 0.16 38)' }}>ADDRESS</p>
            <p>1234 Groovy Lane</p>
            <p>Tulsa, Oklahoma 74101</p>
            <p>(The van is usually parked here)</p>
          </div>
          <div>
            <p className="font-subheading text-xs tracking-wider mb-1" style={{ color: 'oklch(0.52 0.16 38)' }}>FREQUENCY</p>
            <p>Daily (when we feel like it)</p>
            <p>New issue every calendar day</p>
          </div>
          <div>
            <p className="font-subheading text-xs tracking-wider mb-1" style={{ color: 'oklch(0.52 0.16 38)' }}>PRICE</p>
            <p>35¢ (or whatever you've got)</p>
            <p>Subscriptions: $4.20/year</p>
          </div>
          <div>
            <p className="font-subheading text-xs tracking-wider mb-1" style={{ color: 'oklch(0.52 0.16 38)' }}>LEGAL</p>
            <p>All content is satirical parody fiction.</p>
            <p>Any resemblance to real events is</p>
            <p>coincidental and also funny.</p>
          </div>
          <div>
            <p className="font-subheading text-xs tracking-wider mb-1" style={{ color: 'oklch(0.52 0.16 38)' }}>DISCLAIMER</p>
            <p>The Daddy TGM is not responsible</p>
            <p>for any grooviness that may occur</p>
            <p>as a result of reading this magazine.</p>
          </div>
        </div>
      </div>

      {/* Closing */}
      <div className="text-center py-4">
        <p className="font-masthead text-2xl" style={{ color: 'oklch(0.52 0.16 38)' }}>
          STAY GROOVY, BABY! ✦
        </p>
        <p className="font-body text-xs mt-2 italic" style={{ color: 'oklch(0.55 0.06 60)' }}>
          — Beau Funkmaster & Meatloaf the Cat
        </p>
      </div>
    </div>
  );
}
