import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FeedBackModal from "../FeedBackModal/FeedBackModal";
import { useNavigate } from "react-router-dom";

const NavBar = ({ data, logo = false, search = false, feedback = false }) => {
  const [isFeedBackModalOpen, setIsFeedBackModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleFeedBackModal = (value = false) => {
    setIsFeedBackModalOpen(value);
  };

  return (
    <div className={styles.navbarWrapper}> {/* Common parent wrapper */}
      <div className={styles.wrapper}>
        <nav className={styles.navbar}>
          <div className={styles.logoWrapper} onClick={() => navigate(`/`)}>
            {logo ? <Logo id={styles.logo} /> : null}
          </div>
          {search ? (
            <div className={styles.searchWrapper}>
              <SearchBar placeholder="Search an album of your choice" data={data} />
            </div>
          ) : null}
          {feedback ? (
            <div className={styles.nav_link} onClick={() => toggleFeedBackModal(true)}>
              Feedback
            </div>
          ) : null}
        </nav>
      </div>
      <FeedBackModal
        isOpen={isFeedBackModalOpen}
        onDismiss={() => toggleFeedBackModal(false)}
      />
    </div>
  );
};

export default NavBar;
