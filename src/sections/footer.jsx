"use client";
import { SiTailwindcss, SiReact, SiNextdotjs } from "react-icons/si";

export default function Footer() {
  return (
    <div className="w-full m-4 flex items-center justify-center">
      <p className="text-center text-xs text-normal font-normal opacity-60">
        forged with the power of{" "}
        <span className="inline-flex gap-1 text-xs px-2 text-normal font-normal">
          <SiNextdotjs /> <SiReact /> <SiTailwindcss />
        </span>{" "}
        | Copyright © 2025 wakamonoo
      </p>
    </div>
  );
}