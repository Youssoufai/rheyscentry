"use client";

import { useMemo, useState } from "react";
import { dealership } from "@/lib/dealership";
import { enquiryBudgets, categories } from "@/lib/vehicles";
import WhatsAppEnquiry from "./WhatsAppEnquiry";

const categoryOptions = [
  ...categories.map((item) => ({ id: item.id, label: item.label })),
  { id: "unsure", label: "Not sure yet" },
];

const emptyValues = {
  name: "",
  phone: "",
  category: "",
  budget: "",
  message: "",
};

function validate(values) {
  const errors = {};
  const name = values.name.trim();
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (name.length < 2) errors.name = "Enter your name.";
  else if (name.length > 80) errors.name = "Use 80 characters or fewer.";

  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = "Enter a contact number with 7 to 15 digits.";
  }

  if (!categoryOptions.some((item) => item.id === values.category)) {
    errors.category = "Choose a vehicle category.";
  }

  if (!enquiryBudgets.some((item) => item.id === values.budget)) {
    errors.budget = "Choose a budget range.";
  }

  if (values.message.trim().length > 600) {
    errors.message = "Keep the note to 600 characters.";
  }

  return errors;
}

function presetMessage(vehicle) {
  return `I would like to enquire about the demonstration listing: ${vehicle.year} ${vehicle.make} ${vehicle.model}.`;
}

export default function EnquiryForm({ preset = null, id = "enquiry" }) {
  const initial = useMemo(
    () => ({
      ...emptyValues,
      category: preset?.category || "",
      message: preset ? presetMessage(preset) : "",
    }),
    [preset],
  );
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submission, setSubmission] = useState(null);

  const update = (key) => (event) => {
    const next = event.target.value;
    setValues((current) => ({ ...current, [key]: next }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmission({
      name: values.name.trim(),
      phone: values.phone.trim(),
      category: values.category,
      budget: values.budget,
      message: values.message.trim(),
    });
  };

  if (submission) {
    const category = categoryOptions.find((item) => item.id === submission.category)?.label;
    const budget = enquiryBudgets.find((item) => item.id === submission.budget)?.label;
    const note = [
      `Hello ${dealership.name}, my name is ${submission.name}.`,
      `Contact number: ${submission.phone}.`,
      `Preferred category: ${category}.`,
      `Budget: ${budget}.`,
      submission.message ? submission.message : null,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div id={id} role="status" className="scroll-mt-28 border border-white/10 bg-ink px-5 py-8 sm:px-8">
        <p className="eyebrow">Noted on this screen</p>
        <h3 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
          Thank you, {submission.name}.
        </h3>
        <p className="mt-5 max-w-xl text-sm leading-7 text-mist">
          Nothing was sent. This demonstration has no enquiry inbox, so the note exists only
          in this browser and disappears when you leave or write another one.
        </p>
        <dl className="mt-8 max-w-xl text-sm">
          {[
            ["Name", submission.name],
            ["Contact number", submission.phone],
            ["Category", category],
            ["Budget", budget],
            ["Message", submission.message || "None"],
          ].map(([label, value]) => (
            <div key={label} className="grid grid-cols-[8rem_1fr] gap-4 border-t border-white/10 py-3">
              <dt className="text-[0.68rem] tracking-[0.16em] uppercase text-silver">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppEnquiry message={note} label="Prepare a WhatsApp note" className="btn btn-light w-full sm:w-auto" />
          <button
            type="button"
            className="btn btn-ghost w-full sm:w-auto"
            onClick={() => {
              setSubmission(null);
              setValues(initial);
              setErrors({});
            }}
          >
            Write another note
          </button>
        </div>
      </div>
    );
  }

  return (
    <form id={id} className="scroll-mt-28" onSubmit={onSubmit} noValidate>
      {preset ? (
        <p className="mb-6 text-sm leading-7 text-mist">
          Regarding the demonstration listing for the {preset.year} {preset.make} {preset.model}.
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name} id={`${id}-name`}>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            className="field"
          />
        </Field>
        <Field label="Contact number" error={errors.phone} id={`${id}-phone`}>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={update("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
            className="field"
          />
        </Field>
        <Field label="Preferred category" error={errors.category} id={`${id}-category`}>
          <select
            id={`${id}-category`}
            name="category"
            value={values.category}
            onChange={update("category")}
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? `${id}-category-error` : undefined}
            className="field"
          >
            <option value="">Select a category</option>
            {categoryOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget range" error={errors.budget} id={`${id}-budget`}>
          <select
            id={`${id}-budget`}
            name="budget"
            value={values.budget}
            onChange={update("budget")}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? `${id}-budget-error` : undefined}
            className="field"
          >
            <option value="">Select a budget</option>
            {enquiryBudgets.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field label="Message, if you wish" error={errors.message} id={`${id}-message`} optional>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={4}
            value={values.message}
            onChange={update("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${id}-message-error` : undefined}
            className="field resize-y"
          />
        </Field>
      </div>

      <p className="mt-6 max-w-xl text-xs leading-6 text-silver">
        Submitting keeps the note on this page. It does not email {dealership.name}, and it is not stored.
      </p>

      <button type="submit" className="btn btn-light mt-6 w-full sm:w-auto">
        Submit enquiry
      </button>
    </form>
  );
}

function Field({ label, error, id, optional = false, children }) {
  return (
    <label className="block" htmlFor={id}>
      <span className="text-[0.68rem] tracking-[0.2em] uppercase text-silver">
        {label}
        {optional ? "" : " *"}
      </span>
      {children}
      {error ? (
        <span id={`${id}-error`} className="mt-2 block text-sm text-mist" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
