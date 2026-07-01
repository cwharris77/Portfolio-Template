import { styles } from "../styles";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full py-5 bg-bgElev mt-3 flex justify-end items-center text-lg`}
    >
      <div className="flex gap-4">
        <p className="text-inkDim font-hanken">
          <a
            target="_blank"
            href="https://icons8.com/icon/1476/database"
            rel="noreferrer"
            className="hover:text-ink transition-colors"
          >
            Database
          </a>
          {" and "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/PfQnRGTIisIV/ai"
            className="hover:text-ink transition-colors"
          >
            AI
          </a>{" "}
          icons by{" "}
          <a
            target="_blank"
            href="https://icons8.com"
            rel="noreferrer"
            className="hover:text-ink transition-colors"
          >
            Icons8
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
