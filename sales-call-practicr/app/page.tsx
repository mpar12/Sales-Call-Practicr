"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const CALL_TYPES = [
  { label: "Discovery Call", value: "discovery" },
  { label: "Cold Call", value: "cold" },
];

const REQUIRED_MESSAGE = "Required";

export default function Home() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    callType: "",
    scenario: "",
    buyerPersona: "",
    productDescription: "",
  });

  const isComplete = useMemo(() => {
    return Object.values(formState).every((value) => value.trim().length > 0);
  }, [formState]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isComplete) return;

    const params = new URLSearchParams(formState).toString();
    router.push(`/practice?${params}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold tracking-tight">Sales Call Practicr</h1>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-3xl items-center px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-2xl bg-white p-8 shadow-lg shadow-slate-200/60"
        >
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold">Configure Your Practice Call</h2>
            <p className="mt-2 text-sm text-slate-500">
              Every field is required to tailor the AI agent to your scenario.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="callType"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Call Type <span className="text-red-600">*</span>
              </label>
              <select
                id="callType"
                name="callType"
                required
                value={formState.callType}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    callType: event.target.value,
                  }))
                }
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm outline-none ring-indigo-500 transition focus:border-indigo-500 focus:ring-2"
              >
                <option value="" disabled>
                  Select a call type
                </option>
                {CALL_TYPES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                {REQUIRED_MESSAGE}
              </p>
            </div>

            <div>
              <label
                htmlFor="scenario"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Scenario <span className="text-red-600">*</span>
              </label>
              <input
                id="scenario"
                name="scenario"
                type="text"
                required
                value={formState.scenario}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    scenario: event.target.value,
                  }))
                }
                placeholder="Selling commercial treadmills to head of procurement for national gym chain"
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm outline-none ring-indigo-500 transition focus:border-indigo-500 focus:ring-2"
              />
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                {REQUIRED_MESSAGE}
              </p>
            </div>

            <div>
              <label
                htmlFor="buyerPersona"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Buyer Persona <span className="text-red-600">*</span>
              </label>
              <input
                id="buyerPersona"
                name="buyerPersona"
                type="text"
                required
                value={formState.buyerPersona}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    buyerPersona: event.target.value,
                  }))
                }
                placeholder="Buyer is a stubborn, abrasive."
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm outline-none ring-indigo-500 transition focus:border-indigo-500 focus:ring-2"
              />
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                {REQUIRED_MESSAGE}
              </p>
            </div>

            <div>
              <label
                htmlFor="productDescription"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Product Description <span className="text-red-600">*</span>
              </label>
              <input
                id="productDescription"
                name="productDescription"
                type="text"
                required
                value={formState.productDescription}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    productDescription: event.target.value,
                  }))
                }
                placeholder="This commercial-grade treadmill offers a durable frame and a touchscreen with multiple experiences."
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm outline-none ring-indigo-500 transition focus:border-indigo-500 focus:ring-2"
              />
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                {REQUIRED_MESSAGE}
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isComplete}
            className="mt-8 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-indigo-300"
          >
            Continue
          </button>
        </form>
      </main>
    </div>
  );
}
