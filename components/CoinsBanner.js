import styles from "../styles/CoinsBanner.module.css";
import btc from "../images/coins/bitcoin.png";
import eth from "../images/coins/eth.png";
import xrp from "../images/coins/xrp.png";
import usdt from "../images/coins/usdt.png";
import ada from "../images/coins/ada.png";
import doge from "../images/coins/doge.png";
import dot from "../images/coins/dot.png";

function CoinsBanner() {
  return (
    <div className={styles.wrapper}>
      <Btc />
      <Eth />
      <Ada />
      <Usdt />
      <Xrp />
      <Doge />
      <Dot />
    </div>
  );
}

export default CoinsBanner;

function Btc() {
  return <img src={btc} alt="BTC" />;
}

function Eth() {
  return <img src={eth} alt="ETH" />;
}

function Xrp() {
  return <img src={xrp} alt="XRP" />;
}

function Usdt() {
  return <img src={usdt} alt="USD-T" />;
}

function Ada() {
  return <img src={ada} alt="ADA" />;
}

function Doge() {
  return <img src={doge} alt="DOGE" />;
}

function Dot() {
  return <img src={dot} alt="DOT" />;
}
