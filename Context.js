import React from "react";
import data from "./pages/api/data.json"


const BulletinContext = React.createContext();
const bullitins = data.Events;
// export default BulletinContext;

export function BulletinProvider(props) {
    return (
      <BulletinContext.Provider value = {bullitins}>
          {props.children}
      </BulletinContext.Provider>
    )
  }

  const BulletinConsumer = BulletinContext.Consumer;

export default BulletinConsumer;