"use client";

import { motion } from "framer-motion";
import styles from "./SocialButton.module.scss";

interface SocialButtonProps {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

export default function SocialButton({ icon, label, onClick }: SocialButtonProps) {
  return (
    <motion.button
      className={styles.socialButton}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type="button"
    >
      <span className={styles.icon}>{icon}</span>
      {label && <span>{label}</span>}
    </motion.button>
  );
}
