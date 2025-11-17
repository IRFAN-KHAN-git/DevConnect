import { Mail, User, Lock, Pen } from "lucide-react";
import React from "react";
import { useState } from "react";
import { signup } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Signup = ({ onClose, isShown, switchToLogin }) => {
  const navigate = useNavigate();
  const [showpass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErr("");
  };

  const validForm = () => {
    if (
      !formData.fullName ||
      !formData.confirmPassword ||
      !formData.email ||
      !formData.password ||
      !formData.username
    ) {
      setErr("Please fill in all the fields.");
      return false;
    }
    if (formData.username.length < 3) {
      setErr("Username must be at least 3 characters");
      return false;
    }
    if (formData.password.length < 6) {
      setErr("Password must be at least 6 characters");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setErr("Passwords do not match");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErr("Email format not correct");
      return false;
    }
    return true;
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!validForm()) return;
    try {
      setLoading(true);
      setErr("");
      console.log({
        fullName: formData.fullName,
        username: formData.username,
        password: formData.password,
        email: formData.email,
      });

      const responce = await signup({
        fullName: formData.fullName,
        username: formData.username,
        password: formData.password,
        email: formData.email,
      });
      console.log(responce);

      setFormData({
        fullName: "",
        username: "",
        password: "",
        email: "",
        confirmPassword: "",
      });
      alert("acount created: ", formData.fullName);
      localStorage.setItem("token", responce.token);
      localStorage.setItem("user", JSON.stringify(responce.user));
      onClose(); // Close modal
      navigate("/");
    } catch {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center">
      {/* blure */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => isShown(false)}
      />
      {/* model  */}
      <div className="relative z-10 w-full max-w-md border border-[#334155] bg-[#1E293B] shadow-2xl rounded-xl p-4">
        {/* close button */}
        <button
          className="absolute top-3 right-3 text-white text-xl bg-[#334155] rounded-full px-2 hover:bg-[#2563EB] transition"
          onClick={() => isShown(false)}
        >
          x
        </button>
        <div className="mb-3 text-center">
          <h1 className="mb-2 text-[#F1F5F9] text-[28px]">Join DevConnect</h1>
        </div>
        {/* err mseg*/}
        {err && (
          <div className=" bg-red-500/10 border border-red-500 rounded-lg">
            <p className="text-red-400 text-[14px] text-center">{err}</p>
          </div>
        )}
        <form className="space-y-3" onSubmit={handelSubmit}>
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-[#F1F5F9] text-[14px] font-semibold"
            >
              Full Name
            </label>
            <div className="relative">
              <Pen className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                placeholder="john Sing"
                className="w-full rounded-lg border border-[#334155] bg-[#0F172A] py-2.5 pl-10 pr-4 text-[#F1F5F9] outline-none transition-colors focus:border-[#3B82F6]"
                onChange={handelChange}
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-[#F1F5F9] text-[14px] font-semibold"
            >
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                placeholder="johnSing"
                className="w-full rounded-lg border border-[#334155] bg-[#0F172A] py-2.5 pl-10 pr-4 text-[#F1F5F9] outline-none transition-colors focus:border-[#3B82F6]"
                onChange={handelChange}
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="john@gmail.com"
                className="w-full rounded-lg border border-[#334155] bg-[#0F172A] py-2.5  pl-10 pr-4 text-[#F1F5F9] outline-none transition-colors focus:border-[#3B82F6]"
                onChange={handelChange}
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />
              <input
                type={showpass ? "text" : "password"}
                id="password"
                name="password"
                placeholder="At least 6 characters"
                value={formData.password}
                className="w-full rounded-lg border border-[#334155] bg-[#0F172A] py-2.5  pl-10 pr-4 text-[#F1F5F9] outline-none transition-colors focus:border-[#3B82F6]"
                onChange={handelChange}
                disabled={loading}
              />
              <button
                className="absolute right-3 top-1/2  -translate-y-1/2 text-xl "
                type="button"
                onClick={() => setShowPass(!showpass)}
              >
                {showpass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type={showpass ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              className="w-full rounded-lg border border-[#334155] bg-[#0F172A] py-2.5  pl-2 pr-4 text-[#F1F5F9] outline-none transition-colors focus:border-[#3B82F6]"
              placeholder="john@gmail.com"
              onChange={handelChange}
              disabled={loading}
            />
          </div>
          <p className="text-[#94A3B8]" style={{ fontSize: "12px" }}>
            By signing up, you agree to our{" "}
            <a href="/terms" className="text-[#3B82F6] hover:text-[#2563EB]">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-[#3B82F6] hover:text-[#2563EB]">
              Privacy Policy
            </a>
          </p>
          <div className=" flex justify-center">
            <button
              type="submit"
              className="w-full max-w-xs py-2.5 rounded-lg font-semibold 
               text-white bg-[#3B82F6] 
               hover:bg-[#2563EB] 
               transition-all duration-200 
               shadow-lg shadow-blue-500/20"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
          <p className="text-center text-[#94A3B8] text-[14px] ">
            Already have an account?{" "}
            <button
              type="button"
              onClick={switchToLogin}
              className="text-[#3B82F6] hover:text-[#2563EB] font-semibold"
            >
              Sign In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
