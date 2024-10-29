// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

import * as React from "react";
import {
  Flex as Flex__,
  classNames,
  createPlasmicElementProxy,
} from "@plasmicapp/react-web";
import projectcss from "./plasmic.module.css";
import sty from "./PlasmicDashboard.module.css";

// Icon Imports
import CurrencyDollar1Icon from "./icons/PlasmicIcon__CurrencyDollar1";
import GroupIcon from "./icons/PlasmicIcon__Group";
import FrameIcon from "./icons/PlasmicIcon__Frame";
import ArrowUp1Icon from "./icons/PlasmicIcon__ArrowUp1";
import Calendar2Icon from "./icons/PlasmicIcon__Calendar2";
import ChevronDownLargeIcon from "./icons/PlasmicIcon__ChevronDownLarge";
import ChevronLeftLargeIcon from "./icons/PlasmicIcon__ChevronLeftLarge";
import ChevronRightLargeIcon from "./icons/PlasmicIcon__ChevronRightLarge";
import FunnelIcon from "./icons/PlasmicIcon__Funnel";
import EditAltIcon from "./icons/PlasmicIcon__EditAlt";
import Group2Icon from "./icons/PlasmicIcon__Group2";
import EllipseIcon from "./icons/PlasmicIcon__Ellipse";
import chartRt8T6Nkpz3Qc from "./images/chart.svg";
import Menu5Icon from "./icons/PlasmicIcon__Menu5"; // plasmic-import: 7KzZjpFqGdS5/icon
//import { useNavigation } from "./NavigationContext";

export default function DashboardSection() {
  //   const { setActivePage } = useNavigation();

  // React.useEffect(() => {
  //   setActivePage("Dashboard");
  // }, [setActivePage]);

  return (
    <div className={classNames(projectcss.all, sty.dynamicSection)}>
      <div className={classNames(projectcss.all, sty.text__xL7U)}>Dashboard</div>

      <div className={classNames(projectcss.all, sty.tag1)}>
        <div className={classNames(projectcss.all, sty.frame8)}>
          <div className={classNames(projectcss.all, sty.todayOct202022)}>
            Today: Oct 20, 2022
          </div>
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.container3)}>
        <div className={classNames(projectcss.all, sty.sales)}>Clarity analysis</div>
        <div className={classNames(projectcss.all, sty.container4)}>
          <div className={classNames(projectcss.all, sty.text__vUrcQ)}>23k</div>
          <CurrencyDollar1Icon className={classNames(projectcss.all, sty.svg__zcSzp)} role="img" />
          <div className={classNames(projectcss.all, sty.tag2)}>
            <div className={classNames(projectcss.all, sty.frame9)}>
              <div className={classNames(projectcss.all, sty.text__j5YjI)}>Oct</div>
            </div>
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.lineChart1)}>
          <GroupIcon className={classNames(projectcss.all, sty.svg___4Gs16)} role="img" />
          <div className={classNames(projectcss.all, sty.frame10)}>
            <FrameIcon className={classNames(projectcss.all, sty.svg__iFcTx)} role="img" />
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.text__xVvw)}>Sep</div>
        <div className={classNames(projectcss.all, sty.text__f455O)}>Oct</div>
        <div className={classNames(projectcss.all, sty.text__kE)}>Nov</div>
        <div className={classNames(projectcss.all, sty.text__aQwuO)}>Dec</div>
        <div className={classNames(projectcss.all, sty.text__lcSKb)}>July</div>
        <div className={classNames(projectcss.all, sty.text__crPxg)}>Aug</div>

        <div className={classNames(projectcss.all, sty.container5)}>
          <div className={classNames(projectcss.all, sty.text___3Kkhp)}>25%</div>
          <ArrowUp1Icon className={classNames(projectcss.all, sty.svg__nt8YY)} role="img" />
          <div className={classNames(projectcss.all, sty.tag3)}>
            <div className={classNames(projectcss.all, sty.frame11)}>
              <div className={classNames(projectcss.all, sty.text__c6I9M)}>vs Nov</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown and Sorting Options */}
      <div className={classNames(projectcss.all, sty.dropdownButton1)}>
        <Calendar2Icon className={classNames(projectcss.all, sty.svg__rv5Io)} role="img" />
        <ChevronDownLargeIcon className={classNames(projectcss.all, sty.svg___5KcW7)} role="img" />
      </div>

      {/* Strategy Execution Section */}
      <div className={classNames(projectcss.all, sty.container11)}>
        <div className={classNames(projectcss.all, sty.orders)}>strategy execution</div>
        <div className={classNames(projectcss.all, sty.button1)}>View all</div>
        {/* Pagination */}
        <div className={classNames(projectcss.all, sty.button2)}>
          <ChevronLeftLargeIcon className={classNames(projectcss.all, sty.svg__owoK2)} role="img" />
        </div>
        <div className={classNames(projectcss.all, sty.button3)}>1</div>
        <div className={classNames(projectcss.all, sty.button4)}>2</div>
        <div className={classNames(projectcss.all, sty.button5)}>3</div>
        <div className={classNames(projectcss.all, sty.button6)}>4</div>
        <div className={classNames(projectcss.all, sty.button7)}>
          <Menu5Icon className={classNames(projectcss.all, sty.svg__sdWb3)} role="img" />
        </div>
        <div className={classNames(projectcss.all, sty.button10)}>
          <ChevronRightLargeIcon className={classNames(projectcss.all, sty.svg__xo7W)} role="img" />
        </div>
        <div className={classNames(projectcss.all, sty.button11)}>
          Filter <FunnelIcon className={classNames(projectcss.all, sty.svg__hB7M)} role="img" />
        </div>
      </div>


      {/* Pie Chart Section */}
      <div className={classNames(projectcss.all, sty.container26)}>
        <div className={classNames(projectcss.all, sty.customerSatisfaction)}>Modeling capabilities</div>
        <div className={classNames(projectcss.all, sty.pieChart2)}>
          <img src={chartRt8T6Nkpz3Qc} alt="Chart" className={sty.img} />
        </div>
      </div>

    </div>
  );
}
