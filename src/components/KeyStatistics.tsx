import * as React from "react"
import { Box } from "./ui"
import * as keyStatisticStyles from './key-statistics.css'

type KeyStatistic = {
  subTitle: string
  heading: string
}
export interface KeyStatisticProps {
  statistics: [KeyStatistic]
}

export default function KeyStatistics(props: KeyStatisticProps) {
  const { statistics } = props;
  return statistics.map(
    (statistic) => {
      if(statistic) {
          return (
              <Box width="third" center className={keyStatisticStyles.KeyStatisticBlock}>
                  <p className={keyStatisticStyles.KeyStatisticTitle}>{statistic.heading}</p>
                  <p className={keyStatisticStyles.KeyStatisticSubTitle}>{statistic.subTitle}</p>
              </Box>
          );
      }
      return <></>;
    }
  )
}
