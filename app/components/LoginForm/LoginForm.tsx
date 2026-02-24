"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EyeOff, Eye } from "lucide-react";
import SocialButton from "../SocialButton/SocialButton";
import styles from "./LoginForm.module.scss";
import RwaLogo from "../icons/logo";

const formVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M18 9a9 9 0 10-10.406 8.89v-6.29H5.309V9h2.285V7.017c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.176 2.014.176v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.6h-2.097v6.29A9.002 9.002 0 0018 9z"
        fill="#1877F2"
      />
      <path
        d="M12.497 11.6L12.896 9h-2.496V7.313c0-.712.35-1.406 1.467-1.406h1.135V3.692s-1.03-.176-2.014-.176c-2.057 0-3.4 1.246-3.4 3.501V9H5.309v2.6h2.285v6.29a9.07 9.07 0 002.812 0V11.6h2.091z"
        fill="#fff"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LogoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 2L4 10v12l12 8 12-8V10L16 2z" fill="#2563eb" opacity="0.2" />
      <path
        d="M16 2L4 10v12l12 8 12-8V10L16 2zm0 2.5L26 12v8l-10 6.5L6 20v-8L16 4.5z"
        fill="#2563eb"
      />
      <circle cx="16" cy="16" r="4" fill="#2563eb" />
    </svg>
  );
}

function DecorativeStar() {
  return (
    <svg
      width="200"
      height="181"
      viewBox="0 0 200 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C100 75 33.3333 100 0 100C75 100 100 166.667 100 200C100 125 166.667 100 200 100C125 100 100 33.3333 100 0Z"
        fill="#AFAFAF"
        fillOpacity="0.08"
      />
    </svg>
  );
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.loginSection}>
      <motion.div
        className={styles.content}
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.logoRow} variants={itemVariants}>
          <RwaLogo />
          <span className={styles.logoText}>Real World Asset</span>
        </motion.div>

        <motion.div className={styles.card} variants={itemVariants}>
          <h1 className={styles.title}>Welcome back to RWA</h1>
          <p className={styles.subtitle}>Sign in to access your portfolio</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="email">
                Email<span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  placeholder="Exampleemail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="password">
                Password<span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className={styles.input}
                  placeholder="Testing123"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  style={{ paddingRight: "2.5rem" }}
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>

              <div className={styles.forgotRow}>
                <a href="#" className={styles.forgotLink}>
                  Forgot Password?
                </a>
              </div>
            </div>

            <motion.button
              type="submit"
              className={styles.submitBtn}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Sign In
            </motion.button>
          </form>

          <div className={styles.divider}>
            <span className={styles.dividerText}>Or</span>
          </div>

          <div className={styles.socialRow}>
            <SocialButton icon={<GoogleIcon />} label="Google" />
            <SocialButton icon={<FacebookIcon />} label="Facebook" />
            <SocialButton icon={<XIcon />} />
          </div>

          <p className={styles.signupRow}>
            Do not have an account?
            <a href="#" className={styles.signupLink}>
              Sign Up
            </a>
          </p>
        </motion.div>

        <motion.div className={styles.footer} variants={itemVariants}>
          <a href="#" className={styles.footerLink}>
            Terms
          </a>
          <span className={styles.footerDot}>{"·"}</span>
          <a href="#" className={styles.footerLink}>
            Privacy
          </a>
          <span className={styles.footerDot}>{"·"}</span>
          <a href="#" className={styles.footerLink}>
            Docs
          </a>
          <span className={styles.footerDot}>{"·"}</span>
          <a href="#" className={styles.footerLink}>
            Help
          </a>
        </motion.div>
      </motion.div>

      <div className={styles.star}>
        <DecorativeStar />
      </div>
    </section>
  );
}
