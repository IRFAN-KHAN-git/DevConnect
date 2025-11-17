import { Mail, Lock } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api";

const Login = ({  onClose, isShown, switchToSignup  }) => {
  const navigate = useNavigate();
  const [showpass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErr("");
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setErr("Please fill in all fields");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErr("Please enter a valid email");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!validateForm())return;

    try{
        setLoading(true);
        setErr('');
        console.log("logging in with email: " ,formData.email);

        const response = await login({
            email: formData.email,
            password: formData.password
        });
        
        console.log("Login response:", response);

        //localstorage
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));

        alert(`Welcome back, ${response.user.fullName}!`);

        // close modal and redirect
      isShown(false);
      navigate("/home");
      window.location.reload(); // refresh to update header
    }
    catch(error){
        console.log("login error",error);
       if (error.response?.status === 401) {
        setErr("Invalid email or password");
      } else {
        setErr(
          error.response?.data?.mes ||
          error.response?.data?.message ||
          "Login failed. Please try again."
        );
      }
    }
    finally{
        setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur background */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => isShown(false)}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md border border-[#334155] bg-[#1E293B] shadow-2xl rounded-xl p-6">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-white text-xl bg-[#334155] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#2563EB] transition"
          onClick={() => isShown(false)}
        >
          ×
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-[#F1F5F9] text-[28px] font-bold">
            Welcome Back!
          </h1>
          <p className="text-[#94A3B8] text-[14px]">Sign in to your account</p>
        </div>

        {/* err mseg*/}
        {err && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg">
            <p className="text-red-400 text-[14px] text-center">{err}</p>
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-[#F1F5F9] text-[14px] font-semibold"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[#334155] bg-[#0F172A] py-2.5 pl-10 pr-4 text-[#F1F5F9] outline-none transition-colors focus:border-[#3B82F6]"
                onChange={handleChange}
                disabled={loading}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-[#F1F5F9] text-[14px] font-semibold"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />
              <input
                type={showpass ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                className="w-full rounded-lg border border-[#334155] bg-[#0F172A] py-2.5 pl-10 pr-12 text-[#F1F5F9] outline-none transition-colors focus:border-[#3B82F6]"
                onChange={handleChange}
                disabled={loading}
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xl"
                type="button"
                onClick={() => setShowPass(!showpass)}
              >
                {showpass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full max-w-xs py-2.5 rounded-lg font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] transition-all duration-200 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center text-[#94A3B8] text-[14px] mt-4">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={switchToSignup}
              className="text-[#3B82F6] hover:text-[#2563EB] font-semibold"
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;