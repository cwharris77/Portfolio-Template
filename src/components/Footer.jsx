import { styles } from "../styles";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full py-5 bg-jet mt-3 flex justify-end items-center text-lg`}
    >
      <div className='flex gap-4'>
        <p className='text-secondary'>
          <a
            target='_blank'
            href='https://icons8.com/icon/1476/database'
            rel='noreferrer'
            className='hover:text-white transition-colors'
          >
            Database
          </a>
          {" and "}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://icons8.com/icon/PfQnRGTIisIV/ai'
            className='hover:text-white transition-colors'
          >
            AI
          </a>{" "}
          icons by{" "}
          <a
            target='_blank'
            href='https://icons8.com'
            rel='noreferrer'
            className='hover:text-white transition-colors'
          >
            Icons8
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
