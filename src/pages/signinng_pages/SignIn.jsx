import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Левая часть — изображение */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="https://img.magnific.com/free-photo/three-smiling-beautiful-women-summer-dresses-girls-posing-models-with-colorful-balloons-having-fun-ready-celebration-birthday-holiday-party_158538-4801.jpg"
          alt="Friends in colorful outfits"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Правая часть — форма входа */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 md:py-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Sign In Page
          </h1>

          {/* Соц. кнопки */}
          <div className="space-y-4 mb-6">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
            >
              <GoogleIcon />
              <span>Continue With Google</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
            >
              <TwitterIcon />
              <span>Continue With Twitter</span>
            </button>
          </div>

          {/* Разделитель */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Форма */}
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-gray-800 mb-2"
              >
                User name or email address
              </label>

              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-800"
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}

                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <Link
                to="/reset"
                className="text-sm text-gray-800 underline underline-offset-2 hover:text-violet-600"
              >
                Forget your password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 transition-colors text-white font-semibold rounded-lg py-3"
            >
              Sign In
            </button>

            {/* Sign up */}
            <p className="text-sm text-gray-700">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="underline underline-offset-2 text-gray-900 hover:text-violet-600"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.5 0-14 4.1-17.7 10.2z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.6C29.6 34.9 26.9 36 24 36c-5.3 0-9.7-3.4-11.3-8l-6.6 5.1C9.9 39.9 16.4 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.6 5.6C41.5 36 44 30.5 44 24c0-1.3-.1-2.7-.4-3.5z"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2">
      <path d="M23 4.9c-.8.4-1.7.6-2.6.8 1-.6 1.7-1.5 2-2.6-.9.5-1.9.9-3 1.1C18.5 3.3 17.2 3 15.9 3c-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1C7 8.8 3.7 7 1.5 4.3c-.4.7-.6 1.5-.6 2.3 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.4 4.5 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1C2 22.2 4.5 23 7.2 23c8.6 0 13.3-7.1 13.3-13.3v-.6c.9-.7 1.7-1.5 2.5-2.2z" />
    </svg>
  );
}