// src/data/act2.js
// Act 2: trust_me.exe, "Situationship"

import afterHoursGlowImg from "../assets/after_hours_glow.png";
import attentionAsAccessImg from "../assets/attention_as_access.png";
import softLaunchTrustImg from "../assets/soft_launch_trust.png";
import privatePreviewImg from "../assets/private_preview.png";
import rexOversharesImg from "../assets/rex_overshares.png";
import habitLoopImg from "../assets/habit_loop.png";
import accessInPlainSightImg from "../assets/access_in_plain_sight.png";
import unlockedMomentImg from "../assets/unlocked_moment.png";
import cipherOpensImg from "../assets/cipher_opens.png";
import limoPullsAwayImg from "../assets/limo_pulls_away.png";

const act2 = {
  meta: {
    actId: "act2",
    title: "trust_me.exe",
    subtitle: "Situationship",
    theme:
      "after-hours chemistry • trust exploitation • badge access • confidential information slipping out of view",
    setting: {
      city: "Las Vegas",
      venue: "CyberSteel Executive Summit",
      vibe: "Private lounges, blurred boundaries, and the dangerous comfort of feeling chosen",
    },
    version: 5,
  },

  sources: {
    1: "Akeiber, H. J. (2025). The evolution of social engineering attacks: A cybersecurity engineering perspective.",
    2: "Hatfield, J. M. (2018). Social engineering in cybersecurity: The evolution of a concept.",
    3: "Iovine, A. (2026). What are romance scams and how can you avoid them?",
    4: "Wang, Z., Sun, L., & Zhu, H. (2020). Defining social engineering in cybersecurity.",
  },

  characters: {
    gemma: {
      id: "gemma",
      name: "Gemma",
      publicBio: "Independent security consultant",
      hiddenBio: "Operative gathering access for a hostile sponsor",
      archetype: "charismatic social engineer",
      traits: ["charming", "observant", "strategic"],
    },
    rex: {
      id: "rex",
      name: "Rex Vale",
      publicBio: "Billionaire tech executive, CEO of CyberSteel",
      hiddenBio: "Protective of Cipher, anxious about leaks, used to attention",
      archetype: "high value target",
      traits: ["confident", "guarded", "busy"],
    },
    ivy: {
      id: "ivy",
      name: "Ivy",
      publicBio: "CyberSteel EA for Rex Vale",
      hiddenBio: "Gatekeeper who notices patterns",
      archetype: "gatekeeper",
      traits: ["efficient", "polite", "sharp"],
    },
  },

  glossary: {
    trust: {
      term: "trust",
      definition:
        "A sense of emotional safety that lowers skepticism and makes disclosure easier.",
      sources: [1, 3, 4],
    },
    oversharing: {
      term: "oversharing",
      definition:
        "Revealing sensitive information too casually, too emotionally, or too early.",
      sources: [2, 3, 4],
    },
    credentialHarvesting: {
      term: "credential harvesting",
      definition:
        "Collecting badge details, access clues, or login information that can later be used to gain entry or impersonate someone.",
      sources: [1, 4],
    },
    confidentialInformation: {
      term: "confidential information",
      definition:
        "Sensitive details that should not be disclosed without proper need and verification.",
      sources: [4],
    },

    redFlags: {
      trust: {
        term: "trust",
        definition:
          "A sense of emotional safety that lowers skepticism and makes disclosure easier.",
        sources: [1, 3, 4],
      },
      oversharing: {
        term: "oversharing",
        definition:
          "Revealing sensitive information too casually, too emotionally, or too early.",
        sources: [2, 3, 4],
      },
      credentialHarvesting: {
        term: "credential harvesting",
        definition:
          "Collecting badge details, access clues, or login information that can later be used to gain entry or impersonate someone.",
        sources: [1, 4],
      },
      confidentialInformation: {
        term: "confidential information",
        definition:
          "Sensitive details that should not be disclosed without proper need and verification.",
        sources: [4],
      },
    },
  },

  state: {
    flags: {
      rexTrustsGemma: false,
      rexOvershared: false,
      badgeAccessed: false,
      laptopAccessed: false,
      cipherStolen: false,
      ivySuspicious: false,
    },
    score: {
      trust: 0,
      access: 0,
      suspicion: 0,
    },
  },

  startSceneId: "s00_after_hours",

  scenes: {
    s00_after_hours: {
      id: "s00_after_hours",
      title: "After-Hours Glow",
      location: "Private lounge • CyberSteel Executive Summit",
      image: afterHoursGlowImg,
      text: [
        "By the time the official conference lights dim, Rex has stopped treating Gemma like a stranger.",
        "The connection from the lobby bar has followed them into the private lounge, where the music is softer, the room is darker, and caution feels easier to misplace.",
        "Gemma knows the operation is entering its second phase.",
        "Act 1 was about first contact. Act 2 is about turning trust into access.",
      ],
      redFlags: ["trust", "credentialHarvesting"],
      ui: {
        showToast: {
          title: "Act 2: trust_me.exe",
          body: "The situationship deepens. Gemma’s goal is to use trust to get close enough to Rex’s badge, laptop, or confidential information about Cipher.",
          kind: "neutral",
        },
      },
      choices: [
        {
          id: "c00_overt",
          label: "Overt route: turn up the romance and make Rex feel chosen",
          next: "s01_overt_romance",
          effects: {
            flags: { rexTrustsGemma: true },
            score: { trust: 2, suspicion: 1 },
          },
        },
        {
          id: "c00_covert",
          label: "Covert route: keep it intimate, calm, and believable",
          next: "s01_covert_trust",
          effects: {
            flags: { rexTrustsGemma: true },
            score: { trust: 1 },
          },
        },
      ],
    },

    s01_overt_romance: {
      id: "s01_overt_romance",
      title: "Attention as Access",
      location: "Private lounge",
      image: attentionAsAccessImg,
      text: [
        "Gemma lets the chemistry become obvious.",
        "She laughs at Rex’s jokes, remembers tiny details, and makes him feel like the only person in the room who does not have to perform.",
        "Rex relaxes because the attention feels personal instead of strategic.",
        "That is the danger of trust. It can make a risky situation feel emotionally safe.",
      ],
      redFlags: ["trust", "oversharing"],
      ui: {
        showToast: {
          title: "Trust",
          body: "Trust can lower skepticism. In social engineering, emotional safety can become the doorway to unsafe disclosure.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c01_overt_preview",
          label: "Overt move: ask Rex for a private look at Cipher",
          next: "s02_private_preview_push",
          effects: {
            score: { access: 2, suspicion: 2 },
          },
        },
        {
          id: "c01_overt_confession",
          label:
            "Covert move: get him talking about why Cipher matters so much",
          next: "s02_rex_overshares",
          effects: {
            flags: { rexOvershared: true },
            score: { trust: 1, access: 1 },
          },
        },
      ],
    },

    s01_covert_trust: {
      id: "s01_covert_trust",
      title: "Soft Launch of Trust",
      location: "Quiet hotel corridor",
      image: softLaunchTrustImg,
      text: [
        "Gemma does not push. She listens.",
        "Rex talks more when he does not feel interrogated.",
        "She asks about the pressure of protecting a product everyone wants to see, then lets silence do the work.",
        "The questions sound caring, but they are shaped around access.",
      ],
      redFlags: ["trust", "confidentialInformation"],
      ui: {
        showToast: {
          title: "Confidential information",
          body: "Sensitive details do not always leak through obvious questions. Sometimes they come out through conversations that feel supportive.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c02_covert_laptop",
          label: "Subtly ask how often he has to check in on Cipher",
          next: "s02_laptop_habit",
          effects: {
            score: { access: 1 },
          },
        },
        {
          id: "c02_covert_badge",
          label: "Notice where he keeps his badge without asking about it",
          next: "s02_badge_observe",
          effects: {
            score: { access: 1, trust: 1 },
          },
        },
      ],
    },

    s02_private_preview_push: {
      id: "s02_private_preview_push",
      title: "The Private Preview",
      location: "Private lounge",
      image: privatePreviewImg,
      text: [
        '"You have to show me what everyone is whispering about," Gemma says.',
        "Rex laughs at first, but the request lands close to something protected.",
        "Gemma makes it sound playful, not professional. That is what makes the pressure harder to recognize.",
        "A private preview would expose confidential information, even if Rex thinks he is only impressing someone he trusts.",
      ],
      redFlags: ["trust", "confidentialInformation"],
      ui: {
        showToast: {
          title: "Confidential information",
          body: "Sensitive information can be exposed when someone treats access as a personal favor instead of a security decision.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c03_preview_push",
          label: "Overt move: keep pushing for the preview",
          next: "s03_laptop_access",
          effects: {
            flags: { laptopAccessed: true },
            score: { access: 2, suspicion: 2 },
          },
        },
        {
          id: "c03_preview_soften",
          label:
            "Covert move: soften the request and let Rex bring it up later",
          next: "s02_rex_overshares",
          effects: {
            flags: { rexOvershared: true },
            score: { trust: 1, access: 1 },
          },
        },
      ],
    },

    s02_rex_overshares: {
      id: "s02_rex_overshares",
      title: "What He Says Without Meaning To",
      location: "Private lounge",
      image: rexOversharesImg,
      text: [
        "Rex does not hand Gemma a password.",
        "He gives her something more believable: fragments.",
        "Investor pressure. A private Cipher preview. A laptop he keeps close because he does not trust anyone else with it.",
        "The details arrive wrapped in vulnerability, which makes them feel less like confidential information and more like intimacy.",
      ],
      redFlags: ["oversharing", "confidentialInformation"],
      choices: [
        {
          id: "c04_push_laptop",
          label: "Overt move: ask to see Cipher on his laptop",
          next: "s03_laptop_access",
          effects: {
            flags: { rexOvershared: true },
            score: { access: 2, suspicion: 2 },
          },
        },
        {
          id: "c04_wait_laptop",
          label: "Covert move: wait for him to check the laptop naturally",
          next: "s03_laptop_access",
          effects: {
            flags: { rexOvershared: true },
            score: { access: 1, trust: 1 },
          },
        },
      ],
    },

    s02_laptop_habit: {
      id: "s02_laptop_habit",
      title: "The Habit Loop",
      location: "Hotel elevator",
      image: habitLoopImg,
      text: [
        "Rex checks his phone, then his watch, then the slim laptop bag at his side.",
        "Gemma notices the pattern.",
        "He is protective of Cipher, but tired enough to confuse attention with safety.",
        "Habits reveal what people value, especially when trust makes them stop noticing who is watching.",
      ],
      redFlags: ["trust", "confidentialInformation"],
      choices: [
        {
          id: "c05_laptop_question",
          label: "Overt move: ask if Cipher is on the laptop",
          next: "s03_laptop_access",
          effects: {
            score: { access: 2, suspicion: 1 },
          },
        },
        {
          id: "c05_laptop_wait",
          label: "Covert move: wait until he opens it himself",
          next: "s03_laptop_access",
          effects: {
            score: { access: 1, trust: 1 },
          },
        },
      ],
    },

    s02_badge_observe: {
      id: "s02_badge_observe",
      title: "Access in Plain Sight",
      location: "Hotel corridor",
      image: accessInPlainSightImg,
      text: [
        "Rex moves through the hotel like someone used to doors opening for him.",
        "His badge, laptop bag, and phone stay close, but his attention does not.",
        "Gemma notices the pattern: what he checks, what he protects, and when he stops paying attention.",
        "Credential harvesting is not always about stealing a password. Sometimes it begins with collecting access clues and waiting for one careless moment.",
      ],
      redFlags: ["credentialHarvesting", "trust"],
      choices: [
        {
          id: "c06_access_overt",
          label:
            "Overt move: suggest they leave the lounge for somewhere quieter",
          next: "s03_laptop_access",
          effects: {
            score: { access: 2, suspicion: 1 },
          },
        },
        {
          id: "c06_access_covert",
          label: "Covert move: wait until he sets the laptop bag down",
          next: "s03_laptop_access",
          effects: {
            score: { access: 1, trust: 1 },
          },
        },
      ],
    },

    s03_laptop_access: {
      id: "s03_laptop_access",
      title: "Unlocked Moment",
      location: "Hotel suite",
      image: unlockedMomentImg,
      text: [
        "Rex opens the laptop to check one thing.",
        "One thing becomes several.",
        "A message preview, a dashboard label, a folder name, and the shape of a private system Gemma was never supposed to see.",
        "Confidential information does not need to be explained to be exposed.",
      ],
      redFlags: ["confidentialInformation", "oversharing"],
      choices: [
        {
          id: "c08_direct_access",
          label: "Overt move: ask him to show you the private Cipher preview",
          next: "s04_cipher_access",
          effects: {
            flags: { laptopAccessed: true },
            score: { access: 2, suspicion: 2 },
          },
        },
        {
          id: "c08_quiet_access",
          label: "Covert move: wait until he steps away from the laptop",
          next: "s04_cipher_access",
          effects: {
            flags: { laptopAccessed: true },
            score: { access: 1 },
          },
        },
      ],
    },

    s04_cipher_access: {
      id: "s04_cipher_access",
      title: "Cipher Opens",
      location: "Hotel suite • later",
      image: cipherOpensImg,
      text: [
        "Rex finally sleeps.",
        "The room is quiet except for the city below and the soft pulse of the laptop screen.",
        "Gemma moves with practiced calm.",
        "Trust, overshared context, access clues, and one unlocked moment come together.",
        "Cipher opens.",
      ],
      redFlags: ["trust", "credentialHarvesting", "confidentialInformation"],
      ui: {
        showToast: {
          title: "The breach",
          body: "No single moment caused the breach. Trust, oversharing, credential harvesting, and exposed confidential information combined into one compromise.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c09_copy_files",
          label: "Copy the Cipher files",
          next: "s05_limo_exit",
          effects: {
            flags: { cipherStolen: true },
            score: { access: 3 },
          },
        },
      ],
    },

    s05_limo_exit: {
      id: "s05_limo_exit",
      title: "End of Act 2: The Limo Pulls Away",
      location: "Hotel entrance • before sunrise",
      image: limoPullsAwayImg,
      text: [
        "By morning, Gemma is gone.",
        "The only things left behind are a lipstick mark on a glass, Rex’s jacket folded over a chair, and a laptop that looks exactly where he left it.",
        "Outside, a black limousine waits beneath the hotel lights.",
        "Gemma slides into the back seat, Rex’s access details tucked inside her clutch and Cipher’s stolen information already moving through an encrypted channel.",
        "The door closes. The limo pulls away.",
        "The situationship is over. The breach is just beginning.",
      ],
      redFlags: [
        "trust",
        "oversharing",
        "credentialHarvesting",
        "confidentialInformation",
      ],
      end: {
        outcome: "continue_to_act3",
        hook: "Cipher has been stolen. Act 3 shifts to Rex’s perspective as he discovers the breach and begins damage control.",
      },
      choices: [
        {
          id: "c10_act3",
          label: "Continue to Act 3: this_feels_real.txt",
          next: null,
        },
      ],
    },
  },
};

export default act2;