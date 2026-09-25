import { useRef, useState } from "react";

const CODE_LENGTH = 4;

export default function Verification({
  email = "designer@gmail.com",
  onVerify,
  onResend,
}) {
  const [code, setCode] = useState(Array(CODE_LENGTH).fill(""));
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...code];
    next[index] = digit;
    setCode(next);
    setError("");

    if (digit && index < CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;
    e.preventDefault();
    const next = Array(CODE_LENGTH).fill("");
    pasted
      .slice(0, CODE_LENGTH)
      .split("")
      .forEach((digit, i) => (next[i] = digit));
    setCode(next);
    const lastFilled = Math.min(pasted.length, CODE_LENGTH) - 1;
    inputsRef.current[Math.max(lastFilled, 0)]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.some((digit) => digit === "")) {
      setError("Please enter the full verification code");
      return;
    }
    setError("");
    onVerify?.(code.join(""));
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Левая часть — изображение */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="https://picsum.photos/seed/euphoria-verification/1200/1600"
          alt="Person in colorful outfit"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Правая часть — ввод кода подтверждения */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 md:py-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Verification
          </h1>
          <p className="text-gray-500 mb-8">
            Enter the {CODE_LENGTH}-digit code we sent to{" "}
            <span className="text-gray-800 font-medium">{email}</span>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-3 mb-2">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-14 h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              ))}
            </div>
            {error && <p className="text-sm text-rose-500 mb-4">{error}</p>}
            {!error && <div className="mb-4" />}

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 transition-colors text-white font-semibold rounded-lg py-3 mb-5"
            >
              Verify
            </button>

            <p className="text-sm text-gray-700">
              Didn&apos;t get the code?{" "}
              <button
                type="button"
                onClick={onResend}
                className="underline underline-offset-2 text-gray-900 hover:text-violet-600"
              >
                Resend
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
