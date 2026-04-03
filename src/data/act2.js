// src/data/act2.js
// Act 2: trust_me.exe, “The Situationship”
//
// IMPORTANT:
// This file is DATA ONLY. No JSX. No Chakra components.
// Assumes renderer supports: title, location, text[], redFlags[], ui.showToast, choices[].
// Tone: intimacy as attack surface; trust used to bypass process.

const act2 = {
  meta: {
    actId: "act2",
    title: "trust_me.exe",
    subtitle: "The Situationship",
    theme:
      "after-hours access • blurred boundaries • trust escalation • intimate manipulation",
    setting: {
      city: "Las Vegas",
      venue: "CyberSteel Executive Summit • VIP floors",
      vibe:
        "A little chemistry, a little ambiguity, and the slow collapse of good judgment",
    },
    version: 2,
  },

  characters: {
    gemma: {
      id: "gemma",
      name: "Gemma",
      publicBio: "Independent security consultant (conference attendee)",
      hiddenBio: "Operative gathering access for a hostile sponsor",
      archetype: "charismatic social engineer",
      traits: ["charming", "adaptive", "patient"],
    },
    rex: {
      id: "rex",
      name: "Rex Vale",
      publicBio: "Billionaire tech executive, CEO of CyberSteel",
      hiddenBio:
        "Protective in theory, careless when emotionally flattered",
      archetype: "high-value target",
      traits: ["confident", "busy", "lonely in expensive ways"],
    },
    ivy: {
      id: "ivy",
      name: "Ivy",
      publicBio: "CyberSteel EA / conference ops lead",
      hiddenBio: "Process-minded and increasingly suspicious",
      archetype: "gatekeeper",
      traits: ["sharp", "calm", "difficult to manipulate"],
    },
    marco: {
      id: "marco",
      name: "Marco",
      publicBio: "Security staff",
      hiddenBio:
        "Trying to enforce rules in a culture that rewards exceptions",
      archetype: "overloaded security",
      traits: ["stern", "outnumbered"],
    },
  },

  glossary: {
    situationship:
      "A relationship with emotional access but ambiguous boundaries — ideal conditions for manipulation.",
    trustLoop:
      "A cycle where small favors create familiarity, and familiarity gets mistaken for legitimacy.",
    mfaFatigue:
      "Repeated prompts or interruptions that pressure a user into approving access without proper verification.",
    socialEngineering:
      "Manipulating people through trust, emotion, and social interaction to gain access, influence behavior, or expose confidential information.",
    humanVulnerability:
      "The tendency for attraction, distraction, ego, loneliness, or urgency to weaken judgment.",
    breach:
      "A compromise of information, access, or security controls.",
    warningFlags:
      "Small signs that something is off, even when the moment still feels exciting or harmless.",
    redFlags: {
      trust:
        "A sense of emotional safety that lowers skepticism and speeds disclosure.",
      urgency:
        "Pressure to act quickly before a person has time to verify or think clearly.",
      luring:
        "Using attraction, attention, convenience, or intimacy to draw someone deeper into risk.",
      baiting:
        "Offering something tempting, flattering, or easy enough to override caution.",
      credentialHarvesting:
        "Trying to obtain passwords, badge IDs, tokens, approvals, or access-enabling details.",
      oversharing:
        "Revealing sensitive information casually, emotionally, or too early.",
      confirmationBias:
        "Interpreting events the way you want them to be true rather than the way they are.",
      socialProof:
        "Assuming something is safe because someone familiar seems comfortable with it first.",
      confidentialInformation:
        "Sensitive information that should not be disclosed casually or without verification.",
      sharingAuthorizationCodes:
        "Giving approvals, codes, prompts, or login confirmations to someone who has not actually been verified.",
      misinformation:
        "False or misleading information that distorts what is really happening.",
    },
  },

  state: {
    flags: {
      rexTrusting: false,
      ivyWatching: false,
      gotVipAccess: false,
      sawPrivateSessionDoor: false,
      gotDeviceMoment: false,
      gotBadgeScanChance: false,
      triggeredMfa: false,
      capturedApproval: false,
      rexSuspicious: false,
    },
    score: { heat: 0, risk: 0, security: 0 },
  },

  startSceneId: "s00_after_hours",

  scenes: {
    s00_after_hours: {
      id: "s00_after_hours",
      title: "After-Hours Access",
      location: "VIP lounge • late evening",
      text: [
        "Vegas gets softer after dark, and so do boundaries.",
        "Rex waves Gemma past the velvet rope with the confidence of someone who has already decided she belongs beside him.",
        "No badge check. No guest log. Just trust, attraction, and a one-time exception beginning to look a lot like an attack vector.",
      ],
      redFlags: ["trust", "luring", "warningFlags"],
      ui: {
        showToast: {
          title: "Act 2: trust_me.exe",
          body:
            "The danger now is not first contact. It is trust, familiarity, and the slow collapse of good judgment.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c00_follow",
          label: "Go with the flow and let Rex normalize the exception",
          next: "s01_vip_lounge",
          effects: {
            flags: { gotVipAccess: true },
            score: { risk: 2, heat: 1 },
          },
        },
        {
          id: "c00_pause",
          label: "Notice the process failure and clock who saw it",
          next: "s01_notice_ivy",
          effects: { score: { security: 1, risk: 1 } },
        },
      ],
    },

    s01_notice_ivy: {
      id: "s01_notice_ivy",
      title: "The Person Who Notices",
      location: "VIP lounge entrance",
      text: [
        "Ivy looks up from her tablet as Gemma passes through.",
        "Her face does not change, but that is almost worse.",
        "Some people flirt. Some people keep timelines.",
      ],
      redFlags: ["warningFlags"],
      choices: [
        {
          id: "c01_playcool",
          label: "Play it cool and stay close to Rex",
          next: "s01_vip_lounge",
          effects: {
            flags: { ivyWatching: true },
            score: { heat: 1, risk: 1 },
          },
        },
        {
          id: "c01_withdraw",
          label: "Withdraw before the exception becomes memorable",
          next: "s02_text_followup",
          effects: { score: { security: 2 } },
        },
      ],
    },

    s01_vip_lounge: {
      id: "s01_vip_lounge",
      title: "Soft Launch of Trust",
      location: "VIP lounge",
      text: [
        "Rex is different in private — looser at the mouth, warmer in the eyes, easier to read when the room goes quiet around them.",
        "Gemma leans in, and the space between them starts to feel charged enough to excuse bad decisions.",
        "That is the strange thing about trust: it often arrives dressed as chemistry, long before verification ever catches up.",
      ],
      redFlags: ["trust", "oversharing", "confirmationBias"],
      choices: [
        {
          id: "c02_personal",
          label:
            "Make it personal: become the easiest person in the room to talk to",
          next: "s02_emotional_sync",
          effects: { flags: { rexTrusting: true }, score: { heat: 2 } },
        },
        {
          id: "c02_operational",
          label: "Steer gently toward tomorrow’s private session",
          next: "s02_private_preview",
          effects: { score: { risk: 1, heat: 1 } },
        },
      ],
    },

    s02_emotional_sync: {
      id: "s02_emotional_sync",
      title: "Emotional Whitelisting",
      location: "VIP lounge • side seating",
      text: [
        "Gemma listens the way people remember later, long after they have forgotten the exact words.",
        "Rex starts confiding in layers: investor pressure, leaks, loyalty, fatigue — all the things that sound more intimate in a dim room and too honest at close range.",
        "By the time his hand lingers and the conversation loses its professional distance, the warning flags are already blurred by trust, social proof, and the feeling that this connection must mean something real.",
      ],
      redFlags: ["trust", "oversharing", "socialProof"],
      ui: {
        showToast: {
          title: "Red flag: emotional trust ≠ security trust",
          body:
            "Feeling close to someone does not make them verified, authorized, or safe.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c03_text",
          label:
            "Suggest moving the conversation off-platform: “Text me?”",
          next: "s02_text_followup",
          effects: { score: { risk: 2, heat: 1 } },
        },
        {
          id: "c03_walk",
          label: "Offer to walk with him to tomorrow’s preview room",
          next: "s02_private_preview",
          effects: {
            flags: { sawPrivateSessionDoor: true },
            score: { heat: 1, risk: 1 },
          },
        },
      ],
    },

    s02_private_preview: {
      id: "s02_private_preview",
      title: "Tomorrow’s Room, Tonight’s Mistake",
      location: "Hallway outside Cipher Private Preview",
      text: [
        "The room is dark now, but the access panel is live.",
        "Rex gestures vaguely while talking, close enough for Gemma to see how the badge reader is positioned.",
        "He says too much without meaning to. Gemma learns enough without asking directly. That is how social engineering often works best: quiet, patient, and wrapped in trust.",
      ],
      redFlags: ["oversharing", "credentialHarvesting", "trust"],
      choices: [
        {
          id: "c04_badge",
          label: "Joke about how elite the badge access must be",
          next: "s03_badge_access",
          effects: { score: { risk: 2, heat: 1 } },
        },
        {
          id: "c04_patience",
          label: "Say nothing and let proximity do the work",
          next: "s03_device_drop",
          effects: { score: { security: 1, heat: 1 } },
        },
      ],
    },

    s02_text_followup: {
      id: "s02_text_followup",
      title: "Private Channel Energy",
      location: "Later that night • messages",
      text: [
        "The first boundary shift is always the smallest.",
        "Conference app becomes texting. Official channel becomes personal channel. Professional distance becomes something warmer and far less secure.",
        "Rex sends a smiling message and a screenshot he should not have shared.",
      ],
      redFlags: ["oversharing", "trust", "warningFlags"],
      ui: {
        showToast: {
          title: "Red flag: blurred channels",
          body:
            "Sensitive coordination often becomes less secure when it moves into personal spaces that feel more intimate than official.",
          kind: "warning",
        },
      },
      choices: [
        {
          id: "c05_helpful",
          label: "Be helpful: “You can send it here, I’ll take a look.”",
          next: "s03_file_share",
          effects: { score: { risk: 2, heat: 1 } },
        },
        {
          id: "c05_meet",
          label: "Suggest meeting before the preview tomorrow",
          next: "s03_coffee_exception",
          effects: { flags: { rexTrusting: true }, score: { heat: 2 } },
        },
      ],
    },

    s03_badge_access: {
      id: "s03_badge_access",
      title: "Badge Chemistry",
      location: "Private preview hallway",
      text: [
        "Gemma makes it sound playful, not pointed.",
        "Rex lifts the badge reflexively while answering, giving away more than the words do.",
        "People protect secrets better than they protect the objects that unlock them.",
      ],
      redFlags: ["credentialHarvesting", "oversharing"],
      choices: [
        {
          id: "c06_scan",
          label:
            "Close distance and try to glimpse or capture the badge details",
          next: "s04_glimpse_success",
          effects: {
            flags: { gotBadgeScanChance: true },
            score: { risk: 3 },
          },
        },
        {
          id: "c06_backoff",
          label: "Back off before curiosity becomes obvious",
          next: "s03_device_drop",
          effects: { score: { security: 1 } },
        },
      ],
    },

    s03_device_drop: {
      id: "s03_device_drop",
      title: "The Phone on the Table",
      location: "VIP hallway bench",
      text: [
        "Rex sets his phone down for half a second to answer another executive.",
        "Half a second is forever if someone is ready for it.",
        "The screen lights with a push prompt and a preview notification, and suddenly one intimate night has a very technical afterlife.",
      ],
      redFlags: ["credentialHarvesting", "warningFlags"],
      choices: [
        {
          id: "c07_touch",
          label:
            "Use the moment: read what you can before he turns back",
          next: "s04_mfa_prompt",
          effects: { flags: { gotDeviceMoment: true }, score: { risk: 3 } },
        },
        {
          id: "c07_ignore",
          label:
            "Ignore the phone and keep building trust instead",
          next: "s03_coffee_exception",
          effects: { score: { heat: 1, security: 1 } },
        },
      ],
    },

    s03_file_share: {
      id: "s03_file_share",
      title: "Can You Look at This?",
      location: "Text thread",
      text: [
        "Rex sends a file preview without checking what metadata or context travels with it.",
        "Gemma responds like someone helpful, calm, familiar — exactly the kind of person people stop verifying once trust has settled in.",
        "The most effective social engineering rarely feels hostile while it is happening.",
      ],
      redFlags: ["oversharing", "trust", "confirmationBias"],
      choices: [
        {
          id: "c08_link",
          label:
            "Send a polished link: “Upload it here, easier to review.”",
          next: "s04_link_lure",
          effects: { score: { risk: 3, heat: 1 } },
        },
        {
          id: "c08_wait",
          label: "Do not push. Let him volunteer more tomorrow.",
          next: "s03_coffee_exception",
          effects: { score: { security: 1, heat: 1 } },
        },
      ],
    },

    s03_coffee_exception: {
      id: "s03_coffee_exception",
      title: "One-Time Exception",
      location: "Morning of the preview • coffee station",
      text: [
        "Morning gives everything a softer edge, including the mistakes people are about to justify.",
        "Rex is underslept, distracted, and still carrying the afterglow of a night that felt more personal than it should have.",
        "That is when Gemma asks for something small enough to sound harmless.",
      ],
      redFlags: ["urgency", "trust", "warningFlags"],
      choices: [
        {
          id: "c09_plusone",
          label:
            "Ask to be brought in “just for a minute” before the session starts",
          next: "s04_plus_one",
          effects: { score: { risk: 3, heat: 1 } },
        },
        {
          id: "c09_verify",
          label:
            "Make him feel safe first, then ask how guest access is normally handled",
          next: "s04_process_exposed",
          effects: { score: { risk: 1, security: 1 } },
        },
      ],
    },

    s04_mfa_prompt: {
      id: "s04_mfa_prompt",
      title: "Approve?",
      location: "VIP hallway",
      text: [
        "The phone shows an approval prompt tied to a secure system.",
        "Gemma does not need the password if she can influence the approval.",
        "Modern attacks still run on old emotions: trust, haste, familiarity, and the false comfort of thinking one small tap cannot possibly become a breach.",
      ],
      redFlags: [
        "sharingAuthorizationCodes",
        "urgency",
        "confirmationBias",
      ],
      end: {
        outcome: "high_risk",
        hook:
          "You reached the point where one careless tap could become unauthorized access.",
      },
      choices: [
        {
          id: "c10_restart",
          label: "Restart Act 2",
          next: null,
        },
      ],
    },

    s04_glimpse_success: {
      id: "s04_glimpse_success",
      title: "Too Close to the Keys",
      location: "Private preview hallway",
      text: [
        "Gemma gets what she came for: a better look at the thing that opens the door.",
        "Not the secret itself. Just the path to it.",
        "That is often how breaches begin — not with the vault, but with the badge, the habit, the gesture, the unguarded second.",
      ],
      redFlags: ["credentialHarvesting", "warningFlags"],
      end: {
        outcome: "access_gain",
        hook:
          "You gathered access-enabling details without directly asking for credentials.",
      },
      choices: [
        {
          id: "c11_restart",
          label: "Restart Act 2",
          next: null,
        },
      ],
    },

    s04_link_lure: {
      id: "s04_link_lure",
      title: "Trust Me, It’s Easier",
      location: "Text thread",
      text: [
        "The lure works because it sounds convenient, not suspicious.",
        "A polished page, a familiar tone, and just enough trust to make caution feel rude — most phishing succeeds by feeling ordinary.",
        "Rex hesitates for exactly one beat too few.",
      ],
      redFlags: ["luring", "credentialHarvesting", "misinformation"],
      end: {
        outcome: "phish_path",
        hook:
          "You turned personal trust into a delivery channel for a phishing attempt.",
      },
      choices: [
        {
          id: "c12_restart",
          label: "Restart Act 2",
          next: null,
        },
      ],
    },

    s04_plus_one: {
      id: "s04_plus_one",
      title: "Just This Once",
      location: "Outside Cipher Private Preview",
      text: [
        "Rex hesitates because he knows better. He says yes because he wants to keep being the version of himself Gemma sees.",
        "What happened between them has made the request feel personal, flattering, almost inevitable.",
        "That is how a breach begins: not always with force, but with trust, luring, and one choice made in the glow of the wrong night.",
      ],
      redFlags: ["trust", "luring", "urgency"],
      end: {
        outcome: "physical_access",
        hook:
          "You exploited ambiguity and affection to bypass a restricted-access policy.",
      },
      choices: [
        {
          id: "c13_restart",
          label: "Restart Act 2",
          next: null,
        },
      ],
    },

    s04_process_exposed: {
      id: "s04_process_exposed",
      title: "Tell Me the Normal Way",
      location: "Coffee station",
      text: [
        "Asked the right way, people often explain the system meant to stop them.",
        "Rex outlines guest handling, badge validation, and who can authorize exceptions.",
        "He thinks he is being reassuring. Gemma hears a map.",
      ],
      redFlags: ["oversharing", "confidentialInformation"],
      end: {
        outcome: "neutral_plus",
        hook:
          "You did not force access — you got the process from the person who benefits from it.",
      },
      choices: [
        {
          id: "c14_restart",
          label: "Restart Act 2",
          next: null,
        },
      ],
    },
  },
};

export default act2;