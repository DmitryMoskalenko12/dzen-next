import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href ? "navigation-menu__link--active active" : "";

  return (
    <nav className="navigation-menu__links">
      <Link
        className={`navigation-menu__link ${isActive("/orders")}`}
        href="/orders"
      >
        {t("orders")}
      </Link>
      <a className="navigation-menu__link">{t("groups")}</a>
      <Link
        className={`navigation-menu__link ${isActive("/products")}`}
        href="/products"
      >
        {t("products")}
      </Link>
      <a className="navigation-menu__link">{t("users")}</a>
      <a className="navigation-menu__link">{t("settings")}</a>
    </nav>
  );
};

export default NavigationMenu;
