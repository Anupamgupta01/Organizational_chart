import React, { Fragment } from "react";
import ProgressBar from "./progressBar";
import data from "./data.json";
// }
const Card = (props) => {
  let title, color, bkColor;
    title = props.data[0].percentage<=33?"At Risk":(props.data[0].percentage>33 && props.data[0].percentage<=66 ? "Off track" : "on track");
    color = props.data[0].percentage<=33?"#ff0000":(props.data[0].percentage>33 && props.data[0].percentage<=66 ? "orange" : "#00ff00");
    bkColor = props.data[0].percentage<=33?"#ffcccc":(props.data[0].percentage>33 && props.data[0].percentage<=66 ? "#ffeee6" : "#ccffcc");
  return (
    <ul>
      {props.data.map((item,index) => (
        <Fragment key={item.name}>
          <li>
            
            <div className="card">
              <div className="card-body">
                <h3>
                <span style={{float:"left"}}>{item.name}</span>
                <a href="google.com" style={{float:"right","text-align":"right"}}>{item.percentage}% complete</a>
                </h3>
              </div>
              <div className="card-body2" style={{display:"flex"}}>
              <div style={{"margin-right":"70px"}}>
                <h4>Total Sales: {item.targetted/100 * item.percentage}</h4>
                <h4>Targetted Sales: {item.targetted}</h4>
              </div>
              <div>
              <a href="google.com" style={{float:"right","text-align":"right",color:color}}>{title}</a>
              </div>
              </div>
              <div className="card-footer">
              <ProgressBar bgcolor={color} progress={item.percentage}  backColor={bkColor} />
              </div>
              <div></div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default Chart;
