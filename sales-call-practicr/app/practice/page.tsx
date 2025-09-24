import Link from "next/link";

const CALL_TYPE_LABELS: Record<string, string> = {
  discovery: "Discovery Call",
  cold: "Cold Call",
};

const PLACEHOLDER_TEXT = "Coming soon: connect with the ElevenLabs AI agent.";

type PracticePageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function PracticePage({ searchParams }: PracticePageProps) {
  const getParam = (key: keyof PracticePageProps["searchParams"]) => {
    const value = searchParams[key];
    if (Array.isArray(value)) {
      return value[0];
    }
    return value ?? "";
  };

  const selectedCallType = getParam("callType");
  const scenario = getParam("scenario");
  const buyerPersona = getParam("buyerPersona");
  const productDescription = getParam("productDescription");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold tracking-tight">Sales Call Practicr</h1>
          <Link
            href="/"
            className="text-sm font-medium text-indigo-600 transition hover:text-indigo-500"
          >
            Edit details
          </Link>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-3xl items-start px-6 py-12">
        <section className="w-full rounded-2xl bg-white p-8 shadow-lg shadow-slate-200/60">
          <h2 className="text-2xl font-semibold">Practice Setup Preview</h2>
          <p className="mt-2 text-sm text-slate-500">
            {PLACEHOLDER_TEXT}
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-6 text-sm">
            <div>
              <dt className="font-medium text-slate-700">Call Type</dt>
              <dd className="mt-1 text-slate-500">
                {CALL_TYPE_LABELS[selectedCallType] ?? "Not provided"}
              </dd>
            </div>

            <div>
              <dt className="font-medium text-slate-700">Scenario</dt>
              <dd className="mt-1 break-words text-slate-500">
                {scenario || "Not provided"}
              </dd>
            </div>

            <div>
              <dt className="font-medium text-slate-700">Buyer Persona</dt>
              <dd className="mt-1 break-words text-slate-500">
                {buyerPersona || "Not provided"}
              </dd>
            </div>

            <div>
              <dt className="font-medium text-slate-700">Product Description</dt>
              <dd className="mt-1 break-words text-slate-500">
                {productDescription || "Not provided"}
              </dd>
            </div>
          </dl>
        </section>
      </main>
    </div>
  );
}
