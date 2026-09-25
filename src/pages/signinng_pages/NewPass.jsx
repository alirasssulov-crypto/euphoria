
import { useState } from "react";
import { Eye, EyeOff, CheckCircle2, X } from "lucide-react";

export default function NewPass({ onGoHome }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setShowModal(true);
  };

  const handleGoHome = () => {
    setShowModal(false);
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white relative">
      {/* Левая часть — изображение */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="https://picsum.photos/seed/euphoria-newpass/1200/1600"
          alt="Person in colorful outfit"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Правая часть — форма установки нового пароля */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 md:py-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Set New Password
          </h1>
          <p className="text-gray-500 mb-8">
            Your new password must be different from previously used
            passwords
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="text-sm text-gray-800">
                  New Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
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
              <p className="mt-2 text-sm text-gray-500">
                Use 8 or more characters with a mix of letters, numbers &amp;
                symbols
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="confirmPassword" className="text-sm text-gray-800">
                  Confirm Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  {showConfirm ? "Hide" : "Show"}
                </button>
              </div>
              <input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {error && <p className="text-sm text-rose-500">{error}</p>}

            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 transition-colors text-white font-semibold rounded-lg py-3"
            >
              Установить
            </button>
          </form>
        </div>
      </div>

      {/* Модальное окно об успехе */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 text-center">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Закрыть"
            >
              <X size={20} />
            </button>

            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="text-emerald-600" size={30} />
            </div>

            <p className="text-lg font-semibold text-gray-900 mb-6">
              Код успешно установлен
            </p>

            <button
              type="button"
              onClick={handleGoHome}
              className="w-full bg-violet-600 hover:bg-violet-700 transition-colors text-white font-semibold rounded-lg py-3"
            >
              Главная
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
