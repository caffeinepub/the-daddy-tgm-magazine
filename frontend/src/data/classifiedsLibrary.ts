// ============================================================
// CLASSIFIEDS LIBRARY — THE DADDY TGM WANT ADS & ODDITIES
// ============================================================

export type ClassifiedCategory =
  | 'FOR SALE'
  | 'PERSONALS'
  | 'HELP WANTED'
  | 'SERVICES OFFERED'
  | 'LOST & FOUND'
  | 'ANNOUNCEMENTS';

export interface ClassifiedAd {
  id: string;
  category: ClassifiedCategory;
  headline: string;
  body: string;
  contact?: string;
}

export const classifiedsLibrary: ClassifiedAd[] = [
  // ── FOR SALE ──────────────────────────────────────────────
  {
    id: 'fs-001',
    category: 'FOR SALE',
    headline: 'SLIGHTLY USED LAVA LAMP — STILL LAVA-ING',
    body: "Groovy orange lava lamp, circa 1971. One of the blobs has gone rogue and refuses to come down. Adds character. Asking $4 or best offer. Will not separate from the shag carpet it sits on.",
    contact: 'Ask for Hank at the Sunoco on Route 9',
  },
  {
    id: 'fs-002',
    category: 'FOR SALE',
    headline: 'MACRAMÉ OWL — HAUNTED, PROBABLY',
    body: "Large wall-hanging macramé owl. Eyes follow you around the room. Dog won't go near it. Kids won't go near it. I won't go near it. Yours for $2. Pick up only — I'm not mailing this thing.",
    contact: 'Dolores, 555-0142',
  },
  {
    id: 'fs-003',
    category: 'FOR SALE',
    headline: 'FONDUE SET — USED ONCE, REGRETTED IMMEDIATELY',
    body: "Complete 8-piece fondue set. Melted cheese into the carpet at my sister-in-law's Christmas party. She has not forgiven me. Neither has the carpet. Set is fine. $6 firm.",
    contact: 'Box 77, c/o The Daddy TGM',
  },
  {
    id: 'fs-004',
    category: 'FOR SALE',
    headline: 'AVOCADO GREEN REFRIGERATOR — RUNS GREAT, SMELLS WEIRD',
    body: "1968 Frigidaire in authentic avocado green. Keeps things cold. Makes a sound like a dying trombone at 3am. Smell is unidentified but not dangerous (probably). $25 or trade for a working TV.",
    contact: 'Earl, leave note under the door at 14 Maple',
  },
  {
    id: 'fs-005',
    category: 'FOR SALE',
    headline: 'COLLECTION OF 8-TRACK TAPES — MOSTLY ABBA',
    body: "47 eight-track tapes. 31 are ABBA. The rest are a mystery because the labels fell off. One appears to be a recording of someone's divorce proceedings. $1 each or $30 for the lot.",
    contact: 'Francesca, call after 6pm',
  },
  {
    id: 'fs-006',
    category: 'FOR SALE',
    headline: 'BEAN BAG CHAIR — LEAKING BEANS',
    body: "Burnt orange bean bag chair. Structural integrity is \"questionable.\" Leaves a trail of little white beans wherever you drag it. Great for someone who wants to feel like they're sitting on a cloud that's slowly dying. $3.",
    contact: 'Apartment 4B, the one with the wind chimes',
  },
  {
    id: 'fs-007',
    category: 'FOR SALE',
    headline: 'EXERCISE BIKE — NEVER RIDDEN, EXCELLENT COAT RACK',
    body: "Stationary exercise bike, 1974. Has served faithfully as a coat rack for 3 years. Technically still a bike. Pedals work. Seat is uncomfortable as hell. $15 or trade for something I'll also never use.",
    contact: 'Gerald, 555-0198',
  },
  {
    id: 'fs-008',
    category: 'FOR SALE',
    headline: 'WATERBED — SLIGHTLY HAUNTED, VERY WET',
    body: "King-size waterbed. Slow leak means it's now more of a \"damp mattress.\" Previous owner claims it has good vibes. I claim it has a slow leak. Selling as-is. You haul it. $10.",
    contact: 'Sylvester, ask at the Laundromat on 5th',
  },

  // ── PERSONALS ─────────────────────────────────────────────
  {
    id: 'pe-001',
    category: 'PERSONALS',
    headline: 'DIVORCED MALE, 43, SEEKS UNDERSTANDING WOMAN',
    body: "Divorced male, 43. Enjoys fishing, arguing about Nixon, and eating cereal for dinner. My ex-wife says I have \"the emotional range of a parking meter.\" I say that's her opinion. Must love dogs. Dog is non-negotiable.",
    contact: 'Box 12, c/o The Daddy TGM',
  },
  {
    id: 'pe-002',
    category: 'PERSONALS',
    headline: 'GROOVY GAL SEEKS FELLA WHO OWNS A WORKING CAR',
    body: "Fun-loving gal, 29, seeks gentleman with reliable transportation. Last three dates arrived by bicycle, skateboard, and on foot respectively. I have standards. They are low, but they exist. No Pintos.",
    contact: 'Rhonda, Box 44',
  },
  {
    id: 'pe-003',
    category: 'PERSONALS',
    headline: 'SENSITIVE POET SEEKS MUSE, ALSO SOMEONE TO SPLIT RENT',
    body: "Sensitive male poet, 31, seeks muse and/or roommate. I write verse about the existential void. I also need someone to help with the electric bill. Separate bedrooms preferred. Must appreciate Kerouac and not eat my yogurt.",
    contact: 'Theodore, leave message at the coffee house',
  },
  {
    id: 'pe-004',
    category: 'PERSONALS',
    headline: 'WIDOW, 67, SEEKS COMPANION FOR BINGO AND MILD ADVENTURE',
    body: "Spry widow, 67, seeks male companion for Tuesday bingo, occasional road trips, and someone to reach things on the top shelf. Must have own teeth (most of them). No smokers. My late husband smoked and look how that turned out.",
    contact: 'Mildred, call the church hall and ask for the Tuesday group',
  },
  {
    id: 'pe-005',
    category: 'PERSONALS',
    headline: 'TALL FELLA SEEKS SHORT LADY — FOR BALANCE',
    body: "6\'4\" male, 38, seeks petite female companion. I bump my head on everything. I need someone who finds this endearing rather than exhausting. I cook a mean chili. I am told I am \"a lot.\" I prefer \"enthusiastic.\"",
    contact: 'Big Jim, Box 88',
  },
  {
    id: 'pe-006',
    category: 'PERSONALS',
    headline: 'WOMAN SEEKS MAN WHO DOES NOT TALK DURING MOVIES',
    body: "Attractive woman, 34, seeks male companion with one simple requirement: shut up during the movie. That's it. That's the whole ad. If you can do that, call me. If you're already thinking of an exception, don't bother.",
    contact: 'Box 55, c/o The Daddy TGM',
  },

  // ── HELP WANTED ───────────────────────────────────────────
  {
    id: 'hw-001',
    category: 'HELP WANTED',
    headline: 'WANTED: PROFESSIONAL CHEESE TASTER — SERIOUS INQUIRIES ONLY',
    body: "Local cheese shop seeks experienced taster. Must have functioning nose and strong opinions. Previous experience in dairy preferred but not required. Pay is mostly in cheese. Do not apply if lactose intolerant. We've been through that before.",
    contact: 'Gouda & Sons, 14 Market Street',
  },
  {
    id: 'hw-002',
    category: 'HELP WANTED',
    headline: 'NIGHT WATCHMAN NEEDED — MUST NOT BE AFRAID OF THE DARK',
    body: "Seeking night watchman for warehouse. Hours: 11pm–6am. Duties include walking around, looking at things, and not falling asleep. Previous applicant fell asleep. We found him three days later. He was fine. Mostly.",
    contact: 'Kowalski Industrial, ask for Mr. Kowalski',
  },
  {
    id: 'hw-003',
    category: 'HELP WANTED',
    headline: 'WANTED: SOMEONE TO EXPLAIN THE METRIC SYSTEM TO MY FATHER',
    body: "Seeking patient individual to explain the metric system to my 71-year-old father, Vito. He refuses to accept it. He has opinions. Many opinions. Loud opinions. $5/hour. Bring earplugs. Previous tutors have quit. You will too, but we appreciate the effort.",
    contact: 'The Caruso Family, Box 19',
  },
  {
    id: 'hw-004',
    category: 'HELP WANTED',
    headline: 'ASSISTANT NEEDED FOR AMATEUR MAGICIAN — MUST LIKE BEING SAWED IN HALF',
    body: "Part-time assistant needed for weekend magic shows. Duties: hand me things, look amazed, and occasionally be sawed in half (the box is safe, mostly). No experience necessary. Previous assistant quit after the \"disappearing\" trick went long. She came back. Eventually.",
    contact: 'The Amazing Reginald, 555-0177',
  },
  {
    id: 'hw-005',
    category: 'HELP WANTED',
    headline: 'SEEKING RELIABLE BABYSITTER — CHILDREN ARE FINE, PROBABLY',
    body: "Need babysitter for three boys, ages 6, 8, and \"difficult.\" They are energetic. The youngest has escaped twice. The middle one is currently banned from the library. The oldest is fine. $2/hour. References not required but prayers are appreciated.",
    contact: 'The Kowalczyk household, 3rd house past the stop sign',
  },
  {
    id: 'hw-006',
    category: 'HELP WANTED',
    headline: 'WANTED: SOMEONE TO FINISH MY NOVEL — I\'VE LOST INTEREST',
    body: "Seeking ghostwriter to complete my 400-page novel. I have written 47 pages. The protagonist is a detective. Something happens. I'm not sure what. You figure it out. 50/50 credit split. The 50 you get is the good 50.",
    contact: 'Box 33, c/o The Daddy TGM',
  },

  // ── SERVICES OFFERED ──────────────────────────────────────
  {
    id: 'so-001',
    category: 'SERVICES OFFERED',
    headline: 'PSYCHIC READINGS — ACCURACY NOT GUARANTEED',
    body: "Madame Zelda offers psychic readings, palm readings, and tarot. Results may vary. Madame Zelda predicted her own car would start this morning. It did not. Nevertheless, she has insights. $3 per reading. Cash only. No refunds.",
    contact: 'Madame Zelda, the purple house on Elm',
  },
  {
    id: 'so-002',
    category: 'SERVICES OFFERED',
    headline: 'HAIR CUTTING — MOSTLY STRAIGHT LINES',
    body: "Home haircuts by Bernadette. $1.50 per cut. I have scissors and confidence. Results are \"rustic.\" My husband says I have a gift. He is bald. I did not do that. Probably. Walk-ins welcome. Bring a magazine in case I get distracted.",
    contact: 'Bernadette, 22 Oak Lane, knock loud',
  },
  {
    id: 'so-003',
    category: 'SERVICES OFFERED',
    headline: 'HANDYMAN SERVICES — WILL TRY ANYTHING ONCE',
    body: "Experienced handyman available for repairs, installations, and \"creative solutions.\" I have fixed 73% of the things I've attempted. The other 27% required a professional afterward. I am honest about this. $8/hour. I bring my own duct tape.",
    contact: 'Hector, 555-0155',
  },
  {
    id: 'so-004',
    category: 'SERVICES OFFERED',
    headline: 'ASTROLOGY CHARTS — BLAME THE STARS, NOT YOURSELF',
    body: "Personalized astrology charts by Professor Cosmos (not a real professor). Find out why your life is the way it is! Spoiler: it's Mercury retrograde. It's always Mercury retrograde. $4 per chart. Includes a free horoscope that is vague enough to apply to anyone.",
    contact: 'Professor Cosmos, Box 66',
  },
  {
    id: 'so-005',
    category: 'SERVICES OFFERED',
    headline: 'NOTARY PUBLIC — ALSO DOES IMPRESSIONS',
    body: "Licensed notary public available for document notarization. While you wait, I will do my impression of Walter Cronkite. It is very good. The notarizing is also good. $2 per document. The impressions are free. You cannot stop me from doing them.",
    contact: 'Norman, the insurance office on 4th',
  },
  {
    id: 'so-006',
    category: 'SERVICES OFFERED',
    headline: 'DIVORCE PARTY PLANNING — CELEBRATE YOUR FREEDOM',
    body: "Specializing in divorce parties, breakup brunches, and \"good riddance\" gatherings. You survived. You deserve a party. I provide streamers, a cake that says whatever you want, and a playlist of empowerment anthems. $15 flat fee. Crying is allowed.",
    contact: 'Celebration Connie, Box 91',
  },

  // ── LOST & FOUND ──────────────────────────────────────────
  {
    id: 'lf-001',
    category: 'LOST & FOUND',
    headline: 'LOST: ONE DIGNITY — LAST SEEN AT THE HOLIDAY INN BAR',
    body: "Lost my dignity at the Holiday Inn bar on Route 17, Saturday night, approximately 11pm. It was wearing a leisure suit and doing the Hustle. If found, please return. I miss it. Reward: my sincere gratitude and a firm handshake.",
    contact: 'Box 7, c/o The Daddy TGM',
  },
  {
    id: 'lf-002',
    category: 'LOST & FOUND',
    headline: 'FOUND: ONE TOUPEE — BROWN, MEDIUM, SLIGHTLY WINDSWEPT',
    body: "Found one toupee on the corner of Main and 3rd, Tuesday morning. Brown, medium size, appears to have been through some weather. Owner may claim by describing it accurately and answering one question about its previous location. No judgment.",
    contact: 'Ask for Phyllis at the dry cleaner\'s',
  },
  {
    id: 'lf-003',
    category: 'LOST & FOUND',
    headline: 'LOST: HUSBAND — ANSWERS TO \"HEY YOU\"',
    body: "Lost husband, 52, at the hardware store on Saturday. Brown hair (some of it), plaid shirt, confused expression. Was last seen looking at drill bits. Has been known to wander into the sporting goods section. If found, please send him home. Dinner is getting cold.",
    contact: 'Edna, 555-0133',
  },
  {
    id: 'lf-004',
    category: 'LOST & FOUND',
    headline: 'FOUND: LARGE QUANTITY OF SOMEONE\'S AMBITION',
    body: "Found: what appears to be a large quantity of ambition, abandoned behind the bowling alley on Friday night. Owner clearly had big plans at some point. Ambition is in good condition, slightly dusty. Claim it before I use it myself.",
    contact: 'Box 23, c/o The Daddy TGM',
  },
  {
    id: 'lf-005',
    category: 'LOST & FOUND',
    headline: 'LOST: ONE ORANGE CAT — ANSWERS TO NOTHING',
    body: "Lost orange tabby cat, name is \"Captain.\" Does not respond to his name, commands, or bribes. Last seen heading toward the Piggly Wiggly with purpose. He has done this before. He always comes back. He just likes you to worry. Reward: my relief.",
    contact: 'The Hendersons, yellow house on Birch',
  },

  // ── ANNOUNCEMENTS ─────────────────────────────────────────
  {
    id: 'an-001',
    category: 'ANNOUNCEMENTS',
    headline: 'NOTICE: I AM NOT RESPONSIBLE FOR MY BROTHER GARY',
    body: "This is a public notice that I, Raymond Kowalski, am not responsible for the actions, debts, opinions, or general behavior of my brother Gary Kowalski. Whatever he told you, I didn't agree to it. Whatever he borrowed, I didn't lend it. We share a last name. That's it.",
    contact: 'Raymond Kowalski, Box 101',
  },
  {
    id: 'an-002',
    category: 'ANNOUNCEMENTS',
    headline: 'CONGRATULATIONS TO THE BINGO HALL — 500TH GAME THIS YEAR',
    body: "The Elks Lodge Bingo Hall proudly announces its 500th game of the year. We have given away $847 in prizes, consumed 1,200 daubers, and witnessed three arguments, one fainting, and one marriage proposal (she said no). Here's to 500 more. B-12!",
    contact: 'Elks Lodge #441',
  },
  {
    id: 'an-003',
    category: 'ANNOUNCEMENTS',
    headline: 'NOTICE: THE RUMOR ABOUT ME AND THE MAYOR IS FALSE',
    body: "I, Dolores Fitch, wish to publicly state that the rumor circulating at the beauty parlor regarding myself and Mayor Henderson is completely false. We were discussing zoning. It was a zoning meeting. There was a map. I have the map. I will show anyone the map.",
    contact: 'Dolores Fitch, 14 Sycamore Drive',
  },
  {
    id: 'an-004',
    category: 'ANNOUNCEMENTS',
    headline: 'GARAGE SALE POSTPONED DUE TO INCIDENT WITH THE GARAGE',
    body: "The Perkins Family Garage Sale, previously scheduled for this Saturday, has been postponed indefinitely due to an incident involving the garage. The garage is fine. We are fine. The car is less fine. We will reschedule when things settle down. Thank you for your patience.",
    contact: 'The Perkins Family',
  },
  {
    id: 'an-005',
    category: 'ANNOUNCEMENTS',
    headline: 'WELCOME TO THE NEIGHBORHOOD, WHOEVER MOVED INTO 22 ELM',
    body: "The Neighborhood Watch Committee welcomes the new residents of 22 Elm Street. We have noticed your moving truck, your wind chimes, and your unusual hours. We are not suspicious. We are welcoming. These are the same thing in this neighborhood. Bring a casserole to the next meeting.",
    contact: 'Neighborhood Watch Committee, Box 200',
  },
  {
    id: 'an-006',
    category: 'ANNOUNCEMENTS',
    headline: 'CORRECTION: LAST WEEK\'S OBITUARY CONTAINED AN ERROR',
    body: "We wish to correct last week's obituary for Harold Finster. Harold is not dead. He was on vacation in Florida. The confusion arose because Harold did not tell anyone he was going to Florida. Harold is embarrassed. We are embarrassed. Harold is also very tan.",
    contact: 'The Daddy TGM Editorial Staff',
  },
];
