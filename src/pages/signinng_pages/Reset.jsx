
import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function ResetPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setSent(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Левая часть — изображение */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="https://picsum.photos/seed/euphoria-reset/1200/1600"
          alt="Person in colorful outfit"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Правая часть — форма восстановления пароля */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 md:py-16">
        <div className="w-full max-w-md">
          {!sent ? (
            <>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Reset Password
              </h1>
              <p className="text-gray-500 mb-8">
                Enter the email address linked to your account and we&apos;ll
                send you a link to reset your password
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-800 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="designer@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  {emailError && (
                    <p className="mt-2 text-sm text-rose-500">{emailError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-violet-600 hover:bg-violet-700 transition-colors text-white font-semibold rounded-lg py-3"
                >
                  Send Reset Link
                </button>

                <p className="text-sm text-gray-700">
                  Remembered your password?{" "}
                  <a
                    href="#"
                    className="underline underline-offset-2 text-gray-900 hover:text-violet-600"
                  >
                    Log in
                  </a>
                </p>
              </form>
            </>
          ) : (
            <div>
              <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center mb-6">
                <Mail className="text-violet-600" size={28} />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Check Your Email
              </h1>
              <p className="text-gray-500 mb-8">
                We&apos;ve sent a password reset link to{" "}
                <span className="text-gray-800 font-medium">{email}</span>
              </p>

              <div className="flex items-center gap-2 text-sm text-emerald-600 mb-8">
                <CheckCircle2 size={18} />
                <span>Email sent successfully</span>
              </div>

              <button
                type="button"
                onClick={() => setSent(false)}
                className="w-full border border-gray-300 rounded-lg py-3 text-gray-800 font-medium hover:bg-gray-50 transition-colors mb-5"
              >
                Use a different email
              </button>

              <p className="text-sm text-gray-700">
                Didn&apos;t get the email?{" "}
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="underline underline-offset-2 text-gray-900 hover:text-violet-600"
                >
                  Resend
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
