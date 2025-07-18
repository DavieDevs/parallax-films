"use client";
import { useState } from "react";

export default function Inquiry() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    weddingDate: "",
    venue: "",
    visionCoverage: "",
    visionStyle: "",
    visionHours: "",
    budget: "",
    addons: [] as string[],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // You can send data to your backend or Supabase/Appwrite here
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const stepTitles: { [key: number]: string } = {
    1: "Basic Info",
    2: "Your Vision",
    3: "Budget",
    4: "Add-ons",
  };

  return (
    <div className="bg-lace w-full rounded-lg flex flex-col items-center p-8">
      <h1 className="text-2xl mb-4">{stepTitles[step]}</h1>

      <form
        className="w-full max-w-md flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <>
            <h3 className="text-sm text-center mb-4">
              Enter your basic information
            </h3>

            <div className="w-full p-2">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label>Wedding Date</label>
              <input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label>Location/Venue</label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Enter your venue"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
          </>
        )}

        {/* Step 2: Vision */}
        {step === 2 && (
          <>
            <h3 className="text-sm text-center mb-4">
              Tell me about your vision
            </h3>

            <div className="w-full p-2">
              <label>What kind of coverage are you looking for?</label>
              <input
                type="text"
                name="visionCoverage"
                value={formData.visionCoverage}
                onChange={handleChange}
                placeholder="Full day, Ceremony only, etc"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label>What style best describes your vision?</label>
              <input
                type="text"
                name="visionStyle"
                value={formData.visionStyle}
                onChange={handleChange}
                placeholder="Cinematic, documentary, etc."
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>

            <div className="w-full p-2">
              <label>How many hours of coverage do you need?</label>
              <input
                type="text"
                name="visionHours"
                value={formData.visionHours}
                onChange={handleChange}
                placeholder="8 hours, 10 hours, more"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
          </>
        )}

        {/* Step 3: Budget */}
        {step === 3 && (
          <>
            <h3 className="text-sm text-center mb-4">What is your budget?</h3>

            <div className="w-full p-2">
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Enter your budget range"
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
          </>
        )}

        {/* Step 4: Add-ons */}
        {step === 4 && (
          <>
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
          </>
        )}

        {/* Navigation Buttons */}
        <div className="w-full flex justify-between p-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Back
            </button>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-mosswood px-6 py-2 text-lace rounded hover:bg-mosswood-dark"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-mosswood px-6 py-2 text-lace rounded hover:bg-mosswood-dark"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
