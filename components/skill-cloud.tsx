"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { motion as motionSystem } from "@/lib/motion";

type Skill = { name: string; group: string };

const rotations = [-4, 2, -1, 4, -3, 1, 3, -2];
const sizes = ["sm", "lg", "md", "sm", "xl", "md"];

function SkillChip({ skill, index }: { skill: Skill; index: number }) {
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rotation = rotations[index % rotations.length];

  return (
    <motion.span
      className={`skill-chip ${sizes[index % sizes.length]}`}
      title={skill.group}
      initial={reduce ? false : { opacity: 0, y: 16, rotate: rotation }}
      whileInView={reduce ? {} : { opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-5%" }}
      animate={reduce ? {} : offset}
      whileHover={
        reduce ? {} : { scale: 1.045, rotate: rotation * -0.45, y: -6 }
      }
      transition={{
        ...motionSystem.spring,
        delay: Math.min(index * 0.025, 0.25),
      }}
      onPointerMove={(event) => {
        if (reduce || event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        setOffset({
          x: (event.clientX - bounds.left - bounds.width / 2) * 0.08,
          y: (event.clientY - bounds.top - bounds.height / 2) * 0.08,
        });
      }}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
    >
      {skill.name}
    </motion.span>
  );
}

export function SkillCloud({ groups }: { groups: [string, string[]][] }) {
  const skills = groups.flatMap(([group, names]) =>
    names.map((name) => ({ name, group })),
  );

  return (
    <div className="skill-cloud" aria-label="Technologies I have worked with">
      {skills.map((skill, index) => (
        <SkillChip
          key={`${skill.group}-${skill.name}`}
          skill={skill}
          index={index}
        />
      ))}
    </div>
  );
}
