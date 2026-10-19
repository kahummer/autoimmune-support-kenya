/**
 * One-off setup for the Mega Walk and Run 2026 vendor and warrior sign-ups.
 *
 * Run createForms() once from script.google.com while signed in as the account
 * that should own the forms. It creates two Google Forms, each with its own
 * responses Sheet, and logs the IDs and entry IDs that the website's forms
 * (app/vendors/VendorForm.tsx, app/warriors/WarriorForm.tsx) post to.
 *
 * It also runs updateRegistrationDistances(), which switches the existing
 * registration form's Distance dropdown to the 2026 distances.
 */

const REGISTRATION_FORM_ID = "1S2AfMzQIfsiGB0z0cX0f3DfZNsSkhc77dGHM5Z5wRO4";
const DISTANCES = ["5 km", "10 km", "15 km", "21 km"];

const FORMS = {
  vendor: {
    title: "Mega Walk and Run 2026 – Vendor Sign-up",
    description:
      "Vendor stalls at the Mega Walk and Run, Sunday 22 November 2026, The Hub, Karen. Submitted from autoimmunesupportkenya.org/vendors.",
    questions: [
      ["business", "Business name", "text"],
      ["contact", "Contact person", "text"],
      ["phone", "Phone / WhatsApp", "text"],
      ["email", "Email", "text"],
      ["products", "What will you sell or showcase?", "paragraph"],
      ["package", "Package", "list", ["Bronze – KSh 15,000", "Silver – KSh 30,000", "Gold – KSh 50,000"]],
      ["notes", "Special requirements (power, space, etc.)", "paragraph", null, false],
      ["mpesaMessage", "M-Pesa confirmation message", "paragraph"],
      ["mpesaCode", "M-Pesa code", "text"],
      ["mpesaAmount", "Amount (KSh)", "text"],
    ],
  },
  warrior: {
    title: "Mega Walk and Run 2026 – Autoimmune Warrior Registration",
    description:
      "KSh 100 registration for autoimmune warriors. Proceeds support bereaved families of autoimmune patients. Submitted from autoimmunesupportkenya.org/warriors.",
    questions: [
      ["name", "Full name", "text"],
      ["age", "Age", "text"],
      ["phone", "Phone / WhatsApp", "text"],
      ["condition", "Autoimmune condition", "text"],
      ["yearDiagnosed", "Year diagnosed", "text"],
      ["medication", "Medication currently using", "paragraph"],
      ["mpesaMessage", "M-Pesa confirmation message", "paragraph"],
      ["mpesaCode", "M-Pesa code", "text"],
      ["mpesaAmount", "Amount (KSh)", "text"],
    ],
  },
};

function createForms() {
  const result = {};
  for (const [key, spec] of Object.entries(FORMS)) {
    result[key] = buildForm_(spec);
  }
  Logger.log(JSON.stringify(result, null, 2));
  updateRegistrationDistances();
}

function buildForm_(spec) {
  const form = FormApp.create(spec.title).setDescription(spec.description);
  form.setCollectEmail(false).setAcceptingResponses(true);

  const items = {};
  for (const [key, title, type, choices, required = true] of spec.questions) {
    let item;
    if (type === "paragraph") item = form.addParagraphTextItem();
    else if (type === "list") item = form.addListItem().setChoiceValues(choices);
    else item = form.addTextItem();
    item.setTitle(title).setRequired(required);
    items[key] = item;
  }

  const sheet = SpreadsheetApp.create(spec.title + " (Responses)");
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
  if (form.setPublished) form.setPublished(true);

  // Entry IDs differ from item IDs: read each one from a pre-filled link that
  // answers only that question.
  const entries = {};
  for (const [key, item] of Object.entries(items)) {
    const type = item.getType();
    const typed = type === FormApp.ItemType.LIST ? item.asListItem()
      : type === FormApp.ItemType.PARAGRAPH_TEXT ? item.asParagraphTextItem()
      : item.asTextItem();
    const value = type === FormApp.ItemType.LIST ? typed.getChoices()[0].getValue() : "x";
    const url = form.createResponse().withItemResponse(typed.createResponse(value)).toPrefilledUrl();
    entries[key] = "entry." + url.match(/entry\.(\d+)=/)[1];
  }

  return {
    title: spec.title,
    editUrl: form.getEditUrl(),
    publicUrl: form.getPublishedUrl(),
    sheetUrl: sheet.getUrl(),
    entries,
  };
}

function updateRegistrationDistances() {
  const form = FormApp.openById(REGISTRATION_FORM_ID);
  const item = form.getItems(FormApp.ItemType.LIST).find((i) => /distance/i.test(i.getTitle()));
  item.asListItem().setChoiceValues(DISTANCES);
  Logger.log("Distance options now: " + DISTANCES.join(", "));
}
