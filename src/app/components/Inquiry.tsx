"use client";
import { useRef, useState } from "react";

type Step = 1 | 2 | 3 | 4;

type InquiryForm = {
  name: string;
  email: string;
  weddingDate: string;
  venue: string;
  visionCoverage: string;
  visionStyle: string;
  visionHours: string;
  budget: string;
  budgetFlexibility: string;
  addons: string[];
  message: string;
};

const initialForm: InquiryForm = {
  name: "",
  email: "",
  weddingDate: "",
  venue: "",
  visionCoverage: "",
  visionStyle: "",
  visionHours: "",
  budget: "",
  budgetFlexibility: "",
  addons: [],
  message: "",
};

export default function Inquiry() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<InquiryForm>(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const submitIntentRef = useRef(false);

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const nextStep = () => setStep((s) => (s < 4 ? ((s + 1) as Step) : s));
  const prevStep = () => setStep((s) => (s > 1 ? ((s - 1) as Step) : s));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!submitIntentRef.current) return;
    submitIntentRef.current = false;

    if (step !== 4) return;

    if (!formData.name || !formData.email) {
      alert("Please provide your name and email.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed: ${res.status}`);
      }

      alert("Thanks! Your inquiry was sent.");
      setFormData(initialForm);
      setStep(1);
    } catch (err) {
      console.error(err);
      alert("Something went wrong submitting your inquiry.");
    } finally {
      setSubmitting(false);
    }
  };

  const stepTitles: Record<Step, string> = {
    1: "Basic Info",
    2: "Your Vision",
    3: "Budget",
    4: "Add-ons",
  };

  return (
    <div className="bg-lace w-full rounded-lg flex flex-col items-center p-8 max-w-xl mx-auto shadow-lg">
      <h1 className="text-2xl mb-4">{stepTitles[step]}</h1>

      <form
        className="w-full max-w-md flex flex-col items-center min-h-[500px]"
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const el = e.target as HTMLElement;
            const isSubmitBtn =
              el instanceof HTMLButtonElement && el.type === "submit";
            if (!isSubmitBtn) e.preventDefault();
          }
        }}
      >
        {/* Step 1 */}
        {step === 1 && (
          <div className="flex-1 w-full flex flex-col items-center">
            <h3 className="text-sm text-center mb-4">
              Enter your basic information
            </h3>

            <div className="w-full p-2">
              <label className="block mb-1">Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label className="block mb-1">Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label className="block mb-1">Wedding Date</label>
              <input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label className="block mb-1">Location/Venue</label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
                placeholder="Enter your venue"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="flex-1 w-full flex flex-col items-center">
            <h3 className="text-sm text-center mb-4">
              Tell me about your vision
            </h3>

            <div className="w-full p-2">
              <label className="block mb-1">What kind of coverage?</label>
              <input
                type="text"
                name="visionCoverage"
                value={formData.visionCoverage}
                onChange={handleInputChange}
                placeholder="Full day, Ceremony only, etc"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label className="block mb-1">Style</label>
              <input
                type="text"
                name="visionStyle"
                value={formData.visionStyle}
                onChange={handleInputChange}
                placeholder="Cinematic, documentary, etc."
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label className="block mb-1">Hours</label>
              <input
                type="text"
                name="visionHours"
                value={formData.visionHours}
                onChange={handleInputChange}
                placeholder="8 hours, 10 hours, more"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label className="block mb-1">Anything else?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Share details, priorities, or questions"
                rows={4}
                className="border border-gray-300 rounded p-2 w-full resize-y"
              />
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="flex-1 w-full flex flex-col items-center">
            <h3 className="text-sm text-center mb-4">What is your budget?</h3>

            <div className="w-full p-2">
              <label className="block mb-1">Budget Range</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="Enter your budget range"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label className="block mb-1">Is your budget flexible?</label>
              <select
                name="budgetFlexibility"
                value={formData.budgetFlexibility}
                onChange={handleSelectChange}
                className="border border-gray-300 rounded p-2 w-full"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="yes">Yes, I can be flexible</option>
                <option value="no">I have a firm budget</option>
                <option value="maybe">I’m not sure yet</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="flex-1 w-full flex flex-col items-center">
            <h3 className="text-sm text-center mb-4">
              Would you like any add-ons?
            </h3>
            <div className="w-full p-2 space-y-2">
              {["Drone Footage", "RAW Files", "Social Media Edit"].map(
                (option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="addons"
                      value={option}
                      checked={formData.addons.includes(option)}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setFormData((prev) => ({
                          ...prev,
                          addons: checked
                            ? [...prev.addons, option]
                            : prev.addons.filter((item) => item !== option),
                        }));
                      }}
                    />
                    {option}
                  </label>
                )
              )}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="w-full flex justify-between p-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 px-4 py-2 rounded"
              disabled={submitting}
            >
              Back
            </button>
          ) : (
            <span />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-mosswood px-6 py-2 text-lace rounded hover:bg-mosswood-dark disabled:opacity-60"
              disabled={submitting}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-mosswood px-6 py-2 text-lace rounded hover:bg-mosswood-dark disabled:opacity-60"
              disabled={submitting}
              // 👇 set intent for ALL activation paths
              onPointerDown={() => (submitIntentRef.current = true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  submitIntentRef.current = true;
                }
              }}
              onClick={() => (submitIntentRef.current = true)}
            >
              {submitting ? "Sending..." : "Submit"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
