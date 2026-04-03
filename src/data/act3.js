// src/data/act3.js
// Act 3: this_feels_real.txt, “Damage Control”
//
// IMPORTANT:
// This file is DATA ONLY. No JSX. No Chakra components.
// Matches the same general structure/feel as act1.js and act2.js.

const act3 = {
    meta: {
      actId: "act3",
      title: "this_feels_real.txt",
      subtitle: "Damage Control",
      theme: "fallout • urgency • confusion • consequence",
      setting: {
        city: "Las Vegas",
        venue: "CyberSteel Executive Summit • backstage corridors, ops rooms, and the aftermath",
        vibe: "The charm is gone. The consequences are not.",
      },
      version: 1,
    },
  
    characters: {
      gemma: {
        id: "gemma",
        name: "Gemma",
        publicBio: "Independent security consultant (conference attendee)",
        hiddenBio: "Operative exploiting emotional trust for access and information",
        archetype: "charismatic social engineer",
        traits: ["calm", "convincing", "strategic"],
      },
      rex: {
        id: "rex",
        name: "Rex Vale",
        publicBio: "Billionaire tech executive, CEO of CyberSteel",
        hiddenBio: "Now caught between embarrassment, panic, and damage control",
        archetype: "compromised target",
        traits: ["shaken", "defensive", "image-conscious"],
      },
      ivy: {
        id: "ivy",
        name: "Ivy",
        publicBio: "CyberSteel EA / conference ops lead",
        hiddenBio: "The first person to recognize that something is wrong",
        archetype: "gatekeeper turned incident coordinator",
        traits: ["sharp", "controlled", "unimpressed"],
      },
      marco: {
        id: "marco",
        name: "Marco",
        publicBio: "Security staff (badge checks / VIP entrance)",
        hiddenBio: "Now dealing with the consequences of a culture that normalized exceptions",
        archetype: "overloaded security",
        traits: ["tired", "blunt"],
      },
    },
  
    glossary: {
      incidentResponse:
        "The process of identifying, containing, investigating, and recovering from a security incident.",
      containment:
        "Immediate actions taken to prevent a compromise from getting worse.",
      socialProof:
        "A psychological effect where people assume a situation is safe because others appear to accept it.",
      redFlags: {
        urgency: "Pushing immediate action before verification.",
        shamePressure:
          "Using embarrassment or fear of consequences to keep someone from reporting.",
        authority: "Invoking status or image to avoid scrutiny.",
        oversharing: "Revealing sensitive details casually or emotionally.",
        outOfBand:
          "Trying to handle a security problem through private or unofficial channels.",
        pretexting: "Using a plausible story to redirect, delay, or manipulate.",
        reciprocity: "Leaning on kindness or emotional debt to gain compliance.",
        exceptionAbuse:
          "Treating policy as optional because the situation feels personal.",
      },
    },
  
    state: {
      flags: {
        rexPanicking: false,
        ivyEscalated: false,
        triedPrivateFix: false,
        containedQuickly: false,
        mediaRisk: false,
        evidenceLost: false,
        gemmaStillInside: false,
      },
      score: { heat: 0, risk: 0, security: 0 },
    },
  
    startSceneId: "s00_something_off",
  
    scenes: {
      s00_something_off: {
        id: "s00_something_off",
        title: "Something Feels Off",
        location: "Private preview floor • minutes later",
        text: [
          "A skipped check. A strange prompt. A file where it shouldn’t be.",
          "Nothing dramatic. Just enough wrongness to make your pulse notice before your brain does.",
          "Rex looks at his phone. Ivy looks at Rex. The room changes temperature.",
        ],
        redFlags: [],
        ui: {
          showToast: {
            title: "Act 3: this_feels_real.txt",
            body: "The breach is no longer hypothetical. Now the question is what happens next.",
            kind: "neutral",
          },
        },
        choices: [
          {
            id: "c00_tell_ivy",
            label: "Tell Ivy immediately",
            next: "s01_escalate_fast",
            effects: { score: { security: 2 } },
          },
          {
            id: "c00_handle_private",
            label: "Try to handle it quietly first",
            next: "s01_private_fix",
            effects: { score: { risk: 2, heat: 1 } },
          },
        ],
      },
  
      s01_escalate_fast: {
        id: "s01_escalate_fast",
        title: "Say It Out Loud",
        location: "Outside the private preview room",
        text: [
          "Ivy does not overreact. That’s how you know she’s good.",
          "She asks the right questions in the right order: what happened, what was clicked, what was shared, what changed.",
          "Incident response is less glamorous than denial, but a lot more useful.",
        ],
        redFlags: [],
        ui: {
          showToast: {
            title: "Defense: report early",
            body: "Fast reporting improves containment, preserves evidence, and reduces harm.",
            kind: "success",
          },
        },
        choices: [
          {
            id: "c01_lockdown",
            label: "Contain first: revoke access, alert security, preserve evidence",
            next: "s02_containment",
            effects: {
              flags: { ivyEscalated: true, containedQuickly: true },
              score: { security: 3 },
            },
          },
          {
            id: "c01_image",
            label: "Ask Ivy to keep it discreet because of optics",
            next: "s02_optics_pressure",
            effects: { score: { risk: 2, heat: 1 } },
          },
        ],
      },
  
      s01_private_fix: {
        id: "s01_private_fix",
        title: "Keep This Between Us",
        location: "Side hallway",
        text: [
          "Rex lowers his voice like privacy can still fix this.",
          "He says the line people always say when they are scared: “Let’s not make this bigger than it is.”",
          "That sentence has probably made every breach bigger than it had to be.",
        ],
        redFlags: ["outOfBand", "shamePressure", "authority"],
        ui: {
          showToast: {
            title: "Red flag: private incident handling",
            body: "Security events should go into official response channels, not secret side conversations.",
            kind: "warning",
          },
        },
        choices: [
          {
            id: "c02_pushreport",
            label: "Push him to report it properly",
            next: "s01_escalate_fast",
            effects: { score: { security: 2 } },
          },
          {
            id: "c02_cleanup",
            label: "Try to delete evidence and 'clean it up'",
            next: "s02_evidence_loss",
            effects: {
              flags: { triedPrivateFix: true, evidenceLost: true },
              score: { risk: 3 },
            },
          },
        ],
      },
  
      s02_containment: {
        id: "s02_containment",
        title: "Containment in Real Time",
        location: "Ops room",
        text: [
          "Ivy moves fast without moving messy.",
          "Badges get checked. Sessions get locked. Logs get preserved. Marco gets pulled into the loop.",
          "Nobody likes the look of a real incident. Everybody likes the aftermath of ignoring one even less.",
        ],
        redFlags: [],
        choices: [
          {
            id: "c03_rexhonest",
            label: "Be fully honest about every exception and interaction",
            next: "s03_truth_hurts",
            effects: { score: { security: 2 } },
          },
          {
            id: "c03_rexminimize",
            label: "Minimize what happened to protect Rex’s image",
            next: "s03_minimize_story",
            effects: { score: { risk: 2, heat: 1 } },
          },
        ],
      },
  
      s02_optics_pressure: {
        id: "s02_optics_pressure",
        title: "Optics vs. Reality",
        location: "Outside ops room",
        text: [
          "Rex is already thinking like a headline, not a responder.",
          "Ivy’s face hardens by exactly one degree.",
          "A breach doesn’t become less real because it becomes less public.",
        ],
        redFlags: ["authority", "shamePressure"],
        choices: [
          {
            id: "c04_escalate_anyway",
            label: "Escalate anyway",
            next: "s02_containment",
            effects: { score: { security: 2 } },
          },
          {
            id: "c04_wait",
            label: "Wait and see if it blows over",
            next: "s03_delay_costs",
            effects: { score: { risk: 3 } },
          },
        ],
      },
  
      s02_evidence_loss: {
        id: "s02_evidence_loss",
        title: "Delete, Deny, Regret",
        location: "Rex’s phone and inbox",
        text: [
          "Messages disappear. Logs don’t.",
          "The instinct to hide embarrassment just destroyed useful evidence.",
          "Now the incident is harder to understand, harder to contain, and harder to explain.",
        ],
        redFlags: ["shamePressure", "outOfBand"],
        choices: [
          {
            id: "c05_confess",
            label: "Confess and escalate before more damage is done",
            next: "s02_containment",
            effects: { score: { security: 1 } },
          },
          {
            id: "c05_commit",
            label: "Double down and hope nobody notices",
            next: "s03_delay_costs",
            effects: { score: { risk: 3, heat: 1 } },
          },
        ],
      },
  
      s03_truth_hurts: {
        id: "s03_truth_hurts",
        title: "The Honest Timeline",
        location: "Ops room • whiteboard and cold coffee",
        text: [
          "It is humiliating. It is also useful.",
          "The team maps the chain: after-hours access, private texting, oversharing, proximity, exceptions.",
          "Every awkward detail becomes defensive intelligence.",
        ],
        redFlags: [],
        ui: {
          showToast: {
            title: "Defense: tell the whole story",
            body: "Accurate timelines help investigators understand how trust was exploited.",
            kind: "success",
          },
        },
        choices: [
          {
            id: "c06_locklessons",
            label: "Capture lessons learned and notify the right people",
            next: "s04_good_end",
            effects: { score: { security: 3 } },
          },
        ],
      },
  
      s03_minimize_story: {
        id: "s03_minimize_story",
        title: "Edited for Reputation",
        location: "Ops room",
        text: [
          "The story gets cleaned up before the systems do.",
          "A vague timeline protects egos and weakens the response.",
          "The technical damage may be containable. The cultural damage is the part that lingers.",
        ],
        redFlags: ["authority", "oversharing"],
        choices: [
          {
            id: "c07_correct",
            label: "Correct the record and be honest",
            next: "s03_truth_hurts",
            effects: { score: { security: 2 } },
          },
          {
            id: "c07_keepspinning",
            label: "Keep spinning it",
            next: "s04_bad_end",
            effects: { score: { risk: 3 } },
          },
        ],
      },
  
      s03_delay_costs: {
        id: "s03_delay_costs",
        title: "Time Is a Threat Actor",
        location: "Summit floor • one hour later",
        text: [
          "Delay always feels passive. It never is.",
          "The longer a compromised situation sits unreported, the more room it has to spread, confuse, and calcify.",
          "By the time action starts, the story is already harder to control.",
        ],
        redFlags: ["urgency", "shamePressure"],
        choices: [
          {
            id: "c08_escalate_late",
            label: "Escalate late",
            next: "s04_mixed_end",
            effects: { score: { security: 1, risk: 1 } },
          },
          {
            id: "c08_keepwaiting",
            label: "Keep waiting",
            next: "s04_bad_end",
            effects: { score: { risk: 3 } },
          },
        ],
      },
  
      s04_good_end: {
        id: "s04_good_end",
        title: "Damage Controlled",
        location: "Ops room • post-incident",
        text: [
          "It is not clean, but it is contained.",
          "Access is reviewed. Policies get sharper. Rex looks like someone who finally understands what 'just this once' can cost.",
          "The breach became a lesson before it became a catastrophe.",
        ],
        redFlags: [],
        end: {
          outcome: "best_practice",
          hook: "Fast escalation, honest reporting, and real containment reduce long-term damage.",
        },
        choices: [
          {
            id: "c09_restart",
            label: "Restart Act 3",
            next: null,
          },
        ],
      },
  
      s04_mixed_end: {
        id: "s04_mixed_end",
        title: "Contained, But Late",
        location: "Ops room • post-incident",
        text: [
          "They got there eventually.",
          "Some damage was contained. Some evidence was blurred by delay. Some trust won’t recover on the same timeline as the systems.",
          "Late reporting is better than never. It is still worse than immediate truth.",
        ],
        redFlags: [],
        end: {
          outcome: "mixed",
          hook: "Delays make incidents harder to contain, even when the right people eventually get involved.",
        },
        choices: [
          {
            id: "c10_restart",
            label: "Restart Act 3",
            next: null,
          },
        ],
      },
  
      s04_bad_end: {
        id: "s04_bad_end",
        title: "This Feels Real",
        location: "Conference floor • rumors, screens, and silence",
        text: [
          "The charm is gone now. All that’s left is consequence.",
          "A preventable incident has become a public one, a technical one, and a human one.",
          "Somebody will write a timeline later. Everybody in it will wish they had made a different choice sooner.",
        ],
        redFlags: ["urgency", "authority", "shamePressure"],
        end: {
          outcome: "worst_case",
          hook: "Delays, secrecy, and reputation management can turn a manageable incident into a broader failure.",
        },
        choices: [
          {
            id: "c11_restart",
            label: "Restart Act 3",
            next: null,
          },
        ],
      },
    },
  };
  
  export default act3;