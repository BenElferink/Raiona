import { Children, useState, useEffect } from "react";
import { plansData } from "../data/plans";
import styles from "../styles/Planner.module.css";

function Planner() {
  const coin = "BTC";
  const [apy, setApy] = useState(0);
  const [coinInputs, setCoinInputs] = useState({ from: "", to: "" });
  const [lastChanged, setLastChanged] = useState({});

  const calcCoinFrom = (value) => value / (apy / 100);
  const calcCoinTo = (value) => value * (apy / 100);

  const changeStates = (coin, fromAmount) => {
    setCoinInputs((prev) => ({
      ...prev,
      [coin]: fromAmount ? fromAmount : "",
    }));

    switch (coin) {
      case "from":
        if (apy) {
          const toAmount = calcCoinTo(fromAmount);
          setCoinInputs((prev) => ({ ...prev, to: toAmount ? toAmount : "" }));
        } else {
          setCoinInputs((prev) => ({ ...prev, to: "" }));
        }
        break;

      case "to":
        if (apy) {
          const toAmount = calcCoinFrom(fromAmount);
          setCoinInputs((prev) => ({
            ...prev,
            from: toAmount ? toAmount : "",
          }));
        } else {
          setCoinInputs((prev) => ({ ...prev, from: "" }));
        }
        break;

      default:
        break;
    }
  };

  const handleCoinChange = (e, coin) => {
    const fromAmount = e.target.value;
    changeStates(coin, fromAmount);
    setLastChanged({ e, coin, amount: true });
  };

  useEffect(() => {
    if (lastChanged.amount) {
      handleCoinChange(lastChanged.e, lastChanged.coin);
    }

    if (!apy && lastChanged.coin === "from") {
      setCoinInputs((prev) => ({ ...prev, to: "" }));
    } else if (!apy && lastChanged.coin === "to") {
      setCoinInputs((prev) => ({ ...prev, from: "" }));
    }
  }, [apy]);

  return (
    <div className={styles.container}>
      <div className={styles.apy}>
        <select value={apy} onChange={(e) => setApy(e.target.value)}>
          <option value={0}>Select a plan</option>
          {Children.toArray(
            plansData.map((x) => (
              <option value={x.apy}>{`${x.title} - ${x.apy}%`}</option>
            ))
          )}
        </select>
      </div>

      <div className={styles.coinValue}>
        <input
          placeholder="0"
          value={coinInputs["from"]}
          onChange={(e) => handleCoinChange(e, "from")}
        />
        {coin} <span>deposit</span>
      </div>
      <div className={styles.coinValue}>
        <input
          placeholder="0"
          value={coinInputs["to"]}
          onChange={(e) => handleCoinChange(e, "to")}
        />
        {coin} <span>earnings</span>
      </div>
    </div>
  );
}

export default Planner;
