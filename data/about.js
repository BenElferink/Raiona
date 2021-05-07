import imageOne from "../images/designs/1.png";
import imageTwo from "../images/designs/2.png";
import imageThree from "../images/designs/3.png";
import imageFour from "../images/designs/4.png";

export const aboutSections = [
  {
    whiteTitle: "Emotions",
    accentTitle: "Artificial",
    Description: () => (
      <>
        <p>
          Artificial Emotions Trade with the latest, machine learning technology
        </p>
        <ul>
          <li>less risk</li>
          <li>more profits</li>
          <li>less volatility, smart trading</li>
          <li>bespoke investment products to suite you</li>
          <li>
            choose from 3, 6, 9 or 12 month cycles - 12% - 24% profit per month
          </li>
          <li>weekly profit withdrawal</li>
          <li>build a business: referral program and profit sharing feature</li>
        </ul>
      </>
    ),
    image: imageOne,
  },
  {
    whiteTitle: "Raiona",
    accentTitle: "About",
    subTitle: "Our Vision",

    Description: () => (
      <p>
        At Raiona, we believe that emerging technologies will improve the way we
        make financial decisions. AI and digitization are ushering in a new era,
        a new digital world that will impact our lives in new and unanticipated
        ways.
        <br />
        <br />
        We want to ensure that the benefits created by this shift are accessible
        to all. Our aim is to fuse new technologies with trading patterns and
        market trends in order to enhance trading abilities by utilizing
        artificial emotion technology to mitigate risk and improve
        profitability.
        <br />
        <br />
        We have developed a trading platform that takes the emotions out of
        trading decisions, resulting in a far greater rate of success, increased
        profits, reduced losses and reduced risk exposure.
      </p>
    ),
    image: imageTwo,
  },
  {
    whiteTitle: "Values",
    accentTitle: "Our",
    Description: () => (
      <p>
        The word Raiona is Mǟori for Lion. We chose this name not only because
        of our parent company Lion Group Holding but also for the values we
        share with Mǟori culture.
        <br />
        <br />
        Whakaiti – Humility
        <br />
        Enabling others to be great through humble leadership and guidance
        <br />
        <br />
        Ko tau rourou – Alturism Caring
        <br />
        Giving and sharing generously for long term future benefit and taking
        care of each other
        <br />
        <br />
        Taria te wǟ – Long Term Thinking
        <br />
        The notion of a long journey with clear direction, sustainable thinking,
        protection and care for future generations.
      </p>
    ),

    image: imageThree,
  },
  {
    whiteTitle: "Business",
    accentTitle: "Our",
    Description: () => (
      <p>
        Imagine that you could control your emotions to enhance your trading
        abilities. We at RAIONA have created a Proprietary AI, trading
        technology, we call “Artificial Emotions“ or “I-Emotions”.
        <br />
        <br />
        An AI emotion recognitiontechnology that analyses ones emotions and
        identifies the connection between the traders emotions and their trading
        patterns.Trading with this revolutionary, machine learning, system
        enables us to avoid emotional decisions that can be detrimental to
        profitability.
        <br />
        <br />
        The data gathered from the correlation between emotions and trading
        means we can manage the risk on each and every trade, better and with a
        higher rate of successful trades, trades that are based on pure facts,
        logic and reason rather than pure emotion or under the influence of
        emotion.
      </p>
    ),

    image: imageFour,
  },
];
