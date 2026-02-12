"use client";

import { useRef, useEffect, useState, type FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formId = process.env.NEXT_PUBLIC_LOOPS_FORM_ID;

    if (!formId) {
      setStatus("error");
      setErrorMessage("Form configuration error. Please try again later.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://app.loops.so/api/newsletter-form/${formId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ email }).toString(),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-4 shadow-sm">
        <p className="text-sm text-gray-600">
          You&apos;re on the list!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex items-center rounded-full border border-gray-200 bg-white py-2 pl-7 pr-2 shadow-[0_1px_2px_0px_rgba(77,77,77,0.08),0_2px_6px_0px_rgba(77,77,77,0.08),0_4px_12px_-1px_rgba(77,77,77,0.08),0_6px_20px_-2px_rgba(77,77,77,0.08),0_10px_34px_-3px_rgba(77,77,77,0.08),0_14px_52px_-4px_rgba(77,77,77,0.07),0_20px_80px_-5px_rgba(77,77,77,0.06)] transition-shadow">
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setErrorMessage("");
            }
          }}
          placeholder="Your Email"
          required
          disabled={status === "loading"}
          className="flex-1 bg-transparent py-2 pr-4 text-base text-gray-900 placeholder:text-gray-500 focus:outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="group relative overflow-hidden rounded-[100px] bg-[#1c1c1c] px-6 py-3 text-base font-semibold text-white shadow-[inset_0_0_20px_1.64px_rgba(255,255,255,0.24),0_0.84px_0.5px_-0.31px_rgba(77,77,77,0.13),0_1.99px_1.19px_-0.63px_rgba(77,77,77,0.13),0_3.63px_2.18px_-0.94px_rgba(77,77,77,0.13),0_6.04px_3.62px_-1.25px_rgba(77,77,77,0.13),0_9.75px_5.85px_-1.56px_rgba(77,77,77,0.13),0_15.96px_9.57px_-1.88px_rgba(77,77,77,0.13),0_27.48px_16.49px_-2.19px_rgba(77,77,77,0.13),0_50px_30px_-2.5px_rgba(77,77,77,0.13)] transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <span className="relative flex h-5 items-center justify-center overflow-hidden">
            <span className="inline-flex transition-transform duration-200 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-full">
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </span>
            <span className="absolute translate-y-full transition-transform duration-200 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0">
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </span>
          </span>
        </button>
      </div>
      {status === "error" && errorMessage && (
        <p className="mt-3 text-center text-sm text-red-500">{errorMessage}</p>
      )}
    </form>
  );
}
