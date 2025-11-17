import React from "react";
import "./catogery.css";
import CategoryCard from "./CatogeryCard";
import { Globe, Smartphone, Paintbrush, Database, Cloud, Cpu, Code, Layers } from "lucide-react";

const Categories = () => {
  const categories = [
    { name: "Web Dev", icon: <Globe />, count: 234 },
    { name: "Mobile Apps", icon: <Smartphone />, count: 156 },
    { name: "UI/UX Design", icon: <Paintbrush />, count: 189 },
    { name: "Backend", icon: <Database />, count: 203 },
    { name: "DevOps", icon: <Cloud />, count: 145 },
    { name: "Algorithms", icon: <Cpu />, count: 178 },
    { name: "Frontend", icon: <Code />, count: 267 },
    { name: "Full Stack", icon: <Layers />, count: 198 },
  ];

  return (
    <section className="catogeryDiv">
      <div>
        <h2>Explore Categories</h2>
        <CategoryCard categories={categories} />
      </div>
    </section>
  );
};

export default Categories;
