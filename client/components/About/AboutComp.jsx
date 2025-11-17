import React, { useState } from "react";
import TypingEffect from "../comp/TypingEffect";
import { Users, Lightbulb, Globe, Zap, Target, Heart } from "lucide-react";
import Signup from '../Auth/Signup'
import { useNavigate } from 'react-router-dom';
const AboutComp = () => {
  const words = ["ideas", "code", "project", "skills"];
  const [signupShow , setSingupShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen ">
      {/* hero section */}
      <section className="w-full px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Left part */}
            <div>
              <h1 className="mb-6 text-[#F1F5F9] text-[45px] font-semibold leading-[1.2]">
                Share{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #10B981 0%, #06B6D4 50%, #3B82F6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 700,
                  }}
                >
                  <TypingEffect words={words} />
                </span>{" "}
                &<br />
                collaborate.
              </h1>
              <p className="mb-8 text-[#94A3B8] text-[18px]  leading-[1.7]">
                DevConnect is a platform where developers from around the world
                come together to share knowledge, collaborate on projects, and
                grow their skills. Join our thriving community today.
              </p>
              <button className="bg-[#10B981] hover:bg-[#10B981]/90 text-white p-2 rounded-lg text-[16px]"
              onClick={()=> setSingupShow(true)}
              >
                Get started
              </button>
            </div>
            {/* right img part */}
            <div className="overflow-hidden rounded-2xl border border-[#334155]">
              <img src="../src/assets/dev.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div></div>
      </section>
      {/* our mission */}
      <section className="w-full px-6 py-16 bg-[#1E293B]/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[#F1F5F9] mb-6 text-[36px] font-semibold">
            Our Mission
          </h2>
          <p className="text-[#94A3B8] text-[18px] leading-1.8 ">
            We believe in the power of community-driven learning and
            collaboration. Our mission is to create a space where developers can
            share their experiences, learn from each other, and build amazing
            things together. Whether you're just starting out or you're a
            seasoned professional, DevConnect is here to support your journey.
          </p>
        </div>
      </section>
      {/* our features cards */}
      <section className="w-full px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-[#F1F5F9] text-[36px] font-semibold">
            What We Stand For
          </h2>
          {/* card section with grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Community */}
            <div className="border border-[#334155] bg-[#1E293B] rounded-xl p-8 transition-all hover:border-[#3B82F6]">
              <div className="mb-4 flex h-12 w-12  items-center  justify-center rounded-lg bg-[#3B82F6]/20">
                <Users className="h-6 w-6 text-[#3B82F6]" />
              </div>
              <h3 className="mb-3 text-[#F1F5F9] text-[20px] font-semibold">
                Community First
              </h3>
              <p className="text-[#94A3B8] text-[14px] leading-1.6">
                Our community is at the heart of everything we do. We foster a
                supportive environment where everyone can learn and grow
                together.
              </p>
            </div>
            {/* Innovation */}
            <div className="border border-[#334155] bg-[#1E293B] rounded-xl p-8 transition-all hover:border-[#8B5CF6]">
              <div className="mb-4 flex h-12 w-12  items-center  justify-center rounded-lg bg-[#8B5CF6]/20">
                <Lightbulb className="h-6 w-6 text-[#8B5CF6]" />
              </div>
              <h3 className="mb-3 text-[#F1F5F9] text-[20px] font-semibold">
                Innovation
              </h3>
              <p className="text-[#94A3B8] text-[14px] leading-1.6">
                We encourage creative thinking and innovative solutions. Share
                your unique approaches and learn from the creativity of others.
              </p>
            </div>
            {/* Global */}
            <div className="border border-[#334155] bg-[#1E293B] rounded-xl p-8 transition-all hover:border-[#10B981]">
              <div className="mb-4 flex h-12 w-12  items-center  justify-center rounded-lg bg-[#10B981]/20">
                <Globe className="h-6 w-6 text-[#10B981]" />
              </div>
              <h3 className="mb-3 text-[#F1F5F9] text-[20px] font-semibold">
                Global Reach
              </h3>
              <p className="text-[#94A3B8] text-[14px] leading-1.6">
                Connect with developers from around the world. Our platform
                breaks down geographical barriers to create a truly global
                community..
              </p>
            </div>
            {/* fast */}
            <div className="border border-[#334155] bg-[#1E293B] rounded-xl p-8 transition-all hover:border-[#F59E0B]">
              <div className="mb-4 flex h-12 w-12  items-center  justify-center rounded-lg bg-[#F59E0B]/20">
                <Zap className="h-6 w-6 text-[#F59E0B]" />
              </div>
              <h3 className="mb-3 text-[#F1F5F9] text-[20px] font-semibold">
                Fast & Efficient
              </h3>
              <p className="text-[#94A3B8] text-[14px] leading-1.6">
                Get quick answers to your questions and discover solutions
                faster. Our platform is designed for speed and efficiency.
              </p>
            </div>
            {/* Quality Content*/}
            <div className="border border-[#334155] bg-[#1E293B] rounded-xl p-8 transition-all hover:border-[#3B82F6]">
              <div className="mb-4 flex h-12 w-12  items-center  justify-center rounded-lg bg-[#3B82F6]/20">
                <Target className="h-6 w-6 text-[#3B82F6]" />
              </div>
              <h3 className="mb-3 text-[#F1F5F9] text-[20px] font-semibold">
                Quality Content
              </h3>
              <p className="text-[#94A3B8] text-[14px] leading-1.6">
                We maintain high standards for content quality. Every post is an
                opportunity to learn something valuable and well-presented.
              </p>
            </div>
            {/* support */}
            <div className="border border-[#334155] bg-[#1E293B] rounded-xl p-8 transition-all hover:border-[#EF4444]">
              <div className="mb-4 flex h-12 w-12  items-center  justify-center rounded-lg bg-[#EF4444]/20">
                <Heart className="h-6 w-6 text-[#EF4444]" />
              </div>
              <h3 className="mb-3 text-[#F1F5F9] text-[20px] font-semibold">
                Supportive
              </h3>
              <p className="text-[#94A3B8] text-[14px] leading-1.6">
                Everyone starts somewhere. We provide a welcoming environment
                where asking questions is encouraged and helping others is
                celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* devconnect Numbers */}
      <section className="w-full bg-[#1E293B]/50  px-6 py-16  ">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-[#F1F5F9] text-[36px] font-semibold">
            DevConnect by the Numbers
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className=" mb-2 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent text-[48px] font-semibold">
                10K+
              </div>
              <p className="text-[#94A3B8] text-[16px]">Active Developers</p>
            </div>
            <div className="text-center">
              <div className=" mb-2 text-[#10B981] text-[48px] font-semibold">
                50K+
              </div>
              <p className="text-[#94A3B8] text-[16px]">Code Snippets Shared</p>
            </div>
            <div className="text-center">
              <div className=" mb-2 text-[#F59E0B] text-[48px] font-semibold">
                100K+
              </div>
              <p className="text-[#94A3B8] text-[16px]">
                Comments & Discussions
              </p>
            </div>
            <div className="text-center">
              <div className=" mb-2 text-[#8B5CF6] text-[48px] font-semibold">
                150+
              </div>
              <p className="text-[#94A3B8] text-[16px]">
                Countries Represented
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Get Started Section */}
      <section className="w-full px-6 py-16 relative">
        <div className="mx-auto max-w-4xl relative">
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#10B981] via-[#F59E0B] to-[#3B82F6] animate-borderMove opacity-70"></div>

          {/* Content card */}
          <div className="relative rounded-2xl border border-[#334155] bg-[#0F172A] p-12 text-center shadow-lg">
            <h2 className="mb-4 text-3xl font-semibold text-[#F1F5F9]">
              Ready to Join the Community?
            </h2>
            <p className="pb-8 text-[#94A3B8] text-lg leading-relaxed max-w-2xl mx-auto">
              Start sharing your knowledge, learning from others, and building
              amazing projects with developers around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#10B981] hover:bg-[#10B981]/90 text-white px-8 py-3 rounded-lg text-[16px] font-medium transition-colors"
              onClick={()=> setSingupShow(true)}
              >
                Get Started Free
              </button>
              <button className="border border-[#334155] bg-transparent text-[#F1F5F9] hover:bg-[#1E293B] px-8 py-3 rounded-lg text-[16px] font-medium transition-colors"
              onClick={()=> navigate('/blog')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      {signupShow && <Signup onClose={signupShow} isShown={setSingupShow}/>}
    </div>
  );
};

export default AboutComp;
