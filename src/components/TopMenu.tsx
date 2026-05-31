"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { formatToday } from "@/shared/format";
import { useAppSelector } from "@/app/hooks";
import logo from '../../public/assets/logo.webp';
import './TopMenu.css';

const TopMenu = () => {
  const { t, i18n } = useTranslation();
  const sessions = useAppSelector((state) => state.ui.sessions);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const current = now ? formatToday(now) : null;

  return (
    <header className="top-menu app__top-menu">
      <div className="top-menu__brand">
        <div className="top-menu__logo">
          <Image loading="eager" src={logo} alt="Logo" />
        </div>
        <b className="top-menu__brand-text">{t("inventory")}</b>
      </div>
      <div className="input-group top-menu__search">
        <span className="input-group-text top-menu__search-icon-wrap">
          <i className="top-menu__search-icon bi bi-search" />
        </span>
        <input
          className="form-control top-menu__search-input"
          placeholder={t("search")}
        />
      </div>
      <div className="top-menu__time">
        <div className="top-menu__day">{current?.day ?? ""}</div>
        <strong className="top-menu__date">{current?.date ?? ""}</strong>
        <span className="top-menu__clock">
          <i className="top-menu__clock-icon bi bi-clock-fill" />{" "}
          {current?.time ?? ""}
        </span>
        <span
          className="badge text-bg-success ms-2 top-menu__sessions"
          title="WebSocket"
        >
          WS: {sessions}
        </span>
        <button
          className="btn btn-sm btn-outline-success ms-2 top-menu__language"
          onClick={() =>
            void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
          }
        >
          {i18n.language.toUpperCase()}
        </button>
      </div>
    </header>
  );
};

export default TopMenu;