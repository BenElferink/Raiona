import { Children } from "react";
import { plansData } from "../data/plans";
import { Plan } from "../components/Plans";
import Planner from "../components/Planner";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Mousewheel } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/About.module.css";

export default function AboutSwiper({ isMobile = false }) {
  SwiperCore.use([Navigation, Pagination, Mousewheel]);

  return (
    <section className={styles.section}>
      <div className={styles.txtSection}>
        <h1>
          Choose the right
          <span> Investment for you </span>
        </h1>

        <p>
          Our platform earns on average 20% per month when trading with enhanced
          emotion technology. Our crypto-based mutual funds use machine learning
          technology to prevent poor trades and increase good decisions based on
          actual data, history, market trends and your own trading patterns.
        </p>
        <h1>
          Grow your
          <span> Portfolio </span>
        </h1>
        <p>
          Our proprietary machine learning technology can analyse more Markets
          and more digital assets every second, than the human mind could do in
          months. Make instant decisions without the normal Human impulses,
          emotions or fears. Identify trends and analyze prediction models. Get
          into the right trades earlier or out of the wrong trades sooner.
          Making decisions and choices you otherwise may never have been aware
          of.
        </p>
        <h1>
          Grow your
          <span> Team </span>
        </h1>
        <p>
          Share your success with others, allow others to benefit too By adding
          them to your team so they can follow your moves. Earn rewards for
          referrals and higher profits for team effort. Show the world what you
          have achieved, market yourself and Your business and allows others to
          join you under your account.
        </p>
      </div>

      <div>
        <Swiper
          navigation
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          loop={true}
          className={styles.swiper}>
          {Children.toArray(
            plansData.map((x) => (
              <SwiperSlide>
                <div
                  style={{
                    height: "333px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Plan
                    title={x.title}
                    description={x.description}
                    type={x.type}
                    // picture={x.picture}
                    Icon={x.Svg}
                  />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>

        <Planner />
      </div>
    </section>
  );
}
