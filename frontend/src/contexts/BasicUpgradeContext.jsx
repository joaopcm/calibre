import { createContext, useContext, useState } from 'react';

import basicUpgrades from '../constants/basicUpgrades';

const BasicUpgradeContext = createContext({});

export function BasicUpgradeProvider({ children }) {
  const [purchasedUpgrades, setPurchasedUpgrades] = useState([]);
  const [upgrades] = useState(basicUpgrades);

  function buyUpgrade(upgrade) {
    setPurchasedUpgrades([...purchasedUpgrades, upgrade]);

    // TODO add the upgrade's multiplier to the computers's PPC (production per click)
  }

  return (
    <BasicUpgradeContext.Provider value={{
      purchasedUpgrades,
      upgrades,
      buyUpgrade,
    }}>
      {children}
    </BasicUpgradeContext.Provider>
  );
}

export const useBasicUpgradeContext = () => useContext(BasicUpgradeContext);